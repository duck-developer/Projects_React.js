import React from 'react'

import About from './Image/MikeCar.png'

export const Contact = () => {
  return (
    <div id='about' className=' h-auto w-[100vw] border-none bg-zinc-800 text-center text-white flex justify-center py-[15px]'>
      <div className=' max-w-[90vw] flex items-center justify-center flex-wrap  '>
        <div className='w-[100vw] max-w-[500px]'>
          <h1 className='text-[1.6rem] sm:text-[2rem] mb-2 font-bold uppercase'>Sobre os Nossos Serviços</h1>
          <p className='text-[16px] font-extralight'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, suscipit. Sapiente accusantium error ab necessitatibus doloremque illum quo, deleniti, rerum distinctio repellendus mollitia veniam tenetur id facere maiores animi culpa!
            Lorem ipsum dolor
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum facilis sit qui tenetur beatae voluptatum, officiis eum quas nisi, neque, explicabo itaque ipsam nesciunt saepe est facere debitis quae modi!
          </p>
        </div>
         <img src={About} alt="" className=' w-[40vw]'  />
      </div>
         
    </div>
  )
}
