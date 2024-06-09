import React from 'react'
import styles from './Gallery.module.css'

import { Header } from './Header'


//IMAGES
import img1 from './images/img1.jfif'
import img2 from './images/img2.jfif'
import img3 from './images/img3.jfif'
import img4 from './images/img4.jfif'
import img5 from './images/img5.jfif'
import img6 from './images/img6.jfif'
import img7 from './images/img7.jfif'
import img8 from './images/img8.jfif'
import img9 from './images/img9.jfif'
import img10 from './images/img10.jfif'
import img11 from './images/img11.jfif'
import img12 from './images/img12.jfif'
import img13 from './images/img13.jfif'
import img14 from './images/img14.jfif'
import img15 from './images/img15.jfif'

const images = [img1,img2,img3,img4,img5,img6,img7,img8,img9,img10,img11,img12,img13,img14,img15]

export const GalleryImage = () => {
  return (
    <>
    <Header/>
    <div className={`${styles.home} h-[160vh] sm:h-[305vh]` } >
      <div className=' z-50 text-white pt-[5.7rem] flex flex-col items-center'>
      <h1 className=' uppercase sm:text-[2.4rem] font-bold'>GAleria de imagens</h1>
      <div className={styles.images}>
        {images.map((image,index)=>(
          <img src={image} key={index} alt="" 
          className='w-full rounded mb-2' />
        ))}
      </div>
      </div>
      
      
    </div>
    </>
  )
}
