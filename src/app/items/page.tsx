
import React from 'react'
import Image from 'next/image'

const Items = () => {

    const food = [
        {id: 1,
            name: "PIZZA",
            price: 7.99,
            description: "Cheesy pizza with a crispy crust",
            img: "/pizza.png",
        },
        {id: 2,
            name: "BURGER",
            price: 5.99,
            description: "Juicy grilled burger with fresh ingredients",
            img: "/pic-1.png",
        },
        {id: 3,
            name: "ROLL",
            price: 4.75,
            description: "Juicy , cheesy & crispy roll",
            img: "/roll.png",
        },
        {id: 4,
            name: "WINGS",
            price: 9.99,
            description: "Cheesy with a crispy crust",
            img: "/wing.png",
        },
        {id: 5,
            name: "SANDWICH",
            price: 6.99,
            description: "Juicy grilled sandwich with fresh ingredients",
            img: "/sandwich1.png",
        },
        {id: 6,
            name: "FRIES",
            price: 3.75,
            description: "Crispy crust with souces",
            img: "/fries.png",
        },
    ]
  return (
   <div>
    <div className=' grid grid-cols-1 md:grid-cols-3 gap-20px mt-[40px] m-[50px] gap-[20px]'>
        {food.map((foods)=>(
            <div className=' bg-white p-5 text-center rounded-md shadow-lg  shadow-indigo-500/40' key={foods.id}>
                <Image width={100} height={50} src={foods.img} alt={foods.name} className='w-full duration-300 transition-transform rounded-md hover:scale-110'/>
                <h3 className='font-bold  mt-4 text-2xl'>{foods.name}</h3>
                <p className='font-medium text-gray-700 mt-2'>{foods.description}</p>
                <span className='text-rose-600 mt-4 font-semibold text-2xl'>${foods.price}</span>
            </div>
        ))}
    </div>
   </div>
  )
}

export default Items

 