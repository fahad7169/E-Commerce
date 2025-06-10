import React from 'react';
import { useParams, Link } from 'react-router-dom';
import ProductCard from '@/components/ProductCard';

// Mock product data
const products = [
  {
    id: '1',
    name: 'Havic HV G-92 Gamepad',
    price: 192,
    oldPrice: 220,
    images: [
      'https://images.unsplash.com/photo-1606813904194-0b3b0c4e0b8c',
      'https://images.unsplash.com/photo-1517336714731-489689fd1ca8',
      'https://images.unsplash.com/photo-1511512578047-dfb367046420',
      'https://images.unsplash.com/photo-1519125323398-675f0ddb6308',
    ],
    rating: 4.8,
    reviews: 150,
    inStock: true,
    description:
      'PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.',
    colours: ['#fff', '#ef4444'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    category: 'Gaming',
  },
  {
    id: '2',
    name: 'HAVIT HV-G92 Gamepad',
    price: 120,
    oldPrice: 160,
    images: ['https://images.unsplash.com/photo-1517336714731-489689fd1ca8'],
    rating: 4.5,
    reviews: 88,
    inStock: true,
    description: 'Red gamepad for PC and console.',
    colours: ['#ef4444'],
    sizes: ['M', 'L'],
    category: 'Gaming',
  },
  {
    id: '3',
    name: 'AK-900 Wired Keyboard',
    price: 960,
    oldPrice: 1160,
    images: ['https://images.unsplash.com/photo-1519389950473-47ba0277781c'],
    rating: 4.2,
    reviews: 75,
    inStock: true,
    description: 'RGB mechanical keyboard.',
    colours: ['#000'],
    sizes: [],
    category: 'Accessories',
  },
  {
    id: '4',
    name: 'IPS LCD Gaming Monitor',
    price: 370,
    oldPrice: 400,
    images: ['https://images.unsplash.com/photo-1517336714731-489689fd1ca8'],
    rating: 4.7,
    reviews: 99,
    inStock: true,
    description: 'High refresh rate gaming monitor.',
    colours: ['#000'],
    sizes: [],
    category: 'Accessories',
  },
  {
    id: '5',
    name: 'RGB Liquid CPU Cooler',
    price: 160,
    oldPrice: 170,
    images: ['https://images.unsplash.com/photo-1519125323398-675f0ddb6308'],
    rating: 4.3,
    reviews: 65,
    inStock: true,
    description: 'Efficient CPU cooling with RGB.',
    colours: ['#60a5fa'],
    sizes: [],
    category: 'Accessories',
  },
];

export default function ProductDetails() {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const related = products.filter(
    (p) => p.category === product.category && p.id !== product.id
  );
  const [mainImg, setMainImg] = React.useState(product.images[0]);
  const [selectedColour, setSelectedColour] = React.useState(product.colours[0]);
  const [selectedSize, setSelectedSize] = React.useState(product.sizes[0] || '');
  const [qty, setQty] = React.useState(1);

  if (!product) return <div className="p-8 text-center">Product not found.</div>;

  return (
    <div className="max-w-6xl mx-auto px-2 sm:px-4 py-8">
      {/* Breadcrumb */}
      <nav className="text-xs sm:text-sm text-gray-500 mb-6 flex flex-wrap gap-1 items-center">
        <Link to="/" className="hover:underline">Account</Link>
        <span>/</span>
        <Link to="/category/gaming" className="hover:underline">Gaming</Link>
        <span>/</span>
        <span className="text-gray-900 font-medium">{product.name}</span>
      </nav>
      <div className="flex flex-col md:flex-row gap-8">
        {/* Image Gallery */}
        <div className="flex flex-col md:flex-row md:w-1/2 gap-4">
          {/* Thumbnails */}
          <div className="flex md:flex-col gap-2 md:gap-3 md:mr-2 md:w-20">
            {product.images.map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`thumb-${i}`}
                className={`w-14 h-14 sm:w-16 sm:h-16 object-cover rounded-lg border-2 cursor-pointer shadow-sm transition-all duration-200
                  ${mainImg === img ? 'border-red-500 ring-2 ring-red-200 scale-105' : 'border-gray-200 hover:border-red-300 hover:scale-105'}`}
                onClick={() => setMainImg(img)}
              />
            ))}
          </div>
          {/* Main Image */}
          <div className="flex-1 flex items-center justify-center bg-white rounded-xl p-4 min-h-[320px] shadow-lg border">
            <img
              src={mainImg}
              alt={product.name}
              className="max-h-96 object-contain rounded-lg transition-transform duration-300 hover:scale-105 cursor-zoom-in"
            />
          </div>
        </div>
        {/* Product Info */}
        <div className="md:w-1/2 flex flex-col gap-6 bg-white rounded-xl shadow-lg border p-6">
          <h1 className="text-2xl sm:text-3xl font-bold leading-tight text-gray-900">{product.name}</h1>
          <div className="flex items-center gap-3 flex-wrap">
            <span className="text-yellow-400 text-lg">★</span>
            <span className="font-semibold text-gray-800">{product.rating}</span>
            <span className="text-gray-500">({product.reviews} Reviews)</span>
            <span className={`ml-2 px-2 py-0.5 rounded text-xs font-semibold ${product.inStock ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>{product.inStock ? 'In Stock' : 'Out of Stock'}</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-2xl font-bold text-red-500">${product.price.toFixed(2)}</span>
            {product.oldPrice && (
              <span className="text-lg text-gray-400 line-through">${product.oldPrice}</span>
            )}
          </div>
          <div className="text-gray-600 text-base leading-relaxed">{product.description}</div>
          {/* Colours */}
          <div className="flex items-center gap-3">
            <span className="font-medium">Colours:</span>
            {product.colours.map((c, i) => (
              <button
                key={i}
                className={`w-7 h-7 rounded-full border-2 flex items-center justify-center transition-all duration-200 ${selectedColour === c ? 'border-red-500 ring-2 ring-red-200' : 'border-gray-300 hover:border-red-400'}`}
                style={{ background: c }}
                onClick={() => setSelectedColour(c)}
              >
                {selectedColour === c && (
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                )}
              </button>
            ))}
          </div>
          {/* Sizes */}
          {product.sizes.length > 0 && (
            <div className="flex items-center gap-3 flex-wrap">
              <span className="font-medium">Size:</span>
              {product.sizes.map((s) => (
                <button
                  key={s}
                  className={`px-3 py-1 border rounded-lg font-semibold text-sm transition-all duration-200 ${selectedSize === s ? 'bg-red-500 text-white border-red-500 shadow' : 'border-gray-300 hover:border-red-400'}`}
                  onClick={() => setSelectedSize(s)}
                >
                  {s}
                </button>
              ))}
            </div>
          )}
          {/* Quantity and Actions */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-2">
            <div className="flex items-center gap-2 border rounded-lg px-2 py-1 bg-gray-50">
              <button onClick={() => setQty(qty > 1 ? qty - 1 : 1)} className="px-2 py-1 text-lg font-bold text-gray-700 hover:text-red-500">-</button>
              <span className="px-2 min-w-[24px] text-center font-semibold">{qty}</span>
              <button onClick={() => setQty(qty + 1)} className="px-2 py-1 text-lg font-bold text-gray-700 hover:text-red-500">+</button>
            </div>
            <button className="flex items-center gap-2 px-6 py-2 bg-red-500 text-white rounded-lg font-semibold hover:bg-red-600 transition shadow">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H19m-6 4a2 2 0 100-4 2 2 0 000 4zm7 0a2 2 0 100-4 2 2 0 000 4z" /></svg>
              Buy Now
            </button>
            <button className="flex items-center gap-1 p-2 border rounded-lg hover:bg-gray-100 transition group" title="Add to Wishlist">
              <svg className="w-5 h-5 text-red-500 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" /></svg>
            </button>
          </div>
          {/* Delivery Info */}
          <div className="flex flex-col gap-2 mt-4">
            <div className="flex items-center gap-3 text-sm bg-gray-50 rounded-lg p-2">
              <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500"><rect x="1" y="3" width="15" height="13" rx="2"/><path d="M16 8h2a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h2"/></svg>
              <span className="font-medium">Free Delivery</span>
              <span className="text-gray-400 ml-2">Enter your postal code for Delivery Availability</span>
            </div>
            <div className="flex items-center gap-3 text-sm bg-gray-50 rounded-lg p-2">
              <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500"><path d="M3 6v12a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6"/><path d="M16 2v4H8V2"/></svg>
              <span className="font-medium">Return Delivery</span>
              <span className="text-gray-400 ml-2">Free 30 Days Delivery Returns. Details</span>
            </div>
          </div>
        </div>
      </div>
      {/* Related Items */}
      <div className="mt-12">
        <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
          <span className="inline-block w-2 h-2 rounded-full bg-red-500"></span>
          Related Item
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {related.map((item) => (
            <ProductCard
              key={item.id}
              productId={item.id}
              image={item.images[0]}
              title={item.name}
              price={item.price}
              originalPrice={item.oldPrice}
              discountPercentage={item.oldPrice ? Math.round(100 - (item.price / item.oldPrice) * 100) : undefined}
              rating={item.rating}
              reviewCount={item.reviews}
              onAddToCart={() => {}}
            />
          ))}
        </div>
      </div>
    </div>
  );
} 