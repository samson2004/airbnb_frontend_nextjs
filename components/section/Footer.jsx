'use client';
import React from 'react'
import {footerlistleft,footerlistright} from '@/constants'
import Image from 'next/image'
const Footer = () => {
  return (
    <footer className=' border h-14  '>
        <div className='flex py-4 ml-10  px-[150px] justify-between '>
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
        </div>
    </footer>
  )
}

export default Footer