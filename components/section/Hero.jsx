'use client';
import Image from 'next/image';
import React from 'react';
import Bookingcomponent from '@/components/shared/Bookingcomponent';
import { herolist } from '@/constants/index';

const Hero = () => {
  return (
    <>
      <section className='mx-10 my-2 ' >
        <div className='flex items-center justify-center'> 
          {/* booking component & image */}
          <div className='flex w-[1600px] ml-[100px]'>
            <div className='z-10 relative top-16'>
              <Bookingcomponent className={''} />
            </div>
            <div className="rounded-3xl overflow-hidden h-[625px] w-[1800px] relative right-44 z-0 flex">
              <Image
                src={'/kitchen-pic.jpg'}
                width={1400}
                height={600}
                alt="kitchen/hero"
              />
            </div>
          </div>
        </div>
        
        {/* hero-nav-items logo and content 3 */}
        <div className="my-[50px]  flex items-start justify-center gap-10 w-[1600px] mx-auto ">
          {herolist.map((element, index) => (
            <div key={index} className=" w-[400px] gap-5">
              <Image  src={element.logo} alt="logo" className="w-8 h-8 font-semibold text-2xl"
              height={32} width={32}/>
              <div className='my-4'>
                <h3 className="text-2xl font-semibold ">{element.title}</h3>
                <p className="text-gray-600 text-xl font-medium">{element.content}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Hero;
