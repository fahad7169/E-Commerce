import React from 'react';
import ProductCard from './ProductCard';

const BestSellingProducts = ({ products, onViewAll }) => {
  return (
    <div className="w-full py-8 pl-4 pr-2 md:pl-6 md:pr-4">
      {/* Header Section */}
      <div className="flex items-center gap-3 mb-6">
        <div className="h-6 w-1 bg-red-500 rounded-full"></div>
        <span className="text-red-500 text-sm font-medium">
          This Month
        </span>
      </div>

      {/* Title with View All Button */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">Best Selling Products</h2>
        <button
          onClick={onViewAll}
          className="bg-red-500 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-red-600 transition-colors"
        >
          View All
        </button>
      </div>

      {/* Products Scroll Container */}
      <div className="relative">
        <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
          {products.map((product) => (
            <ProductCard
              productId={product.id}
              {...product}
              onAddToCart={() => console.log('Add to cart:', product.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BestSellingProducts; 