import React from "react";

export default function Buttonfixed() {
  return (
    <div className="flex gap-4">
      <button className="bg-black text-white py-2 px-4 font-semibold hover:bg-white hover:border hover:text-black hover:scale-120 duration-500 rounded-4xl">
        Sign Up
      </button>
      <button className="bg-white text-black py-2 px-4 font-semibold hover:bg-black border hover:text-white hover:scale-120 duration-500 rounded-4xl">
        Log In
      </button>
    </div>
  );
}
