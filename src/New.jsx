import React, { useState } from "react";

function New() {
  const [Bulb, SetBulb] = useState(true);
  return (
    <>
      {Bulb ? (
        <div className="w-100 m-8 grid grid-cols-3 gap-2 p-4  shadow shadow-blue-500 rounded-xl  ">
          <div onClick={()=> SetBulb(false)} className="w-30  h-20 bg-blue-500  rounded-3xl duration-500 "></div>
          <div onClick={()=> SetBulb(false)} className="w-30  h-20 bg-blue-500  rounded-3xl duration-500 "></div>
          <div onClick={()=> SetBulb(false)} className="w-30  h-20 bg-blue-500  rounded-3xl duration-500 "></div>
          <div onClick={()=> SetBulb(false)} className="w-30  h-20 bg-blue-500  rounded-3xl duration-500 "></div>
          <div onClick={()=> SetBulb(false)} className="w-30  h-20 bg-blue-500  rounded-3xl duration-500 "></div>
          <div onClick={()=> SetBulb(false)} className="w-30  h-20 bg-blue-500  rounded-3xl duration-500 "></div>
          <div onClick={()=> SetBulb(false)} className="w-30  h-20 bg-blue-500  rounded-3xl duration-500 "></div>
          <div onClick={()=> SetBulb(false)} className="w-30  h-20 bg-blue-500  rounded-3xl duration-500 "></div>
          <div onClick={()=> SetBulb(false)} className="w-30  h-20 bg-blue-500  rounded-3xl duration-500 "></div>
          <div onClick={()=> SetBulb(false)} className="w-30  h-20 bg-blue-500  rounded-3xl duration-500 "></div>
          <div onClick={()=> SetBulb(false)} className="w-30  h-20 bg-blue-500  rounded-3xl duration-500 "></div>
          <div onClick={()=> SetBulb(false)} className="w-30  h-20 bg-blue-500  rounded-3xl duration-500 "></div>
        </div>
      ) : (
        <div className="w-100 m-8 grid grid-cols-3 gap-2 p-4 shadow shadow-fuchsia-500 rounded-xl ">
           <div onClick={()=> SetBulb(true)} className="w-30  h-20 bg-fuchsia-500  rounded-3xl duration-500"></div>
           <div onClick={()=> SetBulb(true)} className="w-30  h-20 bg-fuchsia-500  rounded-3xl duration-500"></div>
           <div onClick={()=> SetBulb(true)} className="w-30  h-20 bg-fuchsia-500  rounded-3xl duration-500"></div>
           <div onClick={()=> SetBulb(true)} className="w-30  h-20 bg-fuchsia-500  rounded-3xl duration-500"></div>
           <div onClick={()=> SetBulb(true)} className="w-30  h-20 bg-fuchsia-500  rounded-3xl duration-500"></div>
           <div onClick={()=> SetBulb(true)} className="w-30  h-20 bg-fuchsia-500  rounded-3xl duration-500"></div>
           <div onClick={()=> SetBulb(true)} className="w-30  h-20 bg-fuchsia-500  rounded-3xl duration-500"></div>
           <div onClick={()=> SetBulb(true)} className="w-30  h-20 bg-fuchsia-500  rounded-3xl duration-500"></div>
           <div onClick={()=> SetBulb(true)} className="w-30  h-20 bg-fuchsia-500  rounded-3xl duration-500"></div>
           <div onClick={()=> SetBulb(true)} className="w-30  h-20 bg-fuchsia-500  rounded-3xl duration-500"></div>
           <div onClick={()=> SetBulb(true)} className="w-30  h-20 bg-fuchsia-500  rounded-3xl duration-500"></div>
           <div onClick={()=> SetBulb(true)} className="w-30  h-20 bg-fuchsia-500  rounded-3xl duration-500"></div>
        </div>
      )}
    </>
  );
}

export default New;
