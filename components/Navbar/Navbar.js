<<<<<<< HEAD
import { SearchOutlined } from "@ant-design/icons";
import { useState } from "react";
import { useRouter } from "next/router";


export default function Navbar() {
    const [searchByName, setsearchByName] = useState("");
    const router = useRouter();
    const handleSubmit = (event) => {
      event.preventDefault();
      router.push(`/search?result=${searchByName}`);
  }

  return (
    <>
      <div className="w-full fixed top-0 h-16 shadow bg-white flex z-10">
        <div className="mx-4 sm:mx-8 md:mx-12 xl:mx-20 w-full flex justify-between items-center mt-2">
          <h1 className="text-2xl font-Nunito italic text-[#EC994B]">Recipes</h1>

          <div className="relative">
            <form onSubmit={handleSubmit}>
              <input type="text" className="outline-none focus:border-2 bg-white hover border-2 rounded-full w-60 pl-4 pr-12 py-1" placeholder="Search" value={searchByName} onChange={(e) => setsearchByName(e.target.value)}/>
            <SearchOutlined style={{color : "#c4c4c4"}} className="text-lg font-medium absolute top-2 right-5"/>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
=======
import React from "react";

function Navbar() {
  return (
    <div className="w-full h-16 bg-white shadow-md">
      <div className="mx-10 flex justify-between items-center h-full">
        <h1 className="text-3xl font-semibold font-display text-mainColor">
          Recipe
        </h1>
      </div>
    </div>
  );
}

export default Navbar;
>>>>>>> 9eb9c4971535842eca2cc4534d9a0a1f91819865
