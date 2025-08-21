import React from "react";
import { NavLink } from "react-router-dom";

function Cards({ name, price, img }) {
  return (
    <div className="bg-white font-Roboto rounded-lg overflow-hidden shadow-2xl w-80 hover:scale-105 transition-transform duration-300 ease-in-out">
      <div className="border-2 border-transparent rounded-t-lg overflow-hidden">
        <img
          className="h-48 w-full object-cover hover:scale-125 hover:brightness-90 transition-all duration-700 ease-in-out cursor-pointer"
          src={img}
          alt="car"
        />
      </div>
      <div className="p-6 flex flex-col justify-center">
        <h4 className="mt-2 font-semibold text-lg leading-tight truncate">
          {name}
        </h4>

        <div className="mt-1">
          <span>₹ {price}/hr</span>
        </div>

        <div className="flex justify-evenly py-5">
          <NavLink to="/order" state={{ name: name, price: price, img: img }}>
            <button className="bg-mypurple-0 text-black hover:bg-mypurpledark-0 px-5 py-2 rounded-md font-semibold">
              Rent now
            </button>
          </NavLink>
          <button className="bg-mypurple-0 text-black hover:bg-mypurpledark-0 px-5 py-2 rounded-md font-semibold">
            Details
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cards;
