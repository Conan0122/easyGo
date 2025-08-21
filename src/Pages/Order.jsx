import React, { useEffect, useState, useContext } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useLocation, useNavigate } from "react-router-dom"; // To get the passed state from NavLink
import { ToastContainer } from "react-toastify"; // Import toastify
import "react-toastify/dist/ReactToastify.css"; // Import toastify styles
import { AuthContext } from "../Context/AuthContext";

const Order = () => {
  // State for start and end dates
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [totalCost, setTotalCost] = useState(0);
  const [isChecked, setIsChecked] = useState(false);
  const loc = useLocation();
  const nav = useNavigate();
  const userLoginStatus = useContext(AuthContext);

  const vehicleDetails = {
    img: loc.state.img || "Loading...",
    model: loc.state.name || "Loading...",
    rentCost: loc.state.price || "Loading...",
  };

  // Update total cost depending on start or end date selection
  // And for this we need useEffect
  useEffect(() => {
    if (startDate && endDate) {
      const hrs = 86400000; // ms in a day (24hrs * 60mins * 60secs * 1000ms)
      const days = Math.round((endDate - startDate) / hrs) + 1; // +1 to add 1 day to each end-start.
      setTotalCost(days * 24 * vehicleDetails.rentCost);
    }
  }, [startDate, endDate]);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isChecked) {
      // Check if loggedin or not
      userLoginStatus.isLoggedIn? nav("/OTPVerification"): alert("Please log in to place any order!!");
      console.log("Form submitted!");
    }
  };

  return (
    <div className="w-[90%] md:w-[70%] lg:w-[50%] mt-10 mx-auto p-6 bg-white rounded-lg shadow-lg">
      <ToastContainer /> {/* Toast container for notifications */}
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
        Confirm Your Order
      </h1>
      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-2">Car Details</h2>
        <div className="flex items-center mb-2">
          <div className="w-1/3">
            {/* Placeholder for car image */}
            <img
              className="h-auto w-full rounded-lg shadow-md"
              src={vehicleDetails.img}
              alt={vehicleDetails.model}
            />
          </div>
          <div className="w-2/3 pl-4">
            <p className="text-lg font-semibold text-gray-900">
              {vehicleDetails.model}
            </p>
            <p className="text-gray-600">Rent: ₹{vehicleDetails.rentCost}/hr</p>
          </div>
        </div>
      </div>
      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-2">Rental Dates</h2>
        <div className="flex justify-between">
          <div className="w-full pr-2">
            <label className="block text-gray-700">Start Date:</label>
            <DatePicker
              selected={startDate}
              onChange={(date) => {
                setStartDate(date);
                if (endDate && date > endDate) {
                  setEndDate(date);
                }
              }}
              className="w-full p-2 border border-gray-300 rounded"
              dateFormat="dd/MM/yyyy" // Set date format to DD/MM/YYYY
              minDate={new Date()} // Disable past dates
            />
          </div>
          <div className="w-full pl-2">
            <label className="block text-gray-700">End Date:</label>
            <DatePicker
              selected={endDate}
              onChange={(date) => setEndDate(date)}
              className="w-full p-2 border border-gray-300 rounded"
              dateFormat="dd/MM/yyyy" // Set date format to DD/MM/YYYY
              minDate={startDate} // Disable past dates
            />
          </div>
        </div>
      </div>
      <div className="text-center">
        <div className="mb-6">
          <h2 className="text-lg font-semibold">Total Cost</h2>
          <p className="text-xl font-bold">₹ {totalCost.toFixed(2)}</p>
        </div>
        <label className="flex items-center">
          <input
            type="checkbox"
            className="mr-2"
            checked={isChecked}
            onChange={handleCheckboxChange}
            required
          />
          <span className="text-md">
            I acknowledge that any damages made after booking are my
            responsibility.
          </span>
        </label>
        <button
          onClick={handleSubmit}
          className={`bg-mypurple-0 text-black hover:bg-mypurpledark-0 font-bold py-2 mt-5 px-4 rounded transition duration-300 ease-in-out ${
            !isChecked ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={!isChecked}
        >
          Place Order
        </button>
      </div>
    </div>
  );
};

export default Order;
