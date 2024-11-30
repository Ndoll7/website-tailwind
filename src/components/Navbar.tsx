import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div>
      <nav className='bg-pink-600 flex flex-wrap items-center justify-between p-5 text-white font-ariel '>
        <div>
            <img src='logo2.png' className='  h-12 ml-5'></img>
            </div>
        <div className='text-2xl text-center'>Do you like a bussiness account</div>
        <div className='space-x-4 flex flex-wrap justify-center'>
           <Link href="/items"> <button className=' p-2 bg-transparent border-r-2 border-solid hover:bg-pink-200 border cursor-pointer shadow-lg  rounded-lg '>Items-Avialiable</button></Link>
            <Link href="/contactus"><button className=' p-2 bg-transparent border-r-2 border-solid hover:bg-pink-200 border cursor-pointer shadow-lg  rounded-lg '>Contact-us</button></Link> 
            <Link href="/home"> <button className=' p-2 bg-transparent border-r-2 border-solid hover:bg-pink-200 border cursor-pointer shadow-lg  rounded-lg '>Home</button></Link>
            </div>
      
      </nav>
    
    </div>
  )
}

export default Navbar
