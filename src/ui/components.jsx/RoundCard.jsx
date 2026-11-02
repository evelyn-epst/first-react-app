import React from 'react'

export default function RoundCard({pic,t1}) {
  return (
    <div className="flex flex-col gap-4 h-70 justify-center items-center hover:scale-110 duration-500 ">
            <img className='rounded-full w-50 h-50 object-cover' src={pic} alt="" />
            <a className='text-red-400 font-semibold hover:underline text-lg' href="">{t1}</a>
          </div>
  )
}
