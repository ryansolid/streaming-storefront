import { Icon } from "solid-heroicons";
import { star } from "solid-heroicons/solid";

export const ProductRating = ({ rating }: { rating: number }) => {
  return (
    <div class="flex gap-x-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <Icon
          path={star}
          class={"w-4 " + (i < rating ? "text-white" : "text-gray-500")}
        />
      ))}
    </div>
  );
};
