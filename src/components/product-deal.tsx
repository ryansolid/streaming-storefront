import { ProductCurrencySymbol } from '~/components/product-currency-symbol';
import { toUnit, type Dinero } from 'dinero.js';

export const ProductDeal = ({
  price: priceRaw,
  discount: discountRaw,
}: {
  price: Dinero<number>;
  discount: {
    amount: Dinero<number>;
  };
}) => {
  const discount = toUnit(discountRaw.amount);
  const price = toUnit(priceRaw);
  const percent = Math.round(100 - (discount / price) * 100);

  return (
    <div class="flex gap-x-1.5">
      <div class="text-lg font-bold leading-snug text-vercel-cyan">
        -{percent}%
      </div>
      <div class="flex">
        <div class="text-sm leading-snug text-white">
          <ProductCurrencySymbol dinero={discountRaw.amount} />
        </div>
        <div class="text-lg font-bold leading-snug text-white">
          {discount}
        </div>
      </div>
      <div class="text-sm leading-snug text-gray-400 line-through">
        <ProductCurrencySymbol dinero={priceRaw} />
        {price}
      </div>
    </div>
  );
};
