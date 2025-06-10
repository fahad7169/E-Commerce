import { useEffect, useRef, useState } from 'react';
import { Card } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';
import HeroBannerSlider from './HeroBannerSlider';
// import './HeroBanner.css';

const banners = [
  'https://images.unsplash.com/photo-1542291026-7eec264c27ff',
  'https://images.unsplash.com/photo-1523275335684-37898b6baf30',
  'https://images.unsplash.com/photo-1503602642458-232111445657'
];

const categories = ['Men', 'Women', 'Kids', 'Electronics', 'Home'];

const metaData = [
    {}
]

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const bannerRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex w-full">
      <div className="w-1/4 p-4 hidden sm:block">
      <Card className="p-4 space-y-2 shadow-none border-none outline-none bg-transparent">

          {categories.map((cat, i) => (
            <Link key={i} className="text-sm font-medium cursor-pointer hover:underline">
              {cat}
            </Link>
          ))}
        </Card>
      </div>

     <HeroBannerSlider/>
    </div>
  );
}
