import { data } from "autoprefixer";
import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent successfully!");
    setFormData({
      name: "", email:"", message: "",
    });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-5">
      <div className="w-full max-w-lg p-8 bg-white shadow-lg rounded-lg">
        <h2 className="text-3xl font-bold text-center text-purple-800">
          Contact Us
        </h2>
        <p className="text-gray-600 text-center mb-8">
          Got a question? We'd love to hear from you. Send us a message and
          we'll respond as soon as possible.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              className="block text-gray-700 font-semibold mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your name"
              required
            />
          </div>

          <div>
            <label
              className="block text-gray-700 font-semibold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
              required
            />
          </div>

          <div>
            <label
              className="block text-gray-700 font-semibold mb-2"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-mypurple-0"
              placeholder="Enter your message"
              rows="4"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-mypurple-0 text-black hover:bg-mypurpledark-0 font-bold rounded-lg transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;

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
