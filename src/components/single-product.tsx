import { createAsync } from "@solidjs/router";

import { Pricing } from "~/components/pricing";
import type { Product } from "~/types/product";
import { ProductRating } from "~/components/product-rating";
import { Show } from "solid-js";
import { fetchSingleProduct } from "~/lib/prefetched";
import { Image, ImageSmall } from "./image";

export function SingleProduct() {
  const product = createAsync<Product>(() => fetchSingleProduct(1), {
    deferStream: true,
  });

  return (
    <Show when={product()}>
      <div class="grid grid-cols-4 gap-6">
        <div class="col-span-2 md:order-1 md:col-span-1">
          <div class="space-y-2">
            <div class="relative aspect-square">
              <Image
                src={`/${product()!.image}`}
                class="block rounded-lg grayscale"
                alt={product()!.name}
                loading="eager"
              />
            </div>

            <div class="flex gap-x-2">
              <div class="relative aspect-square w-1/3">
                <ImageSmall
                  src={`/${product()!.image}`}
                  class="rounded-lg grayscale"
                  alt={product()!.name}
                />
              </div>
              <div class="relative aspect-square w-1/3">
                <ImageSmall
                  src={`/${product()!.image}`}
                  class="rounded-lg grayscale"
                  alt={product()!.name}
                />
              </div>
              <div class="relative aspect-square w-1/3">
                <ImageSmall
                  src={`/${product()!.image}`}
                  class="rounded-lg grayscale"
                  alt={product()!.name}
                />
              </div>
            </div>
          </div>
        </div>

        <div class="col-span-2 md:order-3 md:col-span-1">
          <Pricing product={product()!} />
        </div>

        <div class="col-span-full space-y-4 md:order-2 md:col-span-2">
          <div class="truncate text-xl font-medium text-white lg:text-2xl">
            {product()!.name}
          </div>

          <ProductRating rating={product()!.rating} />

          <div class="space-y-4 text-sm text-gray-200">
            <p>{product()!.description}</p>
            <p>{product()!.description}</p>
          </div>
        </div>
      </div>
    </Show>
  );
}
