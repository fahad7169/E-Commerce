import React from 'react';
import { ChevronRight } from 'lucide-react';

const CategoryCard = ({ image, title, itemCount, onClick }) => {
  return (
    <div 
      className="relative min-w-[200px] bg-white rounded-lg shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md cursor-pointer group"
      onClick={onClick}
    >
      {/* Category Image */}
      <div className="relative w-full pt-[100%]">
        <div className="absolute inset-0">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300" />
        </div>
      </div>

      {/* Category Info */}
      <div className="absolute inset-0 flex flex-col justify-end p-4">
        <h3 className="text-lg font-semibold text-white mb-1">{title}</h3>
        <p className="text-sm text-white/90">{itemCount} Items</p>
      </div>
    </div>
  );
};

const BrowseByCategories = ({ categories, onViewAll }) => {
  return (
    <div className="w-full py-8 pl-4 pr-2 md:pl-6 md:pr-4">
      {/* Header Section */}
      <div className="flex items-center gap-3 mb-6">
        <div className="h-6 w-1 bg-red-500 rounded-full"></div>
        <span className="text-red-500 text-sm font-medium">
          Categories
        </span>
      </div>

      {/* Title with View All Button */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">Browse By Categories</h2>
        <button
          onClick={onViewAll}
          className="bg-red-500 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-red-600 transition-colors flex items-center gap-1"
        >
          View All
      
        </button>
      </div>

      {/* Categories Scroll Container */}
      <div className="relative">
        <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
          {categories.map((category) => (
            <CategoryCard
              key={category.id}
              {...category}
              onClick={() => console.log('Category clicked:', category.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrowseByCategories; 