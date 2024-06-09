// import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/Header";
import { useContext } from "react";
import { ContextInfo } from "../../context/ContextInfo";
import { Pedido } from "../../components/Pedido";

export default function InfoPedido() {
    const { id } = useParams()
    const { pedidoInfo } = useContext(ContextInfo)

    return (
        <main >
            <Header />

            <Pedido id={id} empreendimento={pedidoInfo.empreendimento} quadra={pedidoInfo.quadra} numero={pedidoInfo.numero} status={pedidoInfo.status} pedido={pedidoInfo.pedido} author={pedidoInfo.author} />
            {pedidoInfo.imagem && (
                <>
                    <h1 className="border-2 mx-[35%] mt-7 border-blue-700 py-[5px]  text-center text-[30px] font-bold">Imagem de solicitação</h1>
                    <div className=" mt-8 px-12 pb-4 grid grid-cols-3 gap-3">
                        {pedidoInfo.imagem.map((item, index) => (
                            // <section key={index} className="  mt-8 px-8  gap-3">
                            <div key={index} className="cursor-pointer hover:scale-105 transition-all">
                                <img src={item} className=" w-[250px] rounded-lg " />
                            </div>
                            // </section>
                        ))}

                    </div>

                </>
            )}
            {pedidoInfo.observacao && (
                <div className=" text-center">
                    <h1 className=" border-2 mx-[44%] border-red-700 py-[5px] text-red-500 text-4xl">AVISO</h1>
                    <h1 className=" text-3xl">{pedidoInfo.observacao}</h1>
                </div>

            )}
            {pedidoInfo.status == "Concluido" && (
                <>
                    <h1 className="border-2 mx-[35%] mt-7 border-blue-700 py-[5px] text-center  my-[20px]text-center text-[30px] font-bold">Imagem de Concluido</h1>
                    <div className=" mt-8 px-12 pb-4 grid grid-cols-3 gap-3">
                        {pedidoInfo.imagemConcluido.map((item, index) => (
                            <div key={index} className="cursor-pointer hover:scale-105 transition-all">
                                <img src={item} target className=" w-[250px] rounded-lg" />
                            </div>
                        ))}

                    </div>

                </>
            )}


        </main >
    )
}
