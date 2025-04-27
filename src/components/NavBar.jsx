import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useAuthStore } from '@/stores/useAuthStore';
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { navLinks } from '@/constants';

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState('light');
  const { isAuth, authUser, logout } = useAuthStore();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  return (
    <header className={`relative -mt-10 w-full left-1/2 py-4 px-5 md:px-20 -translate-x-1/2 z-[100] transition-all duration-300 ease-in-out ${
      scrolled ? 'top-0 shadow-md' : 'md:top-10 top-0'
    } ${theme === 'dark' ? 'bg-[#181818]' : 'bg-white'}`}>

      <div className='mx-auto flex items-center justify-between'>
        {/* Left Section - Always visible */}
        <div className='text-xl md:text-2xl font-semibold transition-transform duration-300 hover:scale-105'>
          Exclusive
        </div>

        <nav className='lg:flex items-center hidden'>
       <ul className='flex space-x-8'>

        {navLinks.map(({link,name})=>(
            <li key={name} className='group relative'>
                 <Link to={link}>
                    <span className={`transition-colors duration-300 ${theme === 'light' ? 'hover:text-black' : 'hover:text-white'}`}>{name}</span>
                    <span className={`absolute -bottom-1 left-0 w-0 h-0.5  ${theme === 'light' ? 'bg-black' : 'bg-white'} transition-all duration-300 group-hover:w-full`}/>
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
                            className={`p-3 rounded-md focus:outline-none placeholder:text-sm hidden sm:block ${theme === 'dark' ? 'bg-[#181818] text-white' : 'bg-white'}`}
                        />
                        <span className={`material-icons cursor-pointer hidden ${theme === 'dark' ? 'text-white' : 'text-black'}`}>search</span>
                    </div>
          {isAuth ? (
            <>
              {/* Logged In State */}
              <Link to="/cart" className="relative hover:opacity-80 transition-opacity">
                <span className={`material-icons ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
                  shopping_cart
                </span>
                <span className="absolute -top-1 -right-1 text-xs w-4 h-4 flex items-center justify-center bg-red-600 text-white rounded-full">
                  3
                </span>
              </Link>

              <DropdownMenu>
                <DropdownMenuTrigger className="focus:outline-none">
                  <span className={`material-icons ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
                    account_circle
                  </span>
                </DropdownMenuTrigger>
                <DropdownMenuContent className={`z-[1000] ${theme === 'dark' ? 'bg-[#181818] border-gray-700' : 'bg-white'}`}>
                  <DropdownMenuLabel className={theme === 'dark' ? 'text-white' : ''}>
                    {authUser?.name || 'My Account'}
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator className={theme === 'dark' ? 'bg-gray-700' : ''} />
                  <DropdownMenuItem asChild className={theme === 'dark' ? 'hover:bg-gray-800' : ''}>
                    <Link to="/profile">Profile</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild className={theme === 'dark' ? 'hover:bg-gray-800' : ''}>
                    <Link to="/orders">Orders</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem 
                    onClick={logout}
                    className={theme === 'dark' ? 'hover:bg-gray-800' : ''}
                  >
                    Logout
                  </DropdownMenuItem>
                  <DropdownMenuSeparator className={theme === 'dark' ? 'bg-gray-700' : ''} />
                  <DropdownMenuItem onClick={toggleTheme}>
                    {theme === 'light' ? (
                      <><span className='material-icons mr-2'>dark_mode</span> Dark Theme</>
                    ) : (
                      <><span className='material-icons mr-2'>light_mode</span> Light Theme</>
                    )}
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </>
          ) : (
            <>
              {/* Logged Out State */}
              <Button 
                asChild 
                variant="ghost" 
                className={theme === 'dark' ? 'text-white hover:bg-gray-800' : 'text-black'}
              >
                <Link to="/login">Login</Link>
              </Button>
              <Button 
                asChild 
                className={theme === 'dark' ? 'bg-gray-700 hover:bg-gray-600' : 'bg-blue-600 hover:bg-blue-700'}
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