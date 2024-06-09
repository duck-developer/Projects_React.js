import React, { useEffect, useRef, useState } from 'react'

//ANIMATION
import {motion} from 'framer-motion'


//IMAGE
import image1 from './Image/Gallery/img1.jfif'
import image2 from './Image/Gallery/img2.webp'
import image3 from './Image/Gallery/img3.jpg'
import image4 from './Image/Gallery/img4.webp'
import image5 from './Image/Gallery/img5.webp'
import image6 from './Image/Gallery/img6.jpg'
import { Link } from 'react-router-dom'

const images = [image1,image2,image3,image4,image5,image6]


export const Gallery = () => {
  const carousel = useRef()
  const [carouselWidth,setCarouselWidth]=useState(0)

  useEffect(()=>{
    setCarouselWidth(carousel.current?.scrollWidth-carousel.current?.offsetWidth)
  },[])
  return (

    
    <>
    <div id='galery' className='bg-zinc-500 pt-[20px] mt-[2rem] justify-center items-center flex flex-col '>
      <h1 className=' text-center uppercase pb-[3.5rem] text-white text-[24px] font-bold'>Galeria de Imagens</h1>
      <div  className=' mx-auto mt-[2rem] h-[50vh] w-full max-w-[900px] flex items-center '> 
        
        <motion.div className=' overflow-hidden cursor-grab ' whileTap={{cursor:"grabbing"}} ref={carousel}  >
          <motion.div className='flex' drag="x"
          dragConstraints={{right:0,left:-carouselWidth}}
          >

            {images.map((image,index)=>(
              <motion.div  className='  min-h-[390px] min-w-[280px]'>
                <img src={image} key={index} alt="" className='w-full h-[70%] p-[10px] rounded-[30px] pointer-events-none '/>
              </motion.div>
            
            ))}
            
          </motion.div>
        </motion.div>
      </div>
      <button  className='mb-[2rem] mt-[-3rem] z-10 text-[1rem] border w-[8rem] h-[2.5rem] bg-transparent border-solid border-white text-white outline-none cursor-pointer
                 hover:bg-[#f0c70a] hover:text-slate-100 uppercase'>
                  <Link to='/Gallery'>Mais Imagens </Link> 
      </button>
    </div>
    </>
  )
}
