import type { Product } from "~/types/product";
import { Ping } from "~/components/ping";
import { ProductEstimatedArrival } from "~/components/product-estimated-arrival";
import { ProductLowStockWarning } from "~/components/product-low-stock-warning";
import { ProductPrice } from "~/components/product-price";
import { ProductSplitPayments } from "~/components/product-split-payments";
import { ProductUsedPrice } from "~/components/product-used-price";
import { dinero, type DineroSnapshot } from "dinero.js";
import { Show, Suspense } from "solid-js";
import { AddToCart } from "~/components/add-to-cart";
import { delayShippingEstimate, withDelay } from "~/lib/delay";
import { createAsync } from "@solidjs/router";

function AddToCartFromCookies() {
  // Get the cart count from the users cookies and pass it to the client
  // AddToCart component
  // const cartCount = Number(cookies().get('_cart_count')?.value || '0');
  return <AddToCart initialCartCount={0} />;
}

function LoadingDots() {
  return (
    <div class="text-sm">
      <span class="space-x-0.5">
        <span class="inline-flex animate-[loading_1.4s_ease-in-out_infinite] rounded-full">
          &bull;
        </span>
        <span class="inline-flex animate-[loading_1.4s_ease-in-out_0.2s_infinite] rounded-full">
          &bull;
        </span>
        <span class="inline-flex animate-[loading_1.4s_ease-in-out_0.4s_infinite] rounded-full">
          &bull;
        </span>
      </span>
    </div>
  );
}

function UserSpecificDetails({ productId }: { productId: string }) {
  const product = createAsync<Product>(() =>
    withDelay(
      fetch(
        `https://app-router-api.vercel.app/api/products?id=${productId}&filter=price,usedPrice,leadTime,stock`
      ),
      delayShippingEstimate
    ).then((res) => res.json())
  );

  const price = () => dinero(product()?.price as DineroSnapshot<number>);

  return (
    <Show when={product()}>
      <ProductSplitPayments price={price()} />
      {product()!.usedPrice ? (
        <ProductUsedPrice usedPrice={product()!.usedPrice} />
      ) : null}
      <ProductEstimatedArrival leadTime={product()!.leadTime} hasDeliveryTime />
      {product()!.stock <= 1 ? (
        <ProductLowStockWarning stock={product()!.stock} />
      ) : null}
    </Show>
  );
}

export function Pricing({ product }: { product: Product }) {
  const price = dinero(product.price as DineroSnapshot<number>);

  return (
    <div class="space-y-4 rounded-lg bg-gray-900 p-3">
      <ProductPrice price={price} discount={product.discount} />

      <Ping />

      <Suspense fallback={<LoadingDots />}>
        <UserSpecificDetails productId={product.id} />
      </Suspense>

      <Suspense fallback={<AddToCart initialCartCount={0} />}>
        <AddToCartFromCookies />
      </Suspense>
    </div>
  );
}
