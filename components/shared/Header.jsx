import React from 'react'

const Header = ({title,subtitle}) => {
  return (
    <div className='mb-10'>
            <h2 className='text-4xl font-medium'>{title}</h2>
            {subtitle && (
            <p className='text-xl text-gray-600'>{subtitle}</p>
            ) }
        </div>
  )
}

export default Header