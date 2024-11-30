import Image from 'next/image';
import React from 'react'
import { CiFacebook } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";


const Footer = () => {
  return (
    <div className='flex  flex-col md:flex-row justify-between items-center bg-slate-500 p-4 md:p-6 space-y-4 md:space-y-0'>
      <div  className="flex justify-center md:justify-start">
        <Image src='/logo2.png' width={20} height={12} alt='logo'/>
        </div>
      <div className='text-center text-sm md:text-base lg:text-lg font-extrabold text-rose-800 m-4 '>©2024 FastBite. All rights reserved</div>
      <div className='flex  justify-center space-x-4'><CiFacebook size={30}/> <FaInstagram size={30}/></div>
    </div>
  )
}

export default Footer
