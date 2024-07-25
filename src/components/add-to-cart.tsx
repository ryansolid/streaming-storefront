"use client";

import { revalidate } from "@solidjs/router";
import { useTransition } from "solid-js";
import { useCartCount } from "~/components/cart-count-context";

export function AddToCart({ initialCartCount }: { initialCartCount: number }) {
  const [isPending, startTransition] = useTransition();

  const [, setOptimisticCartCount] = useCartCount(initialCartCount);

  const addToCart = () => {
    setOptimisticCartCount(c => (c || 0) + 1);

    // // update the cart count cookie
    // document.cookie = `_cart_count=${initialCartCount + 1}; path=/; max-age=${
    //   60 * 60 * 24 * 30
    // }};`;

    // // Normally you would also send a request to the server to add the item
    // // to the current users cart
    // // await fetch(`https://api.acme.com/...`);

    // // Use a transition and isPending to create inline loading UI
    // startTransition(() => {
    //   setOptimisticCartCount(null);

    //   // Refresh the current route and fetch new data from the server without
    //   // losing client-side browser or React state.
    //   revalidate();

    //   // We're working on more fine-grained data mutation and revalidation:
    //   // https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions
    // });
  };

  return (
    <button
      class="relative w-full items-center space-x-2 rounded-lg bg-vercel-blue px-3 py-1  text-sm font-medium text-white hover:bg-vercel-blue/90 disabled:text-white/70"
      onClick={addToCart}
      disabled={isPending()}
    >
      Add to Cart
      {isPending() ? (
        <div class="absolute right-2 top-1.5" role="status">
          <div class="h-4 w-4 animate-spin rounded-full border-[3px] border-white border-r-transparent" />
          <span class="sr-only">Loading...</span>
        </div>
      ) : null}
    </button>
  );
}
