import React from 'react'

function Footer() {
  return (
    <div className='w-full h-96 flex flex-col bg-lightpurple-0 items-center mt-28'>
      <div className='w-full p-10 font-Roboto flex justify-start'>
        <div className='flex flex-col leading-loose'>
          <h1 className='text-3xl font-Mont font-semibold '>easyGO.</h1>
          <p className='mt-5 text-xl'>From Skateboards to SUVs, We&apos;ve Got Your Ride!</p>
        </div>
      </div>
      <div className='w-full h-96 flex flex-col font-medium items-center justify-end overflow-hidden'>
        <h1 className=''>2024 All Rights Reserved. Designed & Developed by easyGo.</h1>
      </div>
    </div>
  )
}

export default Footer