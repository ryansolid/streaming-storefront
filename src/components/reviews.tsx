import type { Review } from "~/types/review";
import { ProductReviewCard } from "~/components/product-review-card";
import { delayReviews, withDelay } from "~/lib/delay";
import { createAsync } from "@solidjs/router";
import { For } from "solid-js";

export function Reviews() {
  let reviews = createAsync<Review[]>(() =>
    withDelay(
      fetch(
        // We intentionally delay the response to simulate a slow data
        // request that would benefit from streaming
        `https://app-router-api.vercel.app/api/reviews`
      ).then((res) => res.json()),
      delayReviews
    )
  );

  return (
    <div class="space-y-6">
      <div class="text-lg font-medium text-white">Customer Reviews</div>
      <div class="space-y-8">
        <For each={reviews()}>
          {(review) => <ProductReviewCard review={review} />}
        </For>
      </div>
    </div>
  );
}

const shimmer = `relative overflow-hidden before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_1.5s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent`;

function Skeleton() {
  return (
    <div class="space-y-4">
      <div class="h-6 w-2/6 rounded-lg bg-gray-900" />
      <div class="h-4 w-1/6 rounded-lg bg-gray-900" />
      <div class="h-4 w-full rounded-lg bg-gray-900" />
      <div class="h-4 w-4/6 rounded-lg bg-gray-900" />
    </div>
  );
}

export function ReviewsSkeleton() {
  return (
    <div class="space-y-6">
      <div class={`h-7 w-2/5 rounded-lg bg-gray-900 ${shimmer}`} />
      <div class="space-y-8">
        <Skeleton />
        <Skeleton />
      </div>
    </div>
  );
}
