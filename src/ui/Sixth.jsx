import React from 'react'

export default function Sixth() {
  return (
     <div className="h-90 py-12 ">
        <div className="w-full h-1 bg-black/10 mb-10"></div>
        <div className="flex justify-between  px-4 py-2">
          <div className="flex flex-col gap-2 px-15 ">
            <a href="text-xl font-semibold">COMPANY</a>
            <a href="">About Us</a>
            <a href="">Contact</a>
            <a href="">Careers</a>
          </div>
          <div className="flex flex-col gap-2 px-15">
            <a href="text-xl font-semibold">Help</a>
            <a href="">FAQ's</a>
            <a href="">Delivery Policy</a>
            <a href="">Privacy Policy</a>
            <a href="">Returns & Exchanges</a>
          </div>
          <div className="flex flex-col gap-2 px-15 ">
            <a href="text-xl font-semibold">Shop</a>
            <a href="">Topwear</a>
            <a href="">Outerwear</a>
            <a href="">Pants</a>
            <a href="">Accessories</a>
          </div>
          <div className="">
            <div className="">Follow Us</div>
            <div className="max-w-80">
              Keep up-to-date with our latest things by following us on our
              social media channels.
            </div>
            <div className="flex gap-4 mt-8">
            <img className='rounded w-6' src="https://cdn-icons-png.flaticon.com/512/20/20673.png" alt="" />
            <img className='rounded w-6' src="https://cdn-icons-png.flaticon.com/512/1384/1384015.png" alt="" />
            <img className='rounded w-6' src="https://cdn-icons-png.flaticon.com/512/3116/3116491.png" alt="" />

            </div>
          </div>
        </div>
        <div className="w-full h-1 bg-black/10 mt-10"></div>
        <div className="flex justify-between px-6 py-4">
          <a className="px-10 font-serif" href="">©2026 NOVÆ</a>
          <div className="font-serif">MODERN ESSENTIALS</div>
        </div>
      </div>
  )
}
