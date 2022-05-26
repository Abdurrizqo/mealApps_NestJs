import React from "react";
import Image from "next/image";

function Card() {
  return (
    <>
      <div className=" mt-20 ml-20">
        <div className="relative w-32 h-32 bg-mainColor top-28">
          <Image
            src="https://www.themealdb.com/images/media/meals/wxywrq1468235067.jpg"
            alt="..."
            layout="fill"
          />
        </div>
        <div className="w-80 h-20 shadow-neu rounded-md flex-row items-center pl-24 pr-4 py-2">
          <h1 className="text-xl font-medium text-right">
            Apple Frangipan Tart
          </h1>
          <h3 className="text-base font-normal text-right">Vegetarian</h3>
        </div>
      </div>
    </>
  );
}

export default Card;
