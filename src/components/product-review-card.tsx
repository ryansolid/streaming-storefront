import type { Review } from '~/types/review';
import { ProductRating } from '~/components/product-rating';

export const ProductReviewCard = ({ review }: { review: Review }) => {
  return (
    <div class="space-y-4">
      <div class="space-y-2">
        <div class="flex items-center gap-x-2">
          <div class="h-6 w-6 rounded-full bg-gray-700" />
          <div class="text-sm text-white">{review.name}</div>
        </div>

        {review.rating ? <ProductRating rating={review.rating} /> : null}
      </div>

      <div class="text-gray-400">{review.text}</div>
    </div>
  );
};
