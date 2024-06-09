import React, { useState } from 'react'

//LOGO
import Logo from './Image/Logo.png'
//ICONS
import {FaBars} from 'react-icons/fa'
import { GrClose } from "react-icons/gr";


export const Header = () => {
    const [open,setOpen]=useState(false)
    function Open(){
        if(open==true){
            setOpen(false)
        }else{
            setOpen(true)
        }
       
    }

    //SCROLL EVENT
    const [scroll,setScroll] = useState('bg-[#0014]')

    const ScrollY = ()=>{        
        if(window.scrollY>40){
            setScroll('bg-zinc-800')
        }else{
            setScroll('bg-[#0014]')
        }
    }

    window.addEventListener('scroll',ScrollY)

  return (

    <>
    {/*  */}
    <header className='fixed top-[-1px] w-full z-50  text-[#F0C70A] shadow-2xl shadow-black '>
    <nav className= {`${scroll} flex justify-between px-[4%] py-2 items-center `}>
        <img src={Logo} className="sm:max-w-[3rem] sm:ml-[3rem] w-[2.5rem] ml-[1rem]" />
        <div className='hidden sm:block'>
            <ul className='flex text-xl gap-8'>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">Sobre</a></li>
                <li><a href="#services">Serviços</a></li>
                <li><a href="#galery">Galeria</a></li>
                <li><a href="#team">Nosso time</a></li>
                <li><a href="#contact">Contato</a></li>
            </ul>
         </div>
         {open==false?
         (<FaBars className={"text-[25px] sm:hidden "} onClick={Open}/>):
         (<FaBars className={"text-[25px] sm:hidden hidden"} onClick={Open} /> )}
        
        
     </nav>
     {open==false ? 
                (<div></div>):
                (<div className=' top-0   bg-[#131E25] z-50 flex-col items-center justify-center flex absolute left-0   h-[800px] w-full'>
                    <GrClose className='w-[35px] p-2 bg-white rounded-full h-[35px] absolute top-8 right-8' onClick={Open}/>
                    <ul className=' flex flex-col gap-[50px] text-2xl top-[50px] absolute text-center'>
                        <li onClick={Open}><a href="#home">Home</a></li>
                        <li onClick={Open}><a href="#about">Sobre</a></li>
                        <li onClick={Open}><a href="#services">Serviços</a></li>
                        <li onClick={Open}><a href="#galery">Galeria</a></li>
                        <li onClick={Open}><a href="#team">Nosso time</a></li>
                        <li onClick={Open}><a href="#contact">Contato</a></li>
                    </ul> 
                </div>)}
    </header>
   
     </>
  )
}
