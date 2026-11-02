import React from "react";
import { FiHeart } from "react-icons/fi";

import Rating from "./Rating";

export default function Card2({ pic, t1, t2, }) {
  return (
    <div className=" w-80 h-80 mt-10 relative shadow shadow-black/35">
      <img className="h-50 w-80 object-cover" src={pic} alt="" />
      <FiHeart className=" absolute top-2 right-2 border border-red-300 bg-white text-red-400 rounded-full p-1 text-2xl  hover:bg-red-400 duration-300 scale-105  hover:text-white" />
      <div className="flex flex-col gap-2 px-2 py-2">
        <div className="text-lg font-semibold">{t1}</div>
        <div className="font-semibold">{t2}</div>
        <Rating />
      </div>
    </div>
  );
}
