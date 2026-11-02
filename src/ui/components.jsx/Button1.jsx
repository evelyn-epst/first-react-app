import React from 'react'

function Button1({t1,t2}) {
  return (
    <button className="w-fit border border-red-400 relative  text-white  text-xl rounded-4xl bg-red-400 text-bold group  overflow-hidden hover:bg-white">
            <div className="px-3 py-2  group-hover:-translate-y-full ease-out duration-300 text-center ">{t1}</div>
            <button className="absolute top-0 left-0  px-3 py-2  text-center -translate-y-full mb-8 group-hover:translate-y-0 text-red-400 duration-300 ease-out  " >{t2}</button>
          </button>
  )
}

export default Button1