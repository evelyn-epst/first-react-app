import React from "react";
import Button from "./components.jsx/Button";
import Button1 from "./components.jsx/Button1";
import Button2 from "./components.jsx/Button2";
import Button3 from "./components.jsx/Button3";

export default function Hero() {
  return (
    <div className="w-full relative py-8">
      <img
        className="w-full h-150"
        src="https://img.magnific.com/free-photo/clothing-rack-with-floral-hawaiian-shirts-hangers-hat_23-2149366018.jpg?semt=ais_hybrid&w=740&q=80"
        alt=""
      />
      <div className="absolute top-30 left-10  ">
        <div className="flex flex-col justify-between gap-20">
          <div className="text-7xl font-bold text-white w-150">
            Where iconic fashions meets
          </div>
          <div className="flex flex-col gap-4">
            <div className=" font-serif text-3xl font-bold text-white ">
              FIND YOUR{" "}
              <span className="text-amber-600 text-4xl font-bold">'s</span>
            </div>
          </div>
          <div className="flex gap-4">
          <Button />
          <Button1 />
          <Button2 />
          <Button3 />
          </div>

        </div>
      </div>
    </div>
  );
}
