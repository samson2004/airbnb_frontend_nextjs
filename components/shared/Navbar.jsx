import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
const Navbar= () => {
  return (
    <div className='container flex items-center justify-center bg-white h-[150px] max-w-full'>
      <div className='flex container justify-between'>
        <div className='w-[100px] h-[70px]'>
          <Link  href='#' >
            <Image  
            src="/airbnb-logo.svg"
            width={200}
            height={100}
            alt='airbnblogo'
            className='fill-pink-500'/>
          </Link>
        </div>
        <div className='flex gap-5 underline underline-offset-4 decoration-pink-500'>
          <a href="#"><p className='text-black'>Airbnb Your place</p></a>
          <a href="#"><p className='text-black'>sign up</p></a>
        </div>
      </div>
      <div className='w-full h-[1px] absolute mt-10 bg-gray-200'></div>
    </div>
  );
}

export default Navbar;