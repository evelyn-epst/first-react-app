import React from "react";

function Button() {
  return (
    <button className="w-fit border relative  text-white  text-xl rounded-4xl bg-black  text-bold group  overflow-hidden hover:bg-white  hover:text-black">
      <div className="px-3 py-2  group-hover:-translate-y-full ease-out duration-300">
        Get Started
      </div>
      <button className="absolute top-0 left-0  px-3 py-2  -translate-y-full mb-8 group-hover:translate-y-0 text-black duration:300 ease-out  ">
        Get Started
      </button>
    </button>
  );
}

export default Button;
