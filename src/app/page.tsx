
import Link from 'next/link'
import React from 'react'

const home = () => {
  return (
    <div className='container min-w-full max-h-full p-5'>
      <div className='flex flex-wrap items-center justify-between '>
        <img src='logo1.png' alt="logo" className='h-12'></img>
       <div className='pt-15 mt-14 ml-96  gap-6 w-[1800px] h-[112px]'> 
        <Link href="#"><button className='hover:bg-pink-800 bg-pink-600 h-[55px] w-[152px] border shadow-xl rounded-lg  flex items-center justify-center'>Order Now</button></Link>
        </div>
      </div>
      <div className='pt-6 bg-slate-200 grid grid-cols-1 md:grid-cols-2  gap-6'>
          <div className=' p-5 space-y-5'>
          <h1 className='text-4xl font-extrabold text-gray-700 text-center md:text-left'>It's the food and groceries you love, delivered</h1>
          <input  type='text' placeholder='Enter a order' className=' w-full p-2 border rounded-md' ></input>
          <Link href="/items"><button className='hover:bg-pink-700 bg-pink-600 flex p-2 border-r-4 border rounded-lg'>Find Food</button></Link>
          </div>
        </div>
          <div className='flex justify-center items-center'>
          <img src="pic1.png" width="100%" height="100%" className='w-full max-w-md rounded-lg shadow-lg' ></img>
          </div>
        </div>
  )
}

export default home

