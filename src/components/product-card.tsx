import { Product } from "~/types/product";
import { ProductEstimatedArrival } from "~/components/product-estimated-arrival";
import { ProductLowStockWarning } from "~/components/product-low-stock-warning";
import { ProductPrice } from "~/components/product-price";
import { ProductRating } from "~/components/product-rating";
import { ProductUsedPrice } from "~/components/product-used-price";
import { dinero, type DineroSnapshot } from "dinero.js";

export const ProductCard = ({ product }: { product: Product }) => {
  const price = dinero(product.price as DineroSnapshot<number>);

  return (
    <div class="group block">
      <div class="space-y-2">
        <div class="relative aspect-square">
          {product.isBestSeller ? (
            <div class="absolute left-2 top-2 z-10 flex">
              <div class="rounded bg-gray-600 px-1.5 text-xs font-medium leading-5 text-white">
                Best Seller
              </div>
            </div>
          ) : null}
          <img
            src={`/${product.image}`}
            sizes="(min-width: 1184px) 200px, (min-width: 1024px) 20vw, (min-width: 768px) 25vw, 50vw"
            class="rounded-xl grayscale group-hover:opacity-80"
            alt={product.name}
          />
        </div>

        <div class="truncate text-sm font-medium text-white group-hover:text-vercel-cyan">
          {product.name}
        </div>

        {product.rating ? <ProductRating rating={product.rating} /> : null}

        <ProductPrice price={price} discount={product.discount} />

        {product.usedPrice ? (
          <ProductUsedPrice usedPrice={product.usedPrice} />
        ) : null}

        <ProductEstimatedArrival leadTime={product.leadTime} />

        {product.stock <= 1 ? (
          <ProductLowStockWarning stock={product.stock} />
        ) : null}
      </div>
    </div>
  );
};
