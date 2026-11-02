import React from "react";
import { IoMenu } from "react-icons/io5";
import { MdOutlinePerson } from "react-icons/md";
import { IoIosSearch } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";
import { BsCartDash } from "react-icons/bs";
import { SiGooglegemini, SiPicsart } from "react-icons/si";
import Buttonfixed from "./Buttonfixed";
import { FaStar } from "react-icons/fa";

export default function Headline({ t1, t2, t3, t4, pic }) {
  return (
    <header className="fixed top-0 left-0 w-full z-999 backdrop-blur-sm bg-white/80 shadow">
      <div className="relative py-5 px-8 flex justify-between">
        <div className="flex items-center gap-8">
          <a href="" className="text-xl hover:opacity-75 text-red-400">
            <IoMenu />
          </a>
          <a  href="" className="hover:opacity-75 text-red-400">
            {t1}
          </a>
          <a  href="" className="hover:opacity-75 text-red-400">
            {t2}
          </a>
          <a  href="" className="hover:opacity-75 text-red-400">
           {t3}
          </a>

          <a href="" className="underline hover:opacity text-red-400">
            {t4}
          </a>
          <a  href="" className="hover:opacity-75 text-red-400">
            Contact
          </a>
        </div>
        <Buttonfixed />
        <div className="absolute top-6 left-1/2 -translate-x-1/2  ">
            <img src={pic} alt="" />  
        </div>
      </div>
    </header>
  );
}
