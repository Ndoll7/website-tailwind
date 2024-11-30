

import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

const home = () => {
  return (
    <div className='container min-w-full max-h-full  mx-auto  px-4'>
      <div className='flex justify-between flex-wrap  items-center py-4'>
        <img src='logo1.png'></img>
       <div className=' mt-4 md:mt-0'> 
        <Link href="#"><button className='hover:bg-pink-800 bg-pink-600 h-[55px] w-[152px] border shadow-xl rounded-lg  flex items-center justify-center'>Order Now</button></Link>
        </div>
      </div>
      <div className='pt-6 bg-slate-200 grid grid-cols-1 md:grid-cols-2 gap-8'>
        <div>
          <div className=' m-8 space-y-5'>
          <h1 className='text-4xl font-extrabold text-gray-700'>It&apos;s the food and groceries you love, delivered</h1>
          <input  type='text' placeholder='Enter a order' className=' w-full p-2' ></input>
          <Link href="/items"><button className='hover:bg-pink-700 bg-pink-600 gap-4 flex p-2 m-6 border-r-4 border rounded-lg'>Find Food</button></Link>
          </div>
        </div>
        <div className='space-y-5'>
          <div className='flex flex-col gap-5 pl-40 pb-5'>
           <Image src="/pic1.png" alt="Foodpanda" width={500} height={300} />

          </div>
        </div>
        </div>
      </div>
    
  )
}

export default home


