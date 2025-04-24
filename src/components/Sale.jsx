import React from 'react'
import { Link } from 'react-router-dom'
const Sale = () => {
  return (
    <div className='bg-gray-800 text-white h-10 flex justify-center items-center'>
      <div className='container mx-auto'>
        <p className='text-[13px] flex justify-center items-center gap-4'>
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%! 
          <Link to='/shop' className='underline text-blue-400 hover:text-blue-600'>Shop Now</Link>
        </p>
      </div>
    </div>
  )
}

export default Sale