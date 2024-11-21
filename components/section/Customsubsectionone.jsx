import React from 'react';
import Image from 'next/image';

const Customsubsectionone = ({title,subtitle,list}) => {
  return (
    <section className='my-24'>
      <div className='xl:grid  xl:grid-cols-1 xl:w-[1350px] xl:mx-auto'>
        <div className='my-4 mx-4 sm:mx-5 xl:place-content-around xl:w-full '>
          <h2 className='text-3xl font-normal'>{title}</h2>
          {subtitle && (
              <p className='text-xl text-gray-600 mb-4'>{subtitle}</p>
            ) }
        </div>
        <div className='xl:place-content-center sm:flex sm:items-center gap-10 lg:gap-7 mx-5 xl:grid xl:grid-cols-3 '>
        {list.map((elements, index) => (
          <div key={index} className='xl:w-[400px]'>
            <div className=' h-[400px] sm:h-[200px] lg:h-[300px] xl:h-[400px]  relative'>
              <Image 
                src={elements.image} 
                alt={elements.title} 
                layout='fill' 
                objectFit='cover'
                className='rounded-2xl'
              />
            </div>
            <div className='mt-4 mb-6'>
              <div className='flex'>
                <p className='font-semibold mr-2 text-base cursor-pointer hover:underline'>{elements.title}</p>
                <Image src='/right-arrow.svg' alt='right-arrow' width={12} height={12} />
              </div>
              <p className='text-gray-600'>{elements.content}</p>
            </div>
          </div>
        ))}
        </div>
      </div>
    </section>
  );
};

export default Customsubsectionone;


{/*<section className='py-[100px]  '>
      <div className='my-4 mx-4 sm:mx-5 xl:mx-[100px] '>
        <h2 className='text-3xl font-normal'>{title}</h2>
        {subtitle && (
            <p className='text-xl text-gray-600 mb-4'>{subtitle}</p>
          ) }
      </div>
      <div className='sm:flex sm:items-center gap-10 lg:gap-7 mx-5 sm:mx-5 '>
        {list.map((elements, index) => (
          <div key={index} className='xl:w-[400px]'>
            <div className=' h-[400px] sm:h-[200px] lg:h-[300px] xl:h-[400px]  relative'>
              <Image 
                src={elements.image} 
                alt={elements.title} 
                layout='fill' 
                objectFit='cover'
                className='rounded-2xl'
              />
            </div>
            <div className='mt-4 mb-6'>
              <div className='flex'>
                <p className='font-semibold mr-2 text-base cursor-pointer hover:underline'>{elements.title}</p>
                <Image src='/right-arrow.svg' alt='right-arrow' width={12} height={12} />
              </div>
              <p className='text-gray-600'>{elements.content}</p>
            </div>
          </div>
        ))}
      </div>
    </section> */}