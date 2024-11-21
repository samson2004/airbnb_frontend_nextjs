'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { Button } from '../ui/button';
import Header from '@/components/shared/Header';
const Customsubsectiontwo = ({title,subtitle,list,button}) => {

    // const [currentdiv,setcurrentdiv]=useState(0);
    const handlenext=()=>{
        setcurrentdiv((prev)=>(prev+1))
    }
    const handleprev=()=>{
        setcurrentdiv((prev)=>(prev-1))
    }
  return (
    <section className='my-[50px] w-full mx-4  '>
        
        <div className="xl:w-[1350px] xl:mx-auto">
        <div className='flex justify-between mr-5 sm:mr-10'>
            <Header title={title} subtitle={subtitle}/>
            <div className='flex md:hidden gap-2 mt-10 '>
                <div className=' border px-3 py-3 h-10 rounded-full'>
                    <Image src='/right-arrow.svg' width={12} height={12} alt='left-arrow' className='transform scale-x-[-1] w-3 h-3'/>
                </div>
                <div className=' border px-3 py-3 h-10 rounded-full'>
                    <Image src='/right-arrow.svg' width={12} height={12} alt='right-arrow' className='w-3 h-3'/>
                </div>
            </div>
        </div>
        <div className='flex items-center gap-5 w-max whitespace-nowrap '>
            
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
        </div>
    </section>
  );
};

export default Customsubsectiontwo;
