import React from "react";

export default function Card({ pic, s }) {
  return (
    <div className=" w-100  bg-neutral-50 shadow p-4 group ">
      <div className="relative">
        <img className="w-full h-120 object-cover " src={pic} alt="" />
        <div className="absolute bottom-0  w-full left-0 p-3">
          <button className="bg-black text-white w-full rounded-3xl group-hover:opacity-100 hover:invert  opacity-0 duration-300 p-3 ">
            + Quick Add
          </button>
        </div>
      </div>
      <div className="flex flex-col">
        <div className=" font-semibold text-lg mt-2 ">{s}</div>
        <div className="mb-2">Ks 62,000.00</div>
      </div>
    </div>
  );
}
