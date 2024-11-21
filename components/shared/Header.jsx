import React from 'react'

const Header = ({title,subtitle}) => {
  return (
    <div className='mb-10 w-[400px] md:w-full'>
            <h2 className='text-4xl font-medium'>{title}</h2>
            {subtitle && (
            <p className='text-normal text-gray-600'>{subtitle}</p>
            ) }
        </div>
  )
}

export default Header