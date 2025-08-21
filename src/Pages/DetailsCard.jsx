// Reminder: Change this name to lendCar
import React, { useState } from "react";
import { auth, db, storage } from "../Firebase/firebaseConfig";
import { collection, addDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";

const DetailsCard = () => {
  const nav = useNavigate();

  const [vehicleDetails, setVehicleDetails] = useState({
    ownerName: "",
    ownerEmail: "",
    ownerPhone: "",
    vehicleModel: "",
    vehicleYear: "",
    vehicleNumber: "",
    vehicleImage: null,
    rented: false,
    rentCost: "",
    vehicleType: "",
    // Add luxury, affordable tiers
  });

  const [uploading, setUploading] = useState(false);

  // Function to handle all car inputs using template function
  const handleVehicleChange = (e) => {
    setVehicleDetails({ ...vehicleDetails, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setUploading(true);
    // Add data to db
    try {
      // To upload image to firestore we first need:
      // 1) Upload it to firebase storage.
      // 2) Get the Url from storage and store it in firestore
      let imageUrl = "";
      if (vehicleDetails.vehicleImage) {
        const imageRef = ref(storage, `vehicles_images/${uuidv4()}`); // Create a unique image ref
        await uploadBytes(imageRef, vehicleDetails.vehicleImage); // Upload the image
        imageUrl = await getDownloadURL(imageRef); // Get the image URL
      }

      // Add data to firestore
      const docRef = await addDoc(collection(db, "vehicles"), {
        ownerName: vehicleDetails.ownerName,
        ownerEmail: vehicleDetails.ownerEmail,
        ownerPhone: vehicleDetails.ownerPhone,
        vehicleModel: vehicleDetails.vehicleModel,
        vehicleYear: vehicleDetails.vehicleYear,
        vehicleNumber: vehicleDetails.vehicleNumber,
        vehicleImage: imageUrl,
        rented: vehicleDetails.rented,
        rentCost: vehicleDetails.rentCost,
        vehicleType: vehicleDetails.vehicleType,
      });
      alert("Vehicle details added");
      nav('/')
    } catch (error) {
      // alert("Error adding vehicle!!");
      console.error("Error adding vehicle:", error);
      alert("Error: " + error.message);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="h-auto mt-10 py-5 bg-gray-100 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-center border-b-2 pb-3">
          Enter Details
        </h2>
        <form onSubmit={handleSubmit}>
          <h3 className="text-lg font-semibold mb-2">Owner Details</h3>
          <input
            type="text"
            name="ownerName"
            value={vehicleDetails.ownerName}
            onChange={handleVehicleChange}
            placeholder="Owner Name"
            className="w-full p-2 border border-gray-300 rounded mb-4"
            required
          />
          <input
            type="email"
            name="ownerEmail"
            value={vehicleDetails.ownerEmail}
            onChange={handleVehicleChange}
            placeholder="Owner Email"
            className="w-full p-2 border border-gray-300 rounded mb-2"
            required
          />
          <input
            type="tel"
            name="ownerPhone"
            value={vehicleDetails.ownerPhone}
            onChange={handleVehicleChange}
            placeholder="Owner Phone"
            className="w-full p-2 border border-gray-300 rounded mb-2"
            required
          />
          <h3 className="text-lg font-semibold mb-2">Car Details</h3>
          <input
            type="text"
            name="vehicleModel"
            value={vehicleDetails.vehicleModel}
            onChange={handleVehicleChange}
            placeholder="Vehicle Model"
            className="w-full p-2 border border-gray-300 rounded mb-2"
            required
          />
          <input
            type="text"
            name="vehicleYear"
            value={vehicleDetails.vehicleYear}
            onChange={handleVehicleChange}
            placeholder="Vehicle Year"
            className="w-full p-2 border border-gray-300 rounded mb-2"
            required
          />
          <input
            type="text"
            name="vehicleNumber"
            value={vehicleDetails.vehicleNumber}
            onChange={handleVehicleChange}
            placeholder="Vehicle Number"
            className="w-full p-2 border border-gray-300 rounded mb-4"
            required
          />
          <input
            type="file"
            name="vehicleImage"
            onChange={(e) => {
              // Handle file upload separately
              setVehicleDetails({
                ...vehicleDetails,
                vehicleImage: e.target.files[0],
              });
            }}
            placeholder="Vehicle Image"
            className="w-full p-2 border border-gray-300 rounded mb-4"
            required
          />
          <label>Vehicle Rented? </label>
          <input
            type="checkbox"
            name="rented"
            checked={vehicleDetails.rented} // Controlled checkbox, will be true/false
            onChange={(e) => {
              setVehicleDetails({
                ...vehicleDetails,
                rented: e.target.checked,
              });
            }}
            className="ml-2 scale-125 mb-4"
          />
          <input
            type="number"
            name="rentCost"
            value={vehicleDetails.rentCost}
            onChange={handleVehicleChange}
            placeholder="Rent Cost"
            className="w-full p-2 border border-gray-300 rounded mb-2"
            required
          />
          <select
            value={vehicleDetails.vehicleType}
            onChange={(e) => {
              setVehicleDetails({
                ...vehicleDetails,
                vehicleType: e.target.value,
              });
            }}
            className="w-full p-2 border border-gray-300 rounded mb-4"
            required
          >
            <option value="" disabled>
              Select a vehicle type
            </option>
            <option value="two-wheeler">Two Wheeler</option>
            <option value="four-wheeler">Four Wheeler</option>
            <option value="skateboards">Skateboards</option>
          </select>
          <button
            type="submit"
            disabled={uploading} // Disable when loading
            className={`w-full font-bold p-2 rounded ${
              uploading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-mypurple-0 text-black hover:bg-mypurpledark-0"
            }`}
          >
            {uploading ? "Uploading..." : "Submit"}{" "}
            {/* Show "Uploading..." when loading */}
          </button>
        </form>
      </div>
    </div>
  );
};

export default DetailsCard;
