export const ProductLowStockWarning = ({ stock }: { stock: number }) => {
  if (stock > 3) {
    return null;
  }

  if (stock === 0) {
    return <div class="text-sm text-vercel-cyan">Out of stock</div>;
  }

  return (
    <div class="text-sm text-vercel-cyan">Only {stock} left in stock</div>
  );
};
