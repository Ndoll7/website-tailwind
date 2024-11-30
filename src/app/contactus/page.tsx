
import React from 'react'

const page = () => {
  return (
    <div className="container mx-auto p-4">
    <div className='container grid h-auto w-full max-w-lg lg:max-w-2xl mx-auto mt-5 items-center shadow-lg border-solid bg-#fff '>
    <div className='space-y-8'>
      <h1 className='text-center font-bold text-3xl text-gray-800'>Contact Us</h1>
                     <div className='flex flex-col gap-1 m-4 shadow-md'>
                         <label htmlFor='name' className='font-semibold text-gray-600'>Name</label>
                         <input  type='text' id='name' className='bg-transparent border rounded-sm px-2 border-#ccc h-[40px]'></input>
                     </div>
                     <div className='flex flex-col gap-1 m-4 shadow-md ' >
                         <label htmlFor='email' className='font-semibold text-gray-600'>Email Adress</label>
                         <input type='text' className='bg-transparent border  px-2 border-#ccc h-[40px]' id='email'/>
                     </div>
                     <div className='flex flex-col gap-1 m-4 shadow-md'>
                         <label htmlFor='phone number' className='font-semibold text-gray-600'>Phone Number</label>
                         <input type='number' className='bg-transparent border px-2  border-#ccc h-[40px]' id='phone number'/>
                         </div>
                     <div className='flex flex-col gap-1 m-4 shadow-md' >
                         <label htmlFor='msg' className='font-semibold text-gray-600'>Order</label>
                         <textarea className='bg-transparent border border-#ccc px-2 ' rows={8} id='msg'></textarea>
                     </div>
                     <button className='bg-cyan-500 rounded-md p-2 px-6 shadow-sm text-white font-semibold w-[350px] lg:w-[650px] m-4'>Send</button>
         </div>
    </div> 
    </div>
  )
}

export default page
