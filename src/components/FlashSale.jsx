import { useState, useEffect } from 'react';
import ProductCard from './ProductCard';

const FlashSale = ({ products, onViewAll }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 1,
    hours: 23,
    minutes: 59,
    seconds: 59
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        const totalSeconds = (prev.days * 24 * 3600) + (prev.hours * 3600) + (prev.minutes * 60) + prev.seconds - 1;
        
        if (totalSeconds <= 0) {
          clearInterval(timer);
          return { days: 0, hours: 0, minutes: 0, seconds: 0 };
        }

        return {
          days: Math.floor(totalSeconds / (24 * 3600)),
          hours: Math.floor((totalSeconds % (24 * 3600)) / 3600),
          minutes: Math.floor((totalSeconds % 3600) / 60),
          seconds: totalSeconds % 60
        };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (value) => value.toString().padStart(2, '0');

  return (
    <div className="w-full py-8 pl-4 pr-2 md:pl-6 md:pr-4">
      {/* Header Section */}
      <div className="flex items-center gap-3 mb-6">
        <div className="h-6 w-1 bg-red-500 rounded-full"></div>
        <span className="text-red-500 text-sm font-medium">
          Today
        </span>
      </div>

      {/* Title with Timer */}
      <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8 mb-6">
        <h2 className="text-xl sm:text-2xl font-bold">Flash Sales</h2>
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Timer Boxes */}
          <div className="flex items-center gap-1 sm:gap-2">
            {/* Days */}
            <div className="flex flex-col items-center">
              <span className="text-[10px] sm:text-xs font-medium text-gray-500 mb-1 sm:mb-1.5">Days</span>
              <div className="bg-gray-100 px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg min-w-[45px] sm:min-w-[60px] text-center">
                <span className="text-base sm:text-lg font-semibold text-gray-900">{formatTime(timeLeft.days)}</span>
              </div>
            </div>
            <span className="text-gray-400 text-base sm:text-lg font-medium mt-5 sm:mt-6">:</span>
            {/* Hours */}
            <div className="flex flex-col items-center">
              <span className="text-[10px] sm:text-xs font-medium text-gray-500 mb-1 sm:mb-1.5">Hours</span>
              <div className="bg-gray-100 px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg min-w-[45px] sm:min-w-[60px] text-center">
                <span className="text-base sm:text-lg font-semibold text-gray-900">{formatTime(timeLeft.hours)}</span>
              </div>
            </div>
            <span className="text-gray-400 text-base sm:text-lg font-medium mt-5 sm:mt-6">:</span>
            {/* Minutes */}
            <div className="flex flex-col items-center">
              <span className="text-[10px] sm:text-xs font-medium text-gray-500 mb-1 sm:mb-1.5">Minutes</span>
              <div className="bg-gray-100 px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg min-w-[45px] sm:min-w-[60px] text-center">
                <span className="text-base sm:text-lg font-semibold text-gray-900">{formatTime(timeLeft.minutes)}</span>
              </div>
            </div>
            <span className="text-gray-400 text-base sm:text-lg font-medium mt-5 sm:mt-6">:</span>
            {/* Seconds */}
            <div className="flex flex-col items-center">
              <span className="text-[10px] sm:text-xs font-medium text-gray-500 mb-1 sm:mb-1.5">Seconds</span>
              <div className="bg-gray-100 px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg min-w-[45px] sm:min-w-[60px] text-center">
                <span className="text-base sm:text-lg font-semibold text-gray-900">{formatTime(timeLeft.seconds)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Products Scroll Container */}
      <div className="relative mb-6">
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

      {/* View All Button Container */}
      <div className="flex justify-center">
        <button
          onClick={onViewAll}
          className="bg-red-500 text-white px-12 py-3 rounded-md text-sm font-medium hover:bg-red-600 transition-colors min-w-[200px]"
        >
          View All Products
        </button>
      </div>
    </div>
  );
};

export default FlashSale; 