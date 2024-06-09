import React from 'react'

export const Input = (props) => {

    const formInput = 'border-none h-[36px] mb-[14px] rounded py-[8px] outline-none'
  return (
    <input className={formInput} {...props}/>
  )
}
