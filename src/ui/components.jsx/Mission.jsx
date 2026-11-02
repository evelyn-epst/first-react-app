import React from "react";
import { FiHeart } from "react-icons/fi";

function Mission({ t1, t2 }) {
  return (
    <div className="flex px-4 ">
      <div className="flex h-50 shadow shadow-black/20 rounded-2xl  gap-5 px-8 py-12 hover:scale-110 duration-500">
        <FiHeart className="border border-white rounded-full text-5xl p-1 scale-115 hover:bg-red-300 duration-300 hover:text-white text-red-300 shadow shadow-black/50" />
        <div className="text-red-400 font-semibold flex flex-col gap-4">
          <div className="text-xl">{t1}</div>
          <div className="w-70">{t2}</div>
        </div>
      </div>
    </div>
  );
}

export default Mission;
