import React from 'react'
import Rating from './Rating'

function FeedBack({t1,t2,t3}) {
  return (
    <div className="flex flex-col px-2 py-1 gap-8  shadow shadow-black/50  h-60 rounded-2xl ">
        <div className="text-2xl font-semibold">{t1}</div>
        <div className="w-100 px-8 font-semibold">{t2}</div>
        <div className="flex items-center gap-3">
            <div className="shadow shadow-black/50 text-2xl p-1 bg-white rounded-full">👤</div>
            <div className="font-semibold">{t3}</div>
            <Rating />
        </div>
    </div>
  )
}

export default FeedBack