import React from 'react'

export default function Button2({t1,t2}) {
  return (
     <button className="w-fit border relative  text-amber-400 border-white text-xl rounded-4xl bg-white hover:border-amber-400  text-bold group  overflow-hidden hover:bg-amber-400  hover:text-white">
            <div className="px-3 py-2  group-hover:-translate-y-full ease-out duration-300">{t1}</div>
            <button className="absolute top-0 left-0  px-3 py-2  -translate-y-full mb-8 group-hover:translate-y-0 text-white duration:300 ease-out" >{t2}</button>
          </button>
  
  )
}
