import React from 'react'

export default function Cardfixed({img}) {
  return (
        <div className="  group relative z-10  h-120  bg-amber-400 hover rounded-4xl overflow-hidden ">
          <img className="size-full object-cover" src={img} alt="" />
          <div className=" absolute flex items-end text-center text-xl font-semibold font-serif justify-center p-12  inset-0 group-hover:bg-black/50 text-transparent hover:text-white duration-300 ">Lorem ipsum dolor sit amet consectetur adipisicingl Lorem ipsum, dolor sit amet consectetur adipisicing  </div>
        </div>
      
  )
}
