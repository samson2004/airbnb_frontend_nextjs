'use client';
import React from 'react'
import Header from '@/components/shared/Header';
import Image from 'next/image';
const Amenities = ({list}) => {
  return (
    <div className='bg-gray-100'>
        <section className=' w-[1300px] mx-auto  my-[150px] h-[600px]  ' >
            <div className='py-[50px]'>
                <Header title={"Get specific with your favourite amenities"} subtitle={"Choose from top features like these  and more for a personalised stay."} />
            </div>
            <div className=''>
            <div className=' flex items-center justify-center   gap-10 mb-6'>
                    {list.slice(0,4).map((Element,index)=>(
                        <div key={index} className='bg-white border flex items-center justify-center w-[300px] h-[100px] rounded-2xl cursor-pointer shadow-sm  '>
                            <Image src={Element.src} width={40} height={40}  alt={Element.name} />
                            <p className='px-2 text-lg font-semibold'>{Element.name}</p>
                            <Image src='/right-arrow.svg' width={12} height={12} alt='right-arrow'/>
                        </div>
                    ))}
                </div> <div className=' flex items-center justify-center   gap-10'>
                    {list.slice(4,8).map((Element,index)=>(
                        <div key={index} className='bg-white border flex items-center justify-center w-[300px] h-[100px] rounded-2xl cursor-pointer shadow-sm  '>
                            <Image src={Element.src} width={40} height={40}  alt={Element.name} />
                            <p className='px-2 text-lg font-semibold'>{Element.name}</p>
                            <Image src='/right-arrow.svg' width={12} height={12} alt='right-arrow'/>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    </div>
  )
}

export default Amenities;