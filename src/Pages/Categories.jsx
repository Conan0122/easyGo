
import React from "react";
import Cards from "../Components/Cards";

function Categories() {
  return (
    <div className="w-full h-auto">
      <div id="trending" className="w-full h-auto font-Roboto mt-10">
        <div className="w-full flex justify-start px-16 py-8">
          <hr className="font-extrabold text-black" />
          <h1 className="capitalize text-5xl font-light tracking-wider border-b-2 border-black pb-5">
            trending
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
            img={"./Images/KTM Duke 200.jpeg"}
            name={"KTM Duke 200"}
          />
          <Cards
            price={700}
            img={"./Images/MG Hector.jpeg"}
            name={"MG Hector"}
          />
          <Cards
            price={300}
            img={"./Images/TVS Apache RTR 160 4V.png"}
            name={"TVS Apache RTR 160 4V"}
          />
        </div>
      </div>

      <div id="trending" className="w-full h-auto font-Roboto mt-10">
        <div className="w-full flex justify-start px-16 py-8">
          <hr className="font-extrabold text-black" />
          <h1 className="capitalize text-5xl font-light tracking-wider border-b-2 border-black pb-5">
            trending
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
            img={"./Images/KTM Duke 200.jpeg"}
            name={"KTM Duke 200"}
          />
          <Cards
            price={700}
            img={"./Images/MG Hector.jpeg"}
            name={"MG Hector"}
          />
          <Cards
            price={300}
            img={"./Images/TVS Apache RTR 160 4V.png"}
            name={"TVS Apache RTR 160 4V"}
          />
        </div>
      </div>
    </div>
  );
}

export default Categories;
