
//GIF
import Gif from '../../assets/gif/404-image.gif'

export default function Error404() {
    return (
        <main className='pt-2  w-[100%] h-[100vh] text-black bg-white flex flex-col items-center'>
            <h1 className=' text-7xl text-zinc-700'>404</h1>
            <img src={Gif} className=' w-[38%]' />
            <h2 className=' font-semibold text-4xl'>Parece que você está Perdido</h2>
            <h2 className=' font-normal text-2xl'>A página que você está Procurando não está Disponível</h2>
            <a href="/" className=' bg-[#ffff00] hover:scale-[1.2] duration-300 font mt-4 text-2xl border border-black rounded-[6px] px-2 pb-1 cursor hover:underline'> Ir para Home</a>

        </main>
    )
}
