import React, { useState } from 'react'
import Cards from '../Components/Cards';

const Home = () => {
  // const {cost, setCost} = useState()

  return (
    <div>
      {/* Landing Page */}
      <div className="flex h-[50%] p-5">
        <div className="w-1/2 h-full">
          <div className='border-2 border-transparent overflow-hidden rounded-l-3xl'>
            <img
              src='.\Images\img.jpg'
              alt="Rental Vehicle"
              className="w-full h-full object-cover rounded-l-3xl hover:scale-110 hover:brightness-90 transition-all duration-700 ease-in-out cursor-pointer"
            />
          </div>
        </div>

        <div className="w-1/2 font-Roboto flex flex-col justify-center bg-smoothwhite-0 p-8 rounded-r-3xl border-r-4 border-black">
          <h1 className="p-2 text-2xl text-start">Plan your trip now</h1>
          <h1 className="font-extrabold text-7xl text-gray-800 tracking-tighter text-center leading-normal">
          Find Your <span className='text-purple-700 uppercase drop-shadow-lg'>Perfect</span> ride.
          </h1>
          <h1 className='text-xl font-light text-center tracking-widest'>Find the Ride You Need for Every Trip, Every Adventure.</h1>

          <button className='w-1/3 bg-black border-2 border-black font-medium text-white mt-10 p-5 rounded-md hover:bg-white hover:text-black transition-all duration-300 ease-in-out self-center'>Explore <i className="fas fa-arrow-right ml-2"></i> </button>
        </div>
      </div>

      {/* Trending section */}
      <div id='trending' className='w-full h-auto font-Roboto mt-10'>
        <div className='w-full flex justify-start px-16 py-8'>
          <hr className='font-extrabold text-black' />
          <h1 className='capitalize text-5xl font-light tracking-wider border-b-2 border-black pb-5'>trending</h1>
        </div>

        {/* cards */}
        <div className='flex justify-center gap-10'>
          <Cards price={199} img ={'./Images/img (11).jpeg'}/>
          <Cards img ={'./Images/img (2).jpeg'}/>
          <Cards img ={'./Images/img (7).jpeg'}/>
          <Cards img ={'./Images/img (5).jpeg'}/>
        </div>

      </div>

      {/* Affordable */}
      <div id='affordable' className='w-full h-auto font-Roboto mt-10'>
        <div className='w-full flex justify-start px-16 py-8'>
          <hr className='font-extrabold text-black' />
          <h1 className='capitalize text-5xl font-light tracking-wider border-b-2 border-black pb-5'>Affordable</h1>
        </div>

        {/* cards */}
        <div className='flex justify-center gap-10'>
          <Cards price={199} img ={'./Images/img (3).jpeg'}/>
          <Cards img ={'./Images/img (9).jpeg'}/>
          <Cards img ={'./Images/img (3).jpeg'}/>
          <Cards img ={'./Images/img.jpg'}/>
        </div>

      </div>

      {/* Luxury */}
      <div id='Luxury bikes' className='w-full h-auto font-Roboto mt-10'>
        <div className='w-full flex justify-start px-16 py-8'>
          <hr className='font-extrabold text-black' />
          <h1 className='capitalize text-5xl font-light tracking-wider border-b-2 border-black pb-5'>Luxury Two wheelers</h1>
        </div>

        {/* cards */}
        <div className='flex justify-center gap-10'>
          <Cards price={199} img ={'./Images/img (3).jpeg'}/>
          <Cards img ={'./Images/img (9).jpeg'}/>
          <Cards img ={'./Images/img (3).jpeg'}/>
          <Cards img ={'./Images/img.jpg'}/>
        </div>

      </div>


      {/* Booking section */}


    </div>
  );
};

export default Home;