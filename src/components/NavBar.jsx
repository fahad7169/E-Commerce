import React from 'react'
import { navLinks } from '../constants'
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    const [scrolled,setScrolled] = useState(false);

    useEffect(()=>{
        const handleScroll = ()=>{
            const isScrolled = window.scrollY > 10;
            setScrolled(true)
        }

        window.addEventListener('scroll',handleScroll);

        return ()=>window.removeEventListener('scroll',handleScroll)
    },[])
  return (

    <header className={`fixed w-full left-1/2 py-5 px-5 md:px-20 -translate-x-1/2 z-[100] transition-all duration-300 ease-in-out bg-[#e3f2fd] ${scrolled ? 'top-0 bg-[#f0f0f0]' : 'md:top-10 top-0 bg-transparent'}`}>

      <div className='mx-auto flex items-center justify-between'>
      <div className='text-xl md:text-2xl font-semibold transition-transform duration-300 hover:scale-105'>
        Exclusive
      </div>

      <nav className='lg:flex items-center hidden'>
       <ul className='flex space-x-8'>

        {navLinks.map(({link,name})=>(
            <li key={name} className='group relative'>
                 <Link to={link}>
                    <span className='transition-colors duration-300 hover:text-black'>{name}</span>
                    <span className='absolute -bottom-1 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full'/>
                 </Link>
            </li>
        ))}
       </ul>
      </nav>
     <a href="#contact" className='contact-btn group'>
        <div className='inner'>
         <span>Contact me</span>
        </div>
     </a>
      </div>
    </header>
  )
}

export default NavBar