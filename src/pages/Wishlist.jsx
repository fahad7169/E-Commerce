import React from 'react';
import ProductCard from '@/components/ProductCard';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ShoppingCart, Trash2 } from 'lucide-react';

// Temporary mock data - later we'll connect this to a real wishlist state
const wishlistItems = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
    title: "Smart Watch Series 7",
    price: 199.99,
    originalPrice: 299.99,
    discountPercentage: 33,
    rating: 4.5,
    reviewCount: 128
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
    title: "Premium Wireless Headphones",
    price: 89.99,
    originalPrice: 149.99,
    discountPercentage: 40,
    rating: 4.8,
    reviewCount: 256
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12",
    title: "Smart Home Camera",
    price: 79.99,
    originalPrice: 99.99,
    discountPercentage: 20,
    rating: 4.2,
    reviewCount: 89
  }
];

const Wishlist = () => {
  const handleRemoveFromWishlist = (productId) => {
    console.log('Remove from wishlist:', productId);
    // TODO: Implement remove from wishlist functionality
  };

  const handleAddToCart = (productId) => {
    console.log('Add to cart:', productId);
    // TODO: Implement add to cart functionality
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">My Wishlist</h1>
          <p className="mt-2 text-sm text-gray-600">
            {wishlistItems.length} items in your wishlist
          </p>
        </div>

        {wishlistItems.length > 0 ? (
          <>
            {/* Wishlist Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {wishlistItems.map((product) => (
                <div key={product.id} className="relative group">
                  <ProductCard
                    productId={product.id}
                    {...product}
                    onAddToCart={() => handleAddToCart(product.id)}
                  />
                  {/* Delete Button */}
                  <button
                    onClick={() => handleRemoveFromWishlist(product.id)}
                    className="absolute top-2 right-2 p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-md 
                             opacity-0 group-hover:opacity-100 transition-all duration-200 
                             hover:bg-red-50 hover:scale-110 transform"
                    aria-label="Remove from wishlist"
                  >
                    <Trash2 className="w-5 h-5 text-red-500" />
                  </button>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                className="w-full sm:w-auto bg-black hover:bg-gray-800 text-white"
              >
                <Link to="/shop" className="flex items-center justify-center gap-2">
                  <ShoppingCart className="w-5 h-5" />
                  Continue Shopping
                </Link>
              </Button>
              <Button
                className="w-full sm:w-auto bg-red-500 hover:bg-red-600 text-white"
                onClick={() => console.log('Clear wishlist')}
              >
                Clear Wishlist
              </Button>
            </div>
          </>
        ) : (
          // Empty State
          <div className="text-center py-12">
            <div className="mb-4">
              <span className="material-symbols-outlined text-6xl text-gray-400">
                favorite_border
              </span>
            </div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Your wishlist is empty</h2>
            <p className="text-gray-600 mb-6">
              Save items you like in your wishlist. Review them anytime and easily move them to the cart.
            </p>
            <Button
              asChild
              className="bg-black hover:bg-gray-800 text-white"
            >
              <Link to="/shop" className="flex items-center justify-center gap-2">
                <ShoppingCart className="w-5 h-5" />
                Start Shopping
              </Link>
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Wishlist; 