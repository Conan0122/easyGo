
import React from "react";
import Cards from "../Components/Cards";
import ScrollToTop from "../Components/ScrollToTop";

function Categories() {
  return (
    <div className="w-full h-auto">
      <div id="FourWheeler" className="w-full h-auto font-Roboto mt-10">
        <div className="w-full flex justify-start px-16 py-8">
          <hr className="font-extrabold text-black" />
          <h1 className="capitalize text-5xl font-light tracking-wider border-b-2 border-black pb-5">
            Four Wheelers
          </h1>
        </div>

        {/* cards */}
        <div className="flex justify-center gap-10">
          <Cards
            price={700}
            img={"./Images/Kia Seltos.jpeg"}
            name={"Kia Seltos"}
          />
          <Cards
            price={350}
            img={"./Images/AudiA6.jpeg"}
            name={"Audi A6"}
          />
          <Cards
            price={700}
            img={"./Images/MG Hector.jpeg"}
            name={"MG Hector"}
          />
          <Cards
            price={300}
            img={"./Images/HyundaiCreta.png"}
            name={"Hyundai Creta"}
          />
        </div>
      </div>

      <div id="TwoWheelers" className="w-full h-auto font-Roboto mt-10">
        <div className="w-full flex justify-start px-16 py-8">
          <hr className="font-extrabold text-black" />
          <h1 className="capitalize text-5xl font-light tracking-wider border-b-2 border-black pb-5">
            Two Wheelers
          </h1>
        </div>

        {/* cards */}
        <div className="flex justify-center gap-10">
          <Cards
            price={700}
            img={"./Images/TVS Jupiter.jpeg"}
            name={"TVS Jupiter"}
          />
          <Cards
            price={350}
            img={"./Images/KTM Duke 200.jpeg"}
            name={"KTM Duke 200"}
          />
          <Cards
            price={700}
            img={"./Images/SuzukiHayabusa.png"}
            name={"Suzuki Hayabusa"}
          />
          <Cards
            price={300}
            img={"./Images/TVS Apache RTR 160 4V.png"}
            name={"TVS Apache RTR 160 4V"}
          />
        </div>
      </div>
      <ScrollToTop/>
    </div>
  );
}

export default Categories;
