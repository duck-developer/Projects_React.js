import React from 'react'

//icons
import {MdSecurity} from 'react-icons/md'
import {AiOutlineArrowRight,AiFillThunderbolt} from 'react-icons/ai '
import {GiCctvCamera,GiRingingAlarm} from 'react-icons/gi'
export const Services = () => {
  return (
    <div id='services' className='text-center mt-4 mx-auto w-[100vw] min-h-[70vh] grid place-items-center  '>
        <h1 className='text-[30px] font-bold text-zinc-700 uppercase'>Nossos Serviços</h1>
        <div className='w-[90vw] flex justify-center gap-4 flex-wrap'>

            <div className='  text-white'>
                <div className='hover:scale-105 items-center max-w-[18rem] max-h-[20rem] justify-center flex flex-col mt-4 bg-zinc-500 p-4 rounded-xl '>
                    <AiFillThunderbolt className='text-[40px] text-[#F0C70A]'/>
                    <h1 className='text-[20px] font-bold'>Cercas Elétricas</h1>
                    <p className='text-black text-[15px]'>A instalação de cerca elétrica é uma camada de proteção valiosa atualmente. São instaladas em cima de muros, grades, portões e também na propriedade rural</p>
                    <button className='flex items-center justify-center border border-white px-[15px] py-[4px] mt-[10px]'>Contate-nos <AiOutlineArrowRight className="ml-2"/> </button>
                </div>
            </div>

            
            <div className='  text-white'>
                <div className='hover:scale-105 items-center max-w-[18rem] max-h-[20rem] justify-center flex flex-col mt-4 bg-zinc-500 p-4 rounded-xl '>
                    <GiCctvCamera className='text-[40px] text-[#F0C70A]'/>
                    <h1 className='text-[20px] font-bold'>Vigilância 24H</h1>
                    <p className='text-black text-[15px]'> O monitoramento visa manter o sistema de câmeras em pleno funcionamento, tendo em vista que qualquer sistema pode falhar em algum momento </p>
                    <button className='flex items-center justify-center border border-white px-[15px] py-[4px] mt-[10px]'>Contate-nos <AiOutlineArrowRight className="ml-2"/> </button>
                </div>
            </div>
            <div className='  text-white'>
                <div className='hover:scale-105 items-center max-w-[18rem] max-h-[20rem] justify-center flex flex-col mt-4 bg-zinc-500 p-4 rounded-xl '>
                    <GiRingingAlarm className='text-[40px] text-[#F0C70A]'/>
                    <h1 className='text-[20px] font-bold'>Alarmes Monitorados</h1>
                    <p className='text-black text-[15px]'>Primeiramente o monitoramento de alarme é muito mais que acompanhar disparos e enviar um tático para verificação presencial; o sistema é muito mais completo</p>
                    <button className='flex items-center justify-center border border-white px-[15px] py-[4px] mt-[10px]'>Contate-nos <AiOutlineArrowRight className="ml-2"/> </button>
                </div>
            </div>

            

        </div>

    </div>
  )
}
