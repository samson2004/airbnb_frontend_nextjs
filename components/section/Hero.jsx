'use client';
import Image from 'next/image';
import React from 'react';
import Bookingcomponent from '@/components/shared/Bookingcomponent';
import { herolist } from '@/constants/index';

const Hero = () => {
  return (
    <section>
      <div className='sm:flex  sm:relative'>
          <div className='mx-5 sm:flex  sm:justify-end sm:mx-auto lg:flex-none  '>
            <Image
                      src={'/kitchen-pic.jpg'}
                      width={1400}
                      height={600}
                      alt="kitchen/hero"
                      className='w-full sm:h-[465px] rounded-3xl sm:w-4/5 lg:w-full lg:ml-80 2xl:w-[1000px] 2xl:h-[600px] '
                    />
          </div>
          <div className='sm:absolute sm:left-10 md:left-28 lg:left-48 xl:left-72'>
            <Bookingcomponent position={'mx-2 my-4'} />
          </div>
      </div>
      <div className="grid gap-5 mt-10 mx-4 sm:grid-cols-3 md:ml-[50px] xl:w-[1300px] xl:mx-auto">
          {herolist.map((element, index) => (
            <div key={index} className="">
              <Image  src={element.logo} alt="logo" className=" h-6"
              height={32} width={32}/>
              <div className='my-4'>
                <h3 className=" text-xl mb-2 font-semibold ">{element.title}</h3>
                <p className="text-lg text-gray-600 text-left md:text-sm">{element.content}</p>
              </div>
            </div>
          ))}
        </div>
    </section>
  );
};

export default Hero;
