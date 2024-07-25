import { Product } from "~/types/product";
import { ProductCard } from "~/components/product-card";
import { delayRecommendedProducts, withDelay } from "~/lib/delay";
import { createAsync } from "@solidjs/router";
import { For } from "solid-js";

export function RecommendedProducts() {
  let products = createAsync<Product[]>(() =>
    withDelay(
      fetch(
        // We intentionally delay the response to simulate a slow data
        // request that would benefit from streaming
        `https://app-router-api.vercel.app/api/products?filter=1`
      ).then((res) => res.json()),
      delayRecommendedProducts
    )
  );

  return (
    <div class="space-y-6">
      <div>
        <div class="text-lg font-medium text-white">
          Recommended Products for You
        </div>
        <div class="text-sm text-gray-400">
          Based on your preferences and shopping habits
        </div>
      </div>
      <div class="grid grid-cols-4 gap-6">
        <For each={products()}>
          {(product) => (
            <div class="col-span-2 md:col-span-1">
              <ProductCard product={product} />
            </div>
          )}
        </For>
      </div>
    </div>
  );
}

const shimmer = `relative overflow-hidden before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_1.5s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent`;

function ProductSkeleton() {
  return (
    <div class="col-span-4 space-y-4 lg:col-span-1">
      <div class={`relative h-[167px] rounded-xl bg-gray-900 ${shimmer}`} />
      <div class="h-4 w-full rounded-lg bg-gray-900" />
      <div class="h-6 w-1/3 rounded-lg bg-gray-900" />
      <div class="h-4 w-full rounded-lg bg-gray-900" />
      <div class="h-4 w-4/6 rounded-lg bg-gray-900" />
    </div>
  );
}

export function RecommendedProductsSkeleton() {
  return (
    <div class="space-y-6 pb-[5px]">
      <div class="space-y-2">
        <div class={`h-6 w-1/3 rounded-lg bg-gray-900 ${shimmer}`} />
        <div class={`h-4 w-1/2 rounded-lg bg-gray-900 ${shimmer}`} />
      </div>

      <div class="grid grid-cols-4 gap-6">
        <ProductSkeleton />
        <ProductSkeleton />
        <ProductSkeleton />
        <ProductSkeleton />
      </div>
    </div>
  );
}
