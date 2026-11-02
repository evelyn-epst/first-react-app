import React from 'react'
import Ending from './Ending'
import ConnectLink from './ConnectLink'

function Seventh2({pic}) {
  return (
    <div className="h-60  px-8 py-4">
        <div className="flex justify-between">
        <img className='w-80 h-50 object-cover bg-red-300 shadow shadow-black/50 rounded-2xl   ' src={pic} alt="" />
        <Ending t1={"Ouick Links"} t2={"Home"} t3={"Shop"} t4={"About"} t5={"Contact"}   />
        <Ending t1={"Customer Care"} t2={"Shopping"} t3={"Register"} t4={"PACs"} t5={"Help"}   />
        <ConnectLink />
        </div>

    </div>

  )
}

export default Seventh2