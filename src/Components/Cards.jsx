
import React from 'react'

function Cards({price, img, name}) {

  return (
    <div className="bg-white font-Roboto rounded-lg overflow-hidden shadow-2xl xl:w-1/5 lg:w-1/4 md:w-1/3 sm:w-1/2 hover:scale-105 transition-transform duration-300 ease-in-out">
        <div className='border-2 border-transparent rounded-t-lg overflow-hidden'>
            <img className="h-48 w-full object-cover hover:scale-125 hover:brightness-90 transition-all duration-700 ease-in-out cursor-pointe" src={img} alt="car" />
        </div>
        <div className="p-6 flex flex-col justify-center ">
            <div className="flex items-baseline"></div>
            <h4 className="mt-2 font-semibold text-lg leading-tight truncate">{name}</h4>

            <div className="mt-1">
                <span>Rs. {price}/hr</span>
                <span className="text-gray-600 text-sm"></span>
            </div>
            <div className='flex justify-evenly py-5'>
                <button className='bg-lightpurple-0 px-5 py-2 rounded-md font-semibold self-center'>Rent</button>
                <button className='bg-lightpurple-0 px-5 py-2 rounded-md font-semibold self-center'>Details</button>
            </div>
        </div>
    </div>
  )
}

export default Cards