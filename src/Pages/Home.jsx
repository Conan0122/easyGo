import React, { useEffect, useState } from "react";
import Cards from "../Components/Cards";
import { NavLink } from "react-router-dom";
import ScrollToTop from "../Components/ScrollToTop";
import { db } from "../Firebase/firebaseConfig";
import { collection, getDocs } from "firebase/firestore";
import {} from "daisyui";

const Home = () => {
  // Add vehicle details from db:
  const [vehicles, setVehicles] = useState([]); // State to hold the fetched vehicles.
  const [loading, setLoading] = useState(false); // Just for loading state.

  // Fetch vehicle details from Firestore whenever component loads,
  // and save those vehicles in a state which can be used later to get details.
  // And for this purpose we need useEffect.
  useEffect(() => {
    setLoading(true);
    const fetchVehicles = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "vehicles"));
        const vehicleList = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(), // Get all the fields from the document
        }));
        setVehicles(vehicleList);
        console.log("Success effect", vehicleList);
      } catch (error) {
        console.error("Error fetching vehicles: ", error);
      } finally {
        setLoading(false);
      }
    };
    fetchVehicles();
  }, []);

  return (
    <div>
      {/* Landing Page */}
      <div className="flex h-[50%] p-5">
        <div className="w-1/2 h-full">
          <div className="h-[70vh] border-2 border-transparent overflow-hidden rounded-l-3xl">
            <img
              src=".\Images\MahindraThar.jpeg"
              alt="Rental Vehicle"
              className="w-full h-full object-cover rounded-l-3xl hover:scale-110 transition-all duration-700 ease-in-out cursor-pointer"
            />
          </div>
        </div>

        <div className="w-1/2 font-Roboto flex flex-col justify-center bg-smoothwhite-0 p-8 rounded-r-3xl border-r-4 border-black">
          <h1 className="p-2 text-2xl text-start">Plan your trip now</h1>
          <h1 className="font-extrabold text-7xl text-gray-800 tracking-tighter text-center leading-normal">
            Find Your{" "}
            <span className="text-purple-700 uppercase drop-shadow-lg">
              Perfect
            </span>{" "}
            ride.
          </h1>
          <h1 className="text-xl font-light text-center tracking-widest">
            Find the Ride You Need for Every Trip, Every Adventure.
          </h1>

          <NavLink to="/categories" className="w-1/3 self-center">
            <button className="w-full bg-black border-2 border-black font-medium text-white mt-10 p-5 rounded-md hover:bg-white hover:text-black transition-all duration-300 ease-in-out self-center">
              Explore<i className="fas fa-arrow-right ml-2"></i>
            </button>
          </NavLink>
        </div>
      </div>

      {/* Trending section */}
      <div id="trending" className="w-full h-auto font-Roboto mt-10">
        <div className="w-full flex justify-start px-16 py-8">
          <hr className="font-extrabold text-black" />
          <h1 className="capitalize text-5xl font-light tracking-wider border-b-2 border-black pb-5">
            trending
          </h1>
        </div>

        {/* Dynamic cards */}
        {loading ? (
          <div className="flex items-center justify-center">
            {/* DaisyUI loading spinner */}
            <span className="loading loading-lg loading-ring"></span>{" "}
          </div>
        ) : (
          <div className="flex justify-center gap-10">
            {vehicles.length === 0 ? (
              <p>No vehicles available.</p> // Render a message when there are no vehicles
            ) : (
              vehicles.map((vehicle) => (
                <Cards
                  key={vehicle.id} // Make sure to include a unique key
                  name={vehicle.vehicleModel}
                  price={vehicle.rentCost}
                  img={vehicle.vehicleImage}
                />
              ))
            )}
          </div>
        )}
      </div>

      {/* Affordable */}
      <div id="affordable" className="w-full h-auto font-Roboto mt-10">
        <div className="w-full flex justify-start px-16 py-8">
          <hr className="font-extrabold text-black" />
          <h1 className="capitalize text-5xl font-light tracking-wider border-b-2 border-black pb-5">
            Affordable
          </h1>
        </div>

        {/* Dynamic cards */}
        {loading ? (
          <div className="flex items-center justify-center">
            {/* DaisyUI loading spinner */}
            <span className="loading loading-lg loading-ring"></span>{" "}
          </div>
        ) : (
          <div className="flex justify-center gap-10">
            {vehicles.length === 0 ? (
              <p>No vehicles available.</p> // Render a message when there are no vehicles
            ) : (
              vehicles.map((vehicle) => (
                <Cards
                  key={vehicle.id} // Make sure to include a unique key
                  name={vehicle.vehicleModel}
                  price={vehicle.rentCost}
                  img={vehicle.vehicleImage}
                />
              ))
            )}
          </div>
        )}
      </div>

      {/* Luxury */}
      <div id="Luxury bikes" className="w-full h-auto font-Roboto mt-10">
        <div className="w-full flex justify-start px-16 py-8">
          <hr className="font-extrabold text-black" />
          <h1 className="capitalize text-5xl font-light tracking-wider border-b-2 border-black pb-5">
            Luxury Two wheelers
          </h1>
        </div>

        {/* Dynamic cards */}
        {loading ? (
          <div className="flex items-center justify-center">
            {/* DaisyUI loading spinner */}
            <span className="loading loading-lg loading-ring"></span>{" "}
          </div>
        ) : (
          <div className="flex justify-center gap-10">
            {vehicles.length === 0 ? (
              <p>No vehicles available.</p> // Render a message when there are no vehicles
            ) : (
              vehicles.map((vehicle) => (
                <Cards
                  key={vehicle.id} // Make sure to include a unique key
                  name={vehicle.vehicleModel}
                  price={vehicle.rentCost}
                  img={vehicle.vehicleImage}
                />
              ))
            )}
          </div>
        )}
      </div>

      {/* Luxury */}
      <div id="Luxury bikes" className="w-full h-auto font-Roboto mt-10">
        <div className="w-full flex justify-start px-16 py-8">
          <hr className="font-extrabold text-black" />
          <h1 className="capitalize text-5xl font-light tracking-wider border-b-2 border-black pb-5">
            Luxury Four wheelers
          </h1>
        </div>

        {/* Dynamic cards */}
        {loading ? (
          <div className="flex items-center justify-center">
            {/* DaisyUI loading spinner */}
            <span className="loading loading-lg loading-ring"></span>{" "}
          </div>
        ) : (
          <div className="flex justify-center gap-10">
            {vehicles.length === 0 ? (
              <p>No vehicles available.</p> // Render a message when there are no vehicles
            ) : (
              vehicles.map((vehicle) => (
                <Cards
                  key={vehicle.id} // Make sure to include a unique key
                  name={vehicle.vehicleModel}
                  price={vehicle.rentCost}
                  img={vehicle.vehicleImage}
                />
              ))
            )}
          </div>
        )}
      </div>

      {/* Skatebord */}
      <div id="Luxury bikes" className="w-full h-auto font-Roboto mt-10">
        <div className="w-full flex justify-start px-16 py-8">
          <hr className="font-extrabold text-black" />
          <h1 className="capitalize text-5xl font-light tracking-wider border-b-2 border-black pb-5">
            Skate Board
          </h1>
        </div>

        {/* Dynamic cards */}
        {loading ? (
          <div className="flex items-center justify-center">
            {/* DaisyUI loading spinner */}
            <span className="loading loading-lg loading-ring"></span>{" "}
          </div>
        ) : (
          <div className="flex justify-center gap-10">
            {vehicles.length === 0 ? (
              <p>No vehicles available.</p> // Render a message when there are no vehicles
            ) : (
              vehicles.map((vehicle) => (
                <Cards
                  key={vehicle.id} // Make sure to include a unique key
                  name={vehicle.vehicleModel}
                  price={vehicle.rentCost}
                  img={vehicle.vehicleImage}
                />
              ))
            )}
          </div>
        )}
      </div>

      <ScrollToTop />
    </div>
  );
};

export default Home;
