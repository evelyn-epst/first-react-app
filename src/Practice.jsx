import React, { useState } from "react";

function Practice() {
  const [light, setLight] = useState(true);
  return (
    <>
      <button
        onClick={()=> setLight(!light)}
        className="size-10 z-999 bg-white border-2 pb-1 active:scale-75 duration-500  text-xl rounded-xl fixed top-5 right-5 rotate-90"
      >
        |||
      </button>
      <div
        className={`bg-black/50 backdrop-blur-lg z-99 inset-0  text-white fixed flex  flex-col text-5xl gap-4  items-center justify-center ${!light && " scale-0"}`}
      >
        <a href="">HOME</a>
        <a href="">ABOUT</a>
        <a href="">SERVICE</a>
        <a href="">CONTACT</a>
      </div>

      <div className="flex text-pink-500 items-center justify-center h-screen text-5xl font-semibold bg-pink-500  bg-linear-to-tl from-pink-500 to-pink-100 ">
        Hello World
      </div>
      <div className="flex items-center justify-center text-green-500 h-screen text-5xl font-semibold bg-green-300 bg-linear-tl from-green-600 to-green-100 ">
        Hello World
      </div>
    </>
  );
}

export default Practice;
