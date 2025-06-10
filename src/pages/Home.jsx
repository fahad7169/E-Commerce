import HeroSection from '@/components/HeroSection'
import FlashSale from '@/components/FlashSale'
import BrowseByCategories from '@/components/BrowseByCategories'
import BestSellingProducts from '@/components/BestSellingProducts'
import MusicExperience from '@/components/MusicExperience'
import NewArrival from '@/components/NewArrival'
import React from 'react'

const Home = () => {
  // Sample flash sale products
  const flashSaleProducts = [
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
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1585386959984-a4155224a1ad",
      title: "Running Shoes Pro",
      price: 129.99,
      rating: 4.7,
      reviewCount: 342
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
      title: "Sport Sneakers",
      price: 89.99,
      originalPrice: 119.99,
      discountPercentage: 25,
      rating: 4.6,
      reviewCount: 178
    }
  ];

  // Sample best selling products
  const bestSellingProducts = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
      title: "Premium Noise Cancelling Headphones",
      price: 299.99,
      rating: 4.9,
      reviewCount: 512
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f",
      title: "Professional DSLR Camera",
      price: 1299.99,
      rating: 4.8,
      reviewCount: 328
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12",
      title: "Smart Home Security System",
      price: 199.99,
      rating: 4.7,
      reviewCount: 245
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1585386959984-a4155224a1ad",
      title: "Ultra HD Smart TV 55\"",
      price: 899.99,
      rating: 4.9,
      reviewCount: 412
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
      title: "Gaming Laptop Pro",
      price: 1499.99,
      rating: 4.8,
      reviewCount: 289
    }
  ];

  // Sample categories
  const categories = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f",
      title: "Electronics",
      itemCount: 234
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1560343090-f0409e92791a",
      title: "Fashion",
      itemCount: 456
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f",
      title: "Home & Living",
      itemCount: 189
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
      title: "Sports",
      itemCount: 123
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
      title: "Beauty",
      itemCount: 345
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12",
      title: "Toys & Games",
      itemCount: 278
    }
  ];

  const handleViewAll = () => {
    // Navigate to all products page
    console.log('Navigate to all products');
  };

  const handleViewAllCategories = () => {
    // Navigate to all categories page
    console.log('Navigate to all categories');
  };

  const handleViewAllBestSelling = () => {
    // Navigate to best selling products page
    console.log('Navigate to best selling products');
  };

  return (
    <div className='py-4 pl-4 pr-2 md:pl-8 md:pr-4 lg:px-12 xl:px-16 transition-all duration-300 ease-in-out max-w-[100vw] overflow-x-hidden'>
      <HeroSection/>
      <FlashSale 
        products={flashSaleProducts}
        onViewAll={handleViewAll}
      />
      <BrowseByCategories
        categories={categories}
        onViewAll={handleViewAllCategories}
      />
      <BestSellingProducts
        products={bestSellingProducts}
        onViewAll={handleViewAllBestSelling}
      />
      <MusicExperience />
      <NewArrival />
    </div>
  )
}

export default Home
