import React from 'react'

import { Link } from 'react-router-dom'
import { Logo } from '../components/Logo/Logo'

export const Error = () => {
    return (
        <div className='flex flex-col items-center justify-center  w-full min-h-[100vh] text-white'>
            <Logo />


            <h1 className=' font-bold text-[30px] '>Página não encontrada!</h1>
            <p className='text-[20px] italic'>Está página que está procurando não existe.</p>

            <Link to='/' className=" bg-[rgba(255,255,255,0.6)] px-2 py-4 mt-4 rounded text-black hover:bg-white transition-all hover:scale-105">
                Voltar para Home
            </Link>
        </div>
    )
}
