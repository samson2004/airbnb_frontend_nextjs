import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
const Navbar= () => {
  return (
    <div className='my-10'>
      <header className=''>
      <div className='flex items-center justify-between mx-4 my-10 lg:mx-10'>
        <div className=''>
          <Image  
                src="/airbnb-logo.svg"
                width={200}
                height={100}
                alt='airbnblogo'
                className='w-full h-6 md:h-6 lg:h-8'/>
        </div>
        <div className=''>
          <ul className='flex gap-10'>
            <li className='text-xs 2xl:text-sm underline underline-offset-4 decoration-pink-500 cursor-pointer'>Airbnb Your place</li>
            <li className='text-xs 2xl:text-sm underline underline-offset-4 decoration-pink-500 cursor-pointer'>sign up</li>
          </ul>
        </div>
      </div>
      <div className='bg-gray-300 h-[1px] w-[100vw]'></div>
      
    </header>
    </div>
  );
}

export default Navbar;