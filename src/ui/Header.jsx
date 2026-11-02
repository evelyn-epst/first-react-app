import { IoMenu } from "react-icons/io5";
import { MdOutlinePerson } from "react-icons/md";
import { IoIosSearch } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";
import { BsCartDash } from "react-icons/bs";
import { SiGooglegemini } from "react-icons/si";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-999 backdrop-blur-sm bg-white/80 shadow">
            <div className="relative py-5 px-8 flex justify-between">
              <div className="flex items-center gap-5">
                <a href="" className="text-xl hover:opacity-75">
                  <IoMenu />
                </a>
                <a href="" className="hover:opacity-75">
                  Home
                </a>
                <a href="" className="hover:opacity-75">
                  Products
                </a>
                <a href="" className="hover:opacity-75">
                  The power of every thread
                </a>
                <a href="" className="underline hover:opacity">
                  Shop
                </a>
                <a href="" className="hover:opacity-75">
                  Info
                </a>
              </div>
              <div className="flex gap-5 items-center">
                <a href="" className="text-2xl hover:opacity-75">
                  <MdOutlinePerson />
                </a>
                <a href="" className="text-2xl hover:opacity-75">
                  <IoIosSearch />
                </a>
                <a href="" className="text-xl hover:opacity-75">
                  <FaRegHeart />
                </a>
                <a href="" className="text-xl hover:opacity-75">
                  <BsCartDash />
                </a>
              </div>
              <div className="absolute top-4 left-1/2 -translate-x-1/2  ">
                <SiGooglegemini className="text-3xl hover:opacity-75" />
              </div>
            </div>
          </header>
  )
}
