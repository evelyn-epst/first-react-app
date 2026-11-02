import React from 'react'

export default function Ending({t1,t2,t3,t4,t5}) {
  return (
    <div className="flex flex-col font-semibold gap-2 py-2 text-red-400  ">
              <div className="text-xl font-semibold">{t1}</div>
              <a className='hover:underline' href="">{t2}</a>
              <a className='hover:underline' href="">{t3}</a>
              <a className='hover:underline' href="">{t4}</a>
              <a className='hover:underline' href="">{t5}</a>
            </div>
  )
}
