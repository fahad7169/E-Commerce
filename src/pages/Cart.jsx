import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ChevronRight, Trash2, Plus, Minus, ShoppingBag, ChevronUp } from 'lucide-react';

// Temporary mock data - later we'll connect this to a real cart state
const cartItems = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
    title: "Smart Watch Series 7",
    price: 199.99,
    quantity: 1,
    color: "Black",
    size: "Standard"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
    title: "Premium Wireless Headphones",
    price: 89.99,
    quantity: 2,
    color: "Silver",
    size: "One Size"
  }
];

const Cart = () => {
  const [showPriceBreakdown, setShowPriceBreakdown] = useState(false);

  const handleUpdateQuantity = (productId, newQuantity) => {
    console.log('Update quantity:', productId, newQuantity);
    // TODO: Implement quantity update functionality
  };

  const handleRemoveItem = (productId) => {
    console.log('Remove item:', productId);
    // TODO: Implement remove item functionality
  };

  const subtotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  const shipping = 10;
  const tax = subtotal * 0.1; // 10% tax
  const total = subtotal + shipping + tax;

  return (
    <div className="min-h-screen bg-gray-50 pb-32 lg:pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center space-x-2 text-sm text-gray-500 mb-4 lg:mb-8">
          <Link to="/" className="hover:text-gray-900">Home</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-gray-900">Cart</span>
        </nav>

        {/* Header */}
        <div className="mb-4 lg:mb-8">
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">Shopping Cart</h1>
          <p className="mt-1 lg:mt-2 text-sm text-gray-600">
            {cartItems.length} items in your cart
          </p>
        </div>

        {cartItems.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-sm divide-y">
                {cartItems.map((item) => (
                  <div key={item.id} className="p-4 lg:p-6">
                    <div className="flex gap-4">
                      {/* Product Image */}
                      <div className="w-20 h-20 lg:w-24 lg:h-24 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      {/* Product Details */}
                      <div className="flex-1 min-w-0">
                        <div className="flex justify-between items-start">
                          <div className="flex-1 pr-2">
                            <h3 className="font-medium text-gray-900 text-sm lg:text-base truncate">{item.title}</h3>
                            <p className="text-xs lg:text-sm text-gray-500 mt-1">
                              {item.color} • {item.size}
                            </p>
                            <p className="text-sm lg:text-base font-medium text-gray-900 mt-1">
                              ${(item.price * item.quantity).toFixed(2)}
                            </p>
                          </div>
                          <button
                            onClick={() => handleRemoveItem(item.id)}
                            className="text-gray-400 hover:text-red-500 transition-colors flex-shrink-0"
                          >
                            <Trash2 className="w-4 h-4 lg:w-5 lg:h-5" />
                          </button>
                        </div>

                        {/* Quantity Controls - Always visible */}
                        <div className="mt-3 flex items-center justify-between">
                          <div className="flex items-center border rounded-lg">
                            <button
                              onClick={() => handleUpdateQuantity(item.id, Math.max(1, item.quantity - 1))}
                              className="p-1 lg:p-2 hover:bg-gray-100 rounded-l-lg"
                            >
                              <Minus className="w-3 h-3 lg:w-4 lg:h-4" />
                            </button>
                            <span className="px-2 lg:px-4 py-1 lg:py-2 border-x text-sm">{item.quantity}</span>
                            <button
                              onClick={() => handleUpdateQuantity(item.id, item.quantity + 1)}
                              className="p-1 lg:p-2 hover:bg-gray-100 rounded-r-lg"
                            >
                              <Plus className="w-3 h-3 lg:w-4 lg:h-4" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Order Summary - Desktop */}
            <div className="hidden lg:block lg:col-span-1">
              <div className="bg-white rounded-lg shadow-sm p-6 sticky top-8">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">Order Summary</h2>
                
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Subtotal</span>
                    <span className="text-gray-900">${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Shipping</span>
                    <span className="text-gray-900">${shipping.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Tax</span>
                    <span className="text-gray-900">${tax.toFixed(2)}</span>
                  </div>
                  <div className="border-t pt-3 mt-3">
                    <div className="flex justify-between font-medium">
                      <span className="text-gray-900">Total</span>
                      <span className="text-gray-900">${total.toFixed(2)}</span>
                    </div>
                  </div>
                </div>

                <Button className="w-full mt-6 bg-black hover:bg-gray-800 text-white">
                  Proceed to Checkout
                </Button>

                <div className="mt-4 text-center">
                  <Link
                    to="/shop"
                    className="text-sm text-gray-600 hover:text-gray-900 flex items-center justify-center gap-2"
                  >
                    <ShoppingBag className="w-4 h-4" />
                    Continue Shopping
                  </Link>
                </div>
              </div>
            </div>

            {/* Order Summary - Mobile/Tablet (Fixed Bottom) */}
            <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t shadow-lg z-50">
              {/* Price Breakdown Dropdown */}
              <div 
                className="px-4 py-2 border-b bg-gray-50 cursor-pointer"
                onClick={() => setShowPriceBreakdown(!showPriceBreakdown)}
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Price Details</span>
                  <ChevronUp 
                    className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${
                      showPriceBreakdown ? 'rotate-180' : ''
                    }`}
                  />
                </div>
              </div>

              {/* Collapsible Price Breakdown */}
              <div 
                className={`bg-white transition-all duration-200 overflow-hidden ${
                  showPriceBreakdown ? 'max-h-32' : 'max-h-0'
                }`}
              >
                <div className="px-4 py-3 space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Subtotal</span>
                    <span className="text-gray-900">${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Shipping</span>
                    <span className="text-gray-900">${shipping.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Tax</span>
                    <span className="text-gray-900">${tax.toFixed(2)}</span>
                  </div>
                </div>
              </div>

              {/* Main Order Summary */}
              <div className="p-4">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <p className="text-sm text-gray-600">Total</p>
                    <p className="text-lg font-semibold text-gray-900">${total.toFixed(2)}</p>
                  </div>
                  <Button className="bg-black hover:bg-gray-800 text-white px-6">
                    Checkout
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          // Empty Cart State
          <div className="text-center py-12 bg-white rounded-lg shadow-sm">
            <div className="mb-4">
              <ShoppingBag className="w-12 h-12 lg:w-16 lg:h-16 text-gray-400 mx-auto" />
            </div>
            <h2 className="text-lg lg:text-xl font-semibold text-gray-900 mb-2">Your cart is empty</h2>
            <p className="text-sm lg:text-base text-gray-600 mb-6">
              Looks like you haven't added any items to your cart yet.
            </p>
            <Button
              asChild
              className="bg-black hover:bg-gray-800 text-white"
            >
              <Link to="/shop" className="flex items-center justify-center gap-2">
                <ShoppingBag className="w-4 h-4 lg:w-5 lg:h-5" />
                Start Shopping
              </Link>
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart; 