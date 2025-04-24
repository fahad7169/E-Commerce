import React from 'react'
import { navLinks } from '../constants'
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const NavBar = () => {
    const [scrolled,setScrolled] = useState(false);
    const [theme, setTheme] = useState('light');

    useEffect(()=>{
        const handleScroll = ()=>{
            const isScrolled = window.scrollY > 10;
            setScrolled(isScrolled);
        }

        window.addEventListener('scroll',handleScroll);

        return ()=>window.removeEventListener('scroll',handleScroll)
    },[])

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        document.documentElement.setAttribute('data-theme', newTheme);
    };

  return (
   <header className={`relative -mt-10 w-full left-1/2 py-4 px-5 md:px-20 -translate-x-1/2 z-[100] transition-all duration-300 ease-in-out ${scrolled ? 'top-0 bg-white shadow-md' : 'md:top-10 top-0'} ${theme === 'dark' ? 'bg-[#181818]' : 'bg-white'}`}>

      <div className='mx-auto flex items-center justify-between'>
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
    
      <div className='flex items-center space-x-6'>
        <div className='flex items-center space-x-1 border rounded-md focus-within:ring-2 focus-within:ring-blue-500'>
          <input type='text' placeholder='What are you looking for?' className={`px-3 py-2 focus:outline-none placeholder:text-sm hidden sm:block`}/>
          <span className='material-icons cursor-pointer'>search</span>
        </div>
        <button className='relative flex items-center justify-center'>
          <span className='material-icons cursor-pointer'>shopping_cart</span>
          <span className='absolute -top-1 -right-1 inline-flex items-center justify-center w-4 h-4 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full'>3</span>
        </button>
        <DropdownMenu>
          <DropdownMenuTrigger className='flex items-center space-x-2 focus:outline-none'>
            <span className='material-icons cursor-pointer'>account_circle</span>
          </DropdownMenuTrigger>
          <DropdownMenuContent className='z-[1000] shadow-[0_0_8px_4px_rgba(255,255,255,0.3)]'>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem as={Link} to='/profile'>Profile</DropdownMenuItem>
            <DropdownMenuItem as={Link} to='/settings'>Settings</DropdownMenuItem>
            <DropdownMenuItem>Logout</DropdownMenuItem>
            <DropdownMenuItem onClick={toggleTheme}>
              {theme === 'light' ? 'Dark' : 'Light'}
              {theme === 'light' ? (
                <span className='material-icons'>dark_mode</span>
              ) : (
                <span className='material-icons'>light_mode</span>
              )}
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      </div>
     
    </header>

  )
}

export default NavBar