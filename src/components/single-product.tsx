import { createAsync } from "@solidjs/router";

import { Pricing } from "~/components/pricing";
import type { Product } from "~/types/product";
import { ProductRating } from "~/components/product-rating";
import { Show } from "solid-js";
import { fetchSingleProduct } from "~/lib/prefetched";

export function ImageSmall({ alt }: { alt: string }) {
  return (
    <img
      alt={alt}
      loading="lazy"
      decoding="async"
      data-nimg="fill"
      class="rounded-lg grayscale"
      style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent"
      sizes="(min-width: 1184px) 75px, (min-width: 768px) 8.33vw, 16.66vw"
      srcset="/eniki/64.webp 64w, /eniko/96.webp 96w, /eniko/128.webp 128w, /eniko/256.webp 256w, /eniko/384.webp 384w, /eniko/640.webp 640w, /eniko/750.webp 750w, /eniko/800.webp 3840w"
      src="/eniko/800.webp 3840w"
    />
  );
}

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
              <img
                alt={product()!.name}
                decoding="async"
                data-nimg="fill"
                class="block rounded-lg grayscale"
                style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent"
                sizes="(min-width: 1184px) 200px, (min-width: 1024px) 20vw, (min-width: 768px) 25vw, 50vw"
                srcset="/eniko/128.webp 128w, /eniko/256.webp 256w, /eniko/384.webp 384w, /eniko/640.webp 640w, /eniko/750.webp 750w, /eniko/800.webp 3840w"
                src="/eniko/800.webp 3840w"
              />
            </div>

            <div class="flex gap-x-2">
              <div class="relative aspect-square w-1/3">
                <ImageSmall alt={product()!.name} />
              </div>
              <div class="relative aspect-square w-1/3">
                <ImageSmall alt={product()!.name} />
              </div>
              <div class="relative aspect-square w-1/3">
                <ImageSmall alt={product()!.name} />
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
