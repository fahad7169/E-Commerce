import { useState } from 'react';
import { Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const ProductCard = ({ 
  productId,
  image, 
  title, 
  price, 
  originalPrice, 
  discountPercentage, 
  rating, 
  reviewCount,
  onAddToCart 
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="relative min-w-[250px] bg-white rounded-lg shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link to={`/product/${productId}`} className="block group" tabIndex={-1}>
        {/* Discount Badge */}
        {discountPercentage && (
          <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded-md text-sm font-medium z-10">
            {discountPercentage}% OFF
          </div>
        )}

        {/* Product Image Container - Fixed aspect ratio */}
        <div className="relative w-full pt-[100%]">
          <div className="absolute inset-0">
            <img 
              src={image} 
              alt={title}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        </div>

        {/* Product Info */}
        <div className="p-4">
          <h3 className="text-sm font-medium text-gray-900 mb-2 line-clamp-2">{title}</h3>
          {/* Price Section */}
          <div className="flex items-center gap-2 mb-2">
            <span className="text-lg font-semibold text-gray-900">
              ${price.toFixed(2)}
            </span>
            {originalPrice && (
              <span className="text-sm text-gray-500 line-through">
                ${originalPrice.toFixed(2)}
              </span>
            )}
          </div>
          {/* Rating Section */}
          <div className="flex items-center gap-1">
            <div className="flex items-center">
              {[...Array(5)].map((_, index) => {
                const full = index + 1 <= Math.floor(rating);
                const half = !full && index + 0.5 <= rating;
                return (
                  <span key={index} className="relative w-4 h-4 inline-block">
                    {/* Full Star */}
                    {full && (
                      <Star size={16} className="text-[#FFD600] fill-[#FFD600] absolute inset-0" />
                    )}
                    {/* Half Star */}
                    {half && (
                      <>
                        <Star size={16} className="text-gray-300 fill-gray-300 absolute inset-0" />
                        <Star size={16} className="text-[#FFD600] fill-[#FFD600] absolute inset-0" style={{ clipPath: 'inset(0 50% 0 0)' }} />
                      </>
                    )}
                    {/* Empty Star */}
                    {!full && !half && (
                      <Star size={16} className="text-gray-300 fill-gray-300 absolute inset-0" />
                    )}
                  </span>
                );
              })}
            </div>
            <span className="text-sm text-gray-500">({reviewCount})</span>
          </div>
        </div>
      </Link>
      {/* Add to Cart Button with improved animation */}
      <div 
        className={`absolute bottom-0 left-0 right-0 bg-black/90 backdrop-blur-sm transition-all duration-300 ease-in-out ${
          isHovered ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
        }`}
      >
        <button
          onClick={e => { e.stopPropagation(); e.preventDefault(); onAddToCart && onAddToCart(); }}
          className="w-full py-3 px-4 text-white text-sm font-medium hover:bg-black/80 transition-colors duration-200"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard; 