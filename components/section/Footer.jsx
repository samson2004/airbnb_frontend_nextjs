'use client';
import React from 'react'
import {footerlist0,footerlist1,footerlist2} from '@/constants'
import Image from 'next/image'
const Footer = () => {
  return (
    <footer className=' border   w-full '>
        <div className='my-4 md:flex-wrap ' >
            <div className='hidden md:block my-1 mx-4 '>
                <div className='flex gap-5 sm:justify-center '>
                    {footerlist2.map((element,index)=>(
                        <div key={index} className='flex text-sm'>
                        <Image src={element.src}
                        height={24}
                        width={24}
                        alt={element.src}/>
                    </div>
                    ))}
                </div>
            </div>
            <div className='my-1 mx-4 flex sm:justify-center '>
                {footerlist0.map((element,index)=>(
                    <div key={index} className='flex text-lg font-normal'>
                    {element.name}
                    <p className='mx-2'>·</p>
                </div>
                ))}
            </div>
            <div className='mb-4 mx-4 flex sm:justify-center  '>
                {footerlist1.map((element,index)=>(
                    <div key={index} className='flex text-lg font-sans '>
                    {element.name}
                    <p className='mx-2'>·</p>
                </div>
                ))}
            </div>
        </div>
    </footer>
  )
}

export default Footer

{/* <div className='flex py-4 ml-10  px-[150px] justify-between '>
            <div className='flex justify-start'>
            {footerlistleft.map((element,index)=>(
                <div key={index} className='flex text-sm'>
                    {element.name}
                    <p className='mx-2'>·</p>
                </div>
            ))}
            </div>
            <div className='flex  gap-4'>
            {footerlistright.map((element,index)=>(
                <div key={index} className='flex text-sm'>
                    <Image src={element.src}
                    height={24}
                    width={24}
                    alt={element.src}/>
                </div>
            ))}
            </div>
        </div> */}