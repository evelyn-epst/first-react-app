import React from 'react'
import Button1 from './Button1'

function AboutUs({t1,t2,t3}) {
  return (
    <div className="flex flex-col gap-5 font-serif p-8 w-1/3">
        <div className="text-red-400 text-2xl">{t1}</div>
        <div className="text-red-500 text-5xl">{t2}</div>
        <div className="font-serif">
          {t3}
        </div>
        <Button1 t1={"See Our Collection"} t2={"See Our Collection"} />
      </div>
  )
}

export default AboutUs