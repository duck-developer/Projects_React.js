import React from 'react'
//LOGO
import Logo from './Image/Logo.png'


//ICONS ENDEREÇO
import {CiLocationOn} from 'react-icons/ci'
import {BsTelephoneFill} from 'react-icons/bs'
import {MdEmail} from 'react-icons/md'

//ICONS SOCIAL
import {BsInstagram} from 'react-icons/bs'
import {BsFacebook} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'
import { Form } from './Form/Form'

export const Footer = () => {
  return (
    <footer id='contact' className='mt-4 w-full h-auto  sm:grid flex flex-col items-center  bg-zinc-600 px-[30px] py-[20px]'>
        <img src={Logo} alt="" className='md:w-[3.3rem] w-[5rem]'  />
        
        <div className='flex flex-wrap justify-evenly mt-4'>
        <Form/>

            <div className=' mt-4  text-white'>
                    <div className='flex items-center'>
                        <CiLocationOn className='mr-2 w-[40px] h-[40px] p-1 bg-[#f0c70a] text-zinc-900'/>
                        <p className=''>Avenida Ayrton Senna da Silva n 4849 Conceição, <br/>Feira de Santana, Bahia</p> 
                    </div>

                    <div className='flex items-center'>
                        <MdEmail className='mr-2 w-[40px] h-[40px] p-1 bg-[#f0c70a] text-zinc-900'/>
                        <p>elite.s.adm@outlook.com</p>
                    </div>
                    <div className='flex items-center'>
                        <BsTelephoneFill className='mr-2 w-[40px] h-[40px] p-2 bg-[#f0c70a] text-zinc-900'/>
                        <p>(75) 98101-5835 <br/> (75) 3482-3241</p>
                    </div>
                
                
                    

            </div>

            <div className=' mt-4 text-white '>
                <div className='flex items-center mb-4 '>
                    <a href="https://www.instagram.com/elite.segurancaeservicos/?theme=dark" target='_blanck' className='flex'>
                    <BsInstagram className='text-[#f0c70a] text-[1.7rem]  mr-[0.7rem]' />
                    <p className='text-[1.3rem]'>Instagram</p>
                    </a>
                </div>
                <div className='flex items-center mb-4 '>
                    <a href="https://www.facebook.com/elite.servicos.tercerizados" target='_blanck' className='flex'>
                    <BsFacebook  className='text-[#f0c70a] text-[1.7rem]  mr-[0.7rem]' />
                    <p className='text-[1.3rem]'>Facebook</p>
                    </a>
                </div>

            

            </div>

        </div>
        <p className='mt-4 text-center text-[13px] text-white'>COPYRIGHT © 2022 <span className='text-[#f0c70a]'><a href="https://www.instagram.com/duck.web/?theme=dark" target="_blank" rel="noopener noreferrer">DUCK.WEB</a></span> | ALL RIGHTS RESERVED!</p>
        
    </footer>
  )
}




