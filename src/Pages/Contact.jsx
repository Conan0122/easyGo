import React from 'react'

function Contact() {
  return (
    <div className='w-full h-screen flex justify-center items-center'>
      <h1>Contact us</h1>
    </div>
  )
}

export default Contact



////////// Experiment code//////////
// import React, { useState, useEffect } from 'react';

// const images = [
//   '/Images/img (10).jpeg',
//   '/Images/img (11).jpeg',
//   '/Images/img (14).jpeg',
// ];

// const ImageCarousel = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   // Automatically change the image every 3 seconds
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
//     }, 3000);

//     return () => clearInterval(interval);
//   }, []);

//   const nextImage = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
//   };

//   const prevImage = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === 0 ? images.length - 1 : prevIndex - 1
//     );
//   };

//   return (
//     <div className="relative w-full h-[70vh] rounded-3xl max-w-xl mx-auto overflow-hidden">
//       <div
//         className="flex transition-transform duration-700 ease-in-out"
//         style={{ transform: `translateX(-${currentIndex * 100}%)` }}
//       >
//         {images.map((image, index) => (
//           <img
//             key={index}
//             src={image}
//             alt={`Slide ${index + 1}`}
//             className="w-full object-cover"
//           />
//         ))}
//       </div>
//       {/* <div className="absolute top-1/2 left-0 right-0 flex justify-between transform -translate-y-1/2">
//         <button
//           onClick={prevImage}
//           className="bg-black text-white rounded-full p-2 m-2 hover:bg-gray-700 transition"
//         >
//           &lt;
//         </button>
//         <button
//           onClick={nextImage}
//           className="bg-black text-white rounded-full p-2 m-2 hover:bg-gray-700 transition"
//         >
//           &gt;
//         </button>
//       </div> */}
//     </div>
//   );
// };

// export default ImageCarousel;
