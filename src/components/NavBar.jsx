import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useAuthStore } from '@/stores/useAuthStore';
import { Button } from "@/components/ui/button";
import { navLinks } from '@/constants';
import AccountDropdown from './AccountDropdown';

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const { isAuth, authUser, logout } = useAuthStore();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  return (
    <header className={`relative -mt-10 w-full left-1/2 py-4 px-5 md:px-20 -translate-x-1/2 z-[100] transition-all duration-300 ease-in-out ${
      scrolled ? 'top-0 shadow-md' : 'md:top-10 top-0'
    } bg-white`}>

      <div className='mx-auto flex items-center justify-between'>
        {/* Left Section - Always visible */}
        <div className='flex items-center'>
          <div className="relative group">
            <svg
              className="w-10 h-10 md:w-12 md:h-12 transition-transform duration-300 group-hover:scale-110"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#EF4444' }} />
                  <stop offset="100%" style={{ stopColor: '#F87171' }} />
                </linearGradient>
              </defs>
              <path
                d="M21 7L19.5 3H4.5L3 7M21 7H3M21 7L19 15H5L3 7M8 19C8 19.5523 7.55228 20 7 20C6.44772 20 6 19.5523 6 19C6 18.4477 6.44772 18 7 18C7.55228 18 8 18.4477 8 19ZM18 19C18 19.5523 17.5523 20 17 20C16.4477 20 16 19.5523 16 19C16 18.4477 16.4477 18 17 18C17.5523 18 18 18.4477 18 19Z"
                stroke="url(#logoGradient)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle
                cx="12"
                cy="11"
                r="2"
                fill="url(#logoGradient)"
                className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
            </svg>
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
          </div>
        </div>

        <nav className='lg:flex items-center hidden'>
       <ul className='flex space-x-8'>

        {navLinks.map(({link,name})=>(
            <li key={name} className='group relative'>
                 <Link to={link}>
                    <span className="transition-colors duration-300 hover:text-black">{name}</span>
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"/>
                 </Link>
            </li>
        ))}
       </ul>
      </nav>

        {/* Right Section - Authentication dependent */}
        <div className='flex items-center space-x-4'>

        <div className='items-center space-x-1 border rounded-md focus-within:ring-2 focus-within:ring-blue-500 xs:flex hidden'>
                        <input 
                            type='text' 
                            placeholder='What are you looking for?' 
                            className="p-3 rounded-md focus:outline-none placeholder:text-sm hidden sm:block bg-white"
                        />
                        <span className="material-symbols-outlined cursor-pointer text-black">search</span>
                    </div>
          {!isAuth ? (
            <>
              <Link to="/wishlist" className="relative hover:opacity-80 transition-opacity hidden xs:block">
                <span className="material-symbols-outlined text-black">
                favorite_border
                </span>
                <span className="absolute -top-1 -right-1 text-xs w-4 h-4 flex items-center justify-center bg-red-600 text-white rounded-full">
                  2
                </span>
              </Link>
              {/* Logged In State */}
              
              <Link to="/cart" className="relative hover:opacity-80 transition-opacity hidden xs:block">
                <span className="material-symbols-outlined text-black">
                  shopping_cart
                </span>
                <span className="absolute -top-1 -right-1 text-xs w-4 h-4 flex items-center justify-center bg-red-600 text-white rounded-full">
                  3
                </span>
              </Link>

              <AccountDropdown authUser={authUser} logout={logout}/>
            </>
          ) : (
            <>
              {/* Logged Out State */}
              <Button 
                asChild 
                variant="ghost" 
                className="text-black hidden xs:block"
              >
                <Link to="/login">Login</Link>
              </Button>
              <Button 
                asChild 
                className="bg-blue-600 hover:bg-blue-700"
              >
                <Link to="/register">Sign Up</Link>
              </Button>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default NavBar;