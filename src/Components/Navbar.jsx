import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="w-full font-Roboto font-medium py-5 bg-white sticky top-0 z-10 text-black flex flex-col justify-center rounded-b-2xl">
      <ul className="flex justify-between items-center mx-28">
        <li className="font-Mont text-3xl font-extrabold drop-shadow-lg cursor-default">
          easy<span className="text-purple-800">Go.</span>
          <h4 className="text-sm font-medium">Travel smart with ease.</h4>
        </li>

        <div className="flex justify-end items-center space-x-28">
          <li className="hover:scale-110 transition-transform duration-300 ease-in-out">
            <NavLink to='/' className={({isActive})=>`${isActive? "border-b-2 p-1 border-black": ""} hover:border-b-2 p-1 hover:border-purple-500`}>Home</NavLink>
          </li>
          <li className="hover:scale-110 transition-transform duration-300 ease-in-out">
            <NavLink to="/categories" className={({isActive})=>`${isActive? "border-b-2 p-1 border-black": ""} hover:border-b-2 p-1 hover:border-purple-500`}>Categories</NavLink>
          </li>
          <li className="hover:scale-110 transition-transform duration-300 ease-in-out">
            <NavLink to="/contact" className={({isActive})=>`${isActive? "border-b-2 p-1 border-black": ""} hover:border-b-2 p-1 hover:border-purple-500`}>Contact</NavLink>
          </li>
          <li>
            <button className="bg-mypurple-0 rounded-lg px-5 py-2 hover:bg-mypurpledark-0 hover:rounded-2xl transition-all duration-300 ease-in-out">
              <NavLink to="/login">Login</NavLink>
            </button>
            <button className="bg-black text-white rounded-full mx-5 px-5 py-3 border-2 border-black hover:bg-gray-400 hover:text-black transition-all duration-300 ease-in-out">
              <NavLink to="/profile">A</NavLink>
            </button>
          </li>
        </div>
      </ul>
    </nav>
  );
}
export default Navbar;
