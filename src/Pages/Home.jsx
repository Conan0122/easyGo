
import React, { useState } from 'react'
import Cards from '../Components/Cards';
import { NavLink } from 'react-router-dom';
import ScrollToTop from '../Components/ScrollToTop';

const Home = () => {
  // const {cost, setCost} = useState()

  return (
    <div>
      {/* Landing Page */}
      <div className="flex h-[50%] p-5">
        <div className="w-1/2 h-full">
          <div className='h-[70vh] border-2 border-transparent overflow-hidden rounded-l-3xl'>
            <img
              src='.\Images\MahindraThar.jpeg'
              alt="Rental Vehicle"
              className="w-full h-full object-cover rounded-l-3xl hover:scale-110 transition-all duration-700 ease-in-out cursor-pointer"
            />
          </div>
        </div>

        <div className="w-1/2 font-Roboto flex flex-col justify-center bg-smoothwhite-0 p-8 rounded-r-3xl border-r-4 border-black">
          <h1 className="p-2 text-2xl text-start">Plan your trip now</h1>
          <h1 className="font-extrabold text-7xl text-gray-800 tracking-tighter text-center leading-normal">
          Find Your <span className='text-purple-700 uppercase drop-shadow-lg'>Perfect</span> ride.
          </h1>
          <h1 className='text-xl font-light text-center tracking-widest'>Find the Ride You Need for Every Trip, Every Adventure.</h1>

          <NavLink to='/categories' className='w-1/3 self-center'>
            <button className='w-full bg-black border-2 border-black font-medium text-white mt-10 p-5 rounded-md hover:bg-white hover:text-black transition-all duration-300 ease-in-out self-center'>Explore<i className="fas fa-arrow-right ml-2"></i>
            </button>
          </NavLink>
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
          <Cards price={700} img ={'./Images/Kia Seltos.jpeg'} name={"Kia Seltos"}/>
          <Cards price={350} img ={'./Images/KTM Duke 200.jpeg'} name={"KTM Duke 200"}/>
          <Cards price={700} img ={'./Images/MG Hector.jpeg'} name={"MG Hector"}/>
          <Cards price={300} img ={'./Images/TVS Apache RTR 160 4V.png'} name={"TVS Apache RTR 160 4V"}/>
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
          <Cards price={250} img ={'./Images/Datsun redi-GO.jpeg'} name={"Datsun redi-GO"}/>
          <Cards price={200} img ={'./Images/Hero Splendor.png'} name={"Hero Splendor"}/>
          <Cards price={300} img ={'./Images/Maruti Suzuki Alto.jpeg'} name={"Maruti Suzuki Alto"}/>
          <Cards price={150} img ={'./Images/TVS Jupiter.jpeg'} name={"TVS Jupiter"}/>
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
          <Cards price={2500} img ={'./Images/SuzukiHayabusa.png'} name={"Suzuki Hayabusa"}/>
          <Cards price={2000} img ={'./Images/YamahaYZF-R1.png'} name={"Yamaha YZF-R1"}/>
          <Cards price={2500} img ={'./Images/Aprilia RSV4.jpeg'} name={"Aprilia RSV4"}/>
          <Cards price={1500} img ={'./Images/KawasakiNinja650.png'} name={"Kawasaki Ninja 650"}/>
        </div>

      </div>

      {/* Luxury */}
      <div id='Luxury bikes' className='w-full h-auto font-Roboto mt-10'>
        <div className='w-full flex justify-start px-16 py-8'>
          <hr className='font-extrabold text-black' />
          <h1 className='capitalize text-5xl font-light tracking-wider border-b-2 border-black pb-5'>Luxury Four wheelers</h1>
        </div>

        {/* cards */}
        <div className='flex justify-center gap-10'>
          <Cards price={3500} img ={'./Images/Mercedes-BenzGLC.jpeg'} name={"Mercedes-Benz GLC"}/>
          <Cards price={4500} img ={'./Images/JaguarF-PACE.jpeg'} name={"Jaguar F-PACE"}/>
          <Cards price={6000} img ={'./Images/Mercedes-BenzS-Class.jpeg'} name={"Mercedes-Benz S-Class"}/>
          <Cards price={3500} img ={'./Images/AudiA6.jpeg'} name={"Audi A6"}/>
        </div>

      </div>

      {/* Skatebord */}
      <div id='Luxury bikes' className='w-full h-auto font-Roboto mt-10'>
        <div className='w-full flex justify-start px-16 py-8'>
          <hr className='font-extrabold text-black' />
          <h1 className='capitalize text-5xl font-light tracking-wider border-b-2 border-black pb-5'>Skate Board</h1>
        </div>

        {/* cards */}
        <div className='flex justify-center gap-10'>
          <Cards price={100} img ={'./Images/Cruiser boards.jpg'} name={"Cruiser boards"}/>
          <Cards price={150} img ={'./Images/Longboards.jpg'} name={"Longboards"}/>
          <Cards price={80} img ={'./Images/Penny boards.jpg'} name={"Penny boards"}/>
          <Cards price={100} img ={'./Images/Standard street skateboards.jpg'} name={"Standard street skateboards"}/>
        </div>

      </div>


      {/* Booking section */}

      <ScrollToTop/>
    </div>
  );
};

export default Home;