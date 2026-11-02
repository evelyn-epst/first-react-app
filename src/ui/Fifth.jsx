import React from "react";

export default function Fifth() {
  return (
    <div className="min-h-screen flex flex-col py-12 gap-12">
      <div className="flex flex-col items-center">
        <div className="text-3xl font-semibold mb-4">Visit Us</div>
        <div className="">
          Get ready to meet the new you by visiting our experience stores!
        </div>
        <div className="flex gap-2">
          <div className="">See our</div>
          <a className="underline" href="">
            store location
          </a>
        </div>
      </div>
      <div className="relative ">
        <img
          className="w-full h-150 px-14 object-cover rounded-xl"
          src="https://novae-clothing.vercel.app/_next/image?url=%2Fimages%2Fstore-interior.png&w=1920&q=75"
          alt=""
        />
        <div className="absolute top-0 left-140 py-6 text-4xl flex items-center  translate-x-1/2">
          NOVÆ
        </div>
      </div>
    </div>
  );
}
