import React from 'react'
//IMAGE
import img1 from './Image/Team/img1.jpg'
import img2 from './Image/Team/img2.jpg'
import img3 from './Image/Team/img3.jpg'


//ICONS
import {BsInstagram} from 'react-icons/bs'
import {BsFacebook} from 'react-icons/bs'
import {BsGoogle} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'


export const Team = () => {
  return (
    <div id='team' className='w-[100vw] h-auto min-h-[74vh] grid place-items-center  mt-6'>
        <div className='flex gap-[0.7rem]'>
        <h1 className=' uppercase text-center font-bold  text-[#f0c70a] text-[20px]'>Nosso</h1>
        <h1 className=' uppercase text-center font-bold text-zinc-700 text-[20px]'>Time</h1>
        </div>
       
        
        <div className=' w-[90vw] flex justify-center gap-4 flex-wrap mt-4'>
            
            <div className=' hover:scale-105 shadow-2xl min-h-[18rem] mb-4 border'>
                <div>
                    <img src={img1} alt="" className='max-w-[15rem] ' />
                    <h1 className=' font-bold text-[20px] text-center uppercase mt-2 text-[#f0c70a]'>Carlos</h1>
                    <p className=' uppercase text-center font-bold text-[10px]'>supoport</p>
                </div>
                <div className='flex justify-center gap-4 mt-[1.5rem]'>
                <BsInstagram  className='text-[20px]'/>
                <BsFacebook  className='text-[20px]'/>
                <BsGoogle  className='text-[20px]'/>
                <BsTwitter  className='text-[20px]'/>
                </div>         
            </div>
            <div className=' hover:scale-105 shadow-2xl min-h-[18rem] mb-4 border'>
                <div>
                    <img src={img2} alt="" className='max-w-[15rem] ' />
                    <h1 className=' font-bold text-[20px] text-center uppercase mt-2 text-[#f0c70a]'>Gabriel</h1>
                    <p className=' uppercase text-center font-bold text-[10px]'>supoport</p>
                </div>
                <div className='flex justify-center gap-4 mt-[1.5rem]'>
                <BsInstagram  className='text-[20px]'/>
                <BsFacebook  className='text-[20px]'/>
                <BsGoogle  className='text-[20px]'/>
                <BsTwitter  className='text-[20px]'/>
                </div>         
            </div>
            <div className=' hover:scale-105 shadow-2xl min-h-[18rem] mb-4 border'>
                <div>
                    <img src={img3} alt="" className='max-w-[15rem] ' />
                    <h1 className=' font-bold text-[20px] text-center uppercase mt-2 text-[#f0c70a]'>Eliza</h1>
                    <p className=' uppercase text-center font-bold text-[10px]'>supoport</p>
                </div>
                <div className='flex justify-center gap-4 mt-[1.5rem]'>
                <BsInstagram  className='text-[20px]'/>
                <BsFacebook  className='text-[20px]'/>
                <BsGoogle  className='text-[20px]'/>
                <BsTwitter  className='text-[20px]'/>
                </div>         
            </div>
            







        </div>
       
    </div>
  )
}





// {people.image.map((image,index)=>(
//     <div key={index} className="bg-red-400 w-[full] h-[300px] mb-4 border">
//         <div>
//           <img src={image} alt="" className='w-full rounded-t-[14px]' />
//           <h1>{image}</h1>
//         </div>
//     </div>
// ))}