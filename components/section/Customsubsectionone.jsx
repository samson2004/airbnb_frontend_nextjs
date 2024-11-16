import React from 'react';
import Image from 'next/image';

const Customsubsectionone = ({title,subtitle,list}) => {
  return (
    <section className='my-[150px] w-[1300px] mx-auto h-[600px]'>
      <div className='mb-10'>
        <h2 className='text-4xl font-medium'>{title}</h2>
        {subtitle && (
          <p className='text-xl text-gray-600'>{subtitle}</p>
        ) }
      </div>
      <div className='flex items-center gap-10'>
        {list.map((elements, index) => (
          <div key={index}>
            <div className='w-[400px] h-[400px] overflow-hidden relative'>
              <Image 
                src={elements.image} 
                alt={elements.title} 
                layout='fill' 
                objectFit='cover'
                className='rounded-2xl'
              />
            </div>
            <div className='mt-4'>
              <div className='flex'>
                <p className='font-semibold mr-2 text-base cursor-pointer hover:underline'>{elements.title}</p>
                <Image src='/right-arrow.svg' alt='right-arrow' width={12} height={12} />
              </div>
              <p className='text-gray-600'>{elements.content}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Customsubsectionone;
