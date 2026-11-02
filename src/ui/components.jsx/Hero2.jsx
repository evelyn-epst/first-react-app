import React from 'react'
import Button1 from './Button1'

export default function Hero2({t1,t2,t3,pics}) {
  return (
    <div className="relative mb-10">
          <img className='w-full h-screen object-cover' src={pics} alt="" />
          <div className="absolute bg-white/50 size-full top-0 left-0 flex justify-center flex-col gap-4 px-12">
            <div className="text-red-400 font-semibold">{t1}</div>
            <div className="text-5xl w-100 text-red-400 font-bold ">{t2}</div>
            <div className="text-lg  font-semibold w-55">{t3} </div>
            <Button1 t1={'Shop Now ->'} t2={"Shop Now->"} />
          </div>
      </div>
  )
}
