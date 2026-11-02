import React from 'react'

function Button3() {
  return (
     <button className="w-fit border  border-white relative  text-black  text-xl rounded-4xl bg-white  text-bold group  overflow-hidden hover:bg-black  hover:text-white">
            <div className="px-3 py-2  group-hover:-translate-y-full ease-out duration-300">Get Started</div>
            <button className="absolute top-0 left-0  px-3 py-2  -translate-y-full mb-8 group-hover:translate-y-0  duration:300 ease-out  " >Get Started</button>
          </button>
  
  )
}

export default Button3