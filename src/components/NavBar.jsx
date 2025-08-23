import React, { useState } from 'react';


const navItems = ["Home", "About", "Skills", "Projects", "Contact"]



const Navbar = () => {


  return (
    <div className='font-circular-web fixed text-white rounded-lg inset-x-0 top-4 z-50 h-16
    border-none transition-all duration-700 sm:inset-x-6'>
      <header className='absolute top-0 w-full -translate-1/2'>
      <nav className='flex size-full items-center justify-between p-4'>

        <div className='flex items-center gap-7'>
            <p>KANKWALA</p>
        </div>

        <div className='flex h-full items-center md-hidden'>
          <div className='hidden md:flex gap-4'>
            {navItems.map((item)=>(
              <a key={item} href={`#${item.toLowerCase()}`}>
                {item}
              </a>
            ))}
          </div>
        </div>
      </nav>
      </header>
    </div>
  );
};

export default Navbar