import { Product } from '~/types/product';
import { dinero, toUnit, up, type DineroSnapshot } from 'dinero.js';

export const ProductUsedPrice = ({
  usedPrice: usedPriceRaw,
}: {
  usedPrice: Product['usedPrice'];
}) => {
  const usedPrice = dinero(usedPriceRaw as DineroSnapshot<number>);

  return (
    <div class="text-sm">
      <div class="text-gray-400">More buying choices</div>
      <div class="text-gray-200">
        ${toUnit(usedPrice, { digits: 0, round: up })} (used)
      </div>
    </div>
  );
};
