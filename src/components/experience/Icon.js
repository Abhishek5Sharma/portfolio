import React from 'react'

function Icon({children,title = null}) {
  return (
    <span className='p-3 bg-zinc-950 flex items-center rounded-2xl hover:scale-125 duration-300' title={title}>
        {children}
    </span>
  )
}

export default Icon