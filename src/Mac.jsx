import React, { useState } from "react";
import { IoBatteryHalf } from "react-icons/io5";

function Mac() {
  const [setting, setSetting] = useState(false);

  return (
    <>
      <div className="h-screen relative">
        <img src="wallpaper.png" alt="" className="size-full object-cover" />

        <div className="absolute left-0 w-full bottom-0 z-10 p-4 flex justify-center items-end">
          <div className="w-fit px-1.5 py-1 flex gap-0.5 justify-center items-center rounded-[18px] border border-white/20 bg-white/10 backdrop-blur-xs">
            <a href="#">
              <img src="finder.png" alt="finder" className="size-12 p-1" />
            </a>
            <button onClick={()=> setSetting(!setting)}>
              <img src="setting.png" alt="finder" className="size-12 p-0.5 active:scale-95" />
            </button>
            <a href="#">
              <img src="appStore.png" alt="finder" className="size-12" />
            </a>
            <a href="#">
              <img
                src="safari.png"
                alt="finder"
                className="size-12 p-1 bg-white rounded-xl scale-82"
              />
            </a>
            <a href="#">
              <img src="music.png" alt="finder" className="size-12 p-1" />
            </a>
            <a href="#">
              <img src="message.png" alt="finder" className="size-12" />
            </a>
            <a href="#">
              <img src="contact.png" alt="finder" className="size-12 p-1" />
            </a>
            <a href="#">
              <img src="photos.png" alt="finder" className="size-12 p-0.5" />
            </a>
            <a href="#">
              <img src="find.png" alt="finder" className="size-12 p-1" />
            </a>
            <a href="#">
              <img
                src="vscode.png"
                alt="finder"
                className="size-12 p-1 bg-white rounded-xl scale-82"
              />
            </a>
            <a href="#">
              <img
                src="notion.png"
                alt="finder"
                className="size-12 p-1 bg-white rounded-xl scale-82"
              />
            </a>
            <a href="#">
              <img
                src="gpt.png"
                alt="finder"
                className="size-12 p-1.5 bg-white rounded-xl scale-82"
              />
            </a>
          </div>
        </div>

        <div className="absolute top-0 left-0 w-full px-2 py-0.5 flex justify-between items-center text-white bg-linear-to-t to-black/40">
          <div className="flex gap-4 items-center">
            <a href="#">
              <img src="apple.png" alt="logo" className="h-4 invert" />
            </a>
            <a href="">Finder</a>
            <a href="">File</a>
            <a href="">Edit</a>
            <a href="">View</a>
            <a href="">Go</a>
            <a href="">Window</a>
            <a href="">Help</a>
          </div>
          <div className="flex gap-2 items-center">
            <a href="">
              <IoBatteryHalf className="text-2xl mx-0.5 pt-0.5T" />
            </a>
            <a href="">
              <img src="wifi.png" alt="siri" className="h-4 mx-1 invert" />
            </a>
            <a href="">
              <img src="control.png" alt="siri" className="h-4 mx-1 invert" />
            </a>
            <a href="">
              <img src="siri2.png" alt="siri" className="h-4 mx-1" />
            </a>
            <a href="">Sat 14 Nov</a>
            <a href="">8:10 PM</a>
          </div>
        </div>

        <img
          src="settingAPP.png"
          alt="app"
          className={`w-3xl absolute z-9 top-24 left-56 rounded-2xl duration-500 ease-in-out ${!setting && "scale-0 -translate-x-full"}`}
        />
      </div>
    </>
  );
}

export default Mac;
