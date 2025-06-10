import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";

// You can have multiple banner images
const banners = [
  {
    id: 1,
    title: "Get Your Style",
    br:" This Season",
    img: "/src/assets/images/hero_banner.jpg",
  },
  {
    id: 2,
    title: "New Arrivals ",
    br:"Just Dropped",
    img: "/src/assets/images/hero_banner.jpg",
  },
  {
    id: 3,
    title: "Upgrade Your",
    br:"Wardrobe Today",
    img: "/src/assets/images/hero_banner.jpg",
  },
];

export default function HeroBannerSlider() {
    const [current, setCurrent] = useState(0);
    const timeoutRef = useRef(null);
    const delay = 5000;
  
    useEffect(() => {
      timeoutRef.current = setTimeout(
        () => setCurrent((prev) => (prev + 1) % banners.length),
        delay
      );
      return () => clearTimeout(timeoutRef.current);
    }, [current]);
  
    return (
      <div className="relative w-full h-[24rem] overflow-hidden rounded-xl bg-black">
        <div
         className="flex flex-nowrap transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)`, width: `${banners.length * 100}%` }}
        >
          {banners.map((banner) => (
  <div
    key={banner.id}
    className="shrink-0 flex h-[24rem] rounded-xl overflow-hidden bg-black text-white"
    style={{ width: "100%" }} // ensures each banner takes full width
  >
    {/* Left Content */}
    <div className="flex flex-col justify-center p-10 space-y-4">
      <div className="flex items-center gap-3">
        <ShoppingCart className="w-6 h-6 text-white" />
        <span className="uppercase tracking-widest text-sm text-gray-300">Best Deals</span>
      </div>

      <h1 className="text-4xl font-bold leading-tight">{banner.title} <br /> {banner.br}</h1>

      <Link
        to="/shop"
        className="mt-4 w-fit inline-block bg-white text-black px-5 py-2 rounded-md font-semibold hover:bg-gray-200 transition"
      >
        Shop Now
      </Link>
    </div>

       {/* Right Image */}
       <div className="mt-5 w-1/4 h-full justify-end md:flex hidden">
        <img
          src={banner.img}
          alt="Hero Banner"
          className="object-cover"
        />
      </div>
  </div>
))}

        </div>
  
        {/* Dot Indicators */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
          {banners.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                current === index ? "bg-white" : "bg-gray-500"
              }`}
            ></div>
          ))}
        </div>
      </div>
    );
  }