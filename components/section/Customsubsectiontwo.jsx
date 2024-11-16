import React from 'react';
import Image from 'next/image';
import { Button } from '../ui/button';
import Header from '@/components/shared/Header';
const Customsubsectiontwo = ({title,subtitle,list,button}) => {
  return (
    <section className='my-[150px] w-[1300px] mx-auto'>
        
        <Header title={title} subtitle={subtitle}/>
        <div className='flex items-center gap-10'>
            
            {list.map((elements, index) => (
            <div key={index} className=''>
                <div className='w-[300px] h-[300px] overflow-hidden relative z-0'>
                    {elements.guestFav && (
                        <div  className='h-[30px] w-[120px] absolute bg-white top-[12px] left-[20px] z-10 rounded-3xl'>
                            <p className='text-black my-2 font-medium text-xs mx-4'>Guest favourite</p>
                        </div>
                    )}
                <Image 
                    src={elements.image} 
                    alt={elements.title} 
                    layout='fill' 
                    objectFit='cover'
                    className='rounded-2xl'
                />
                </div>
                <div className='mt-4 '>
                <div className='flex items-center justify-between'>
                    <p className='font-semibold mr-2 text-base cursor-pointer hover:underline'>{elements.title}</p>
                    <p className='text-black font-thin'>{elements.rating}</p>
                </div>
                <p className='text-gray-600'>{elements.subtitle}</p>
                <p className='text-gray-600'>{elements.beds}</p>
                <p className='text-gray-600'>{elements.date}</p>
                <p className='text-xl'>{elements.price}</p>
                </div>
            </div>
            ))}
        </div>
        <div className='flex my-7'>
            <Button className='bg-white text-black border-2 border-black font-sans text-lg hover:bg-gray-100 h-12 '>{button}</Button>
        </div>
    </section>
  );
};

export default Customsubsectiontwo;
