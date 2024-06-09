
export const Pedido = (props) => {
    return (
        <>
            <div className='text-white flex-col flex my-2 mx-auto max-w-[1200px]'>
                <div className=' flex flex-wrap font-bold p-3 border-solid border-b-4'>
                    <div className='w-[5%]'><h1>#</h1></div>
                    <div className='w-[15%]'><h1>Empreendimento</h1></div>
                    <div className='w-[15%]'><h1>Quadra</h1></div>
                    <div className='w-[15%]'><h1>Numero</h1></div>
                    <div className='w-[15%]'><h1>Status</h1></div>
                    <div className='w-[15%]'><h1>Pedido</h1></div>
                    {props.author && (<div className='w-[15%]'><h1>Author</h1></div>)}
                </div>
                <div className='flex flex-wrap px-3 my-2 w-full p-3 border-b-[1px] border-solid border-[#ccc]'>
                    <div className='w-[5%]'><h1>{props.id}</h1></div>
                    <div className='w-[15%]'><h1>{props.empreendimento}</h1></div>
                    <div className='w-[15%]'><h1>{props.quadra}</h1></div>
                    <div className='w-[15%]'><h1>{props.numero}</h1></div>
                    <div className='w-[15%]'><h1>{props.status}</h1></div>
                    <div className='w-[15%]'><h1>{props.pedido}</h1></div>
                    <div className='w-[15%]'><h1>{props.author}</h1></div>
                    
                </div>
                {/* {props.imagem!=="" && (<img src={props.imagem} className="w-[50px]" alt="" />)} */}
            </div>
        </>

    )
}
