import { useContext, useEffect, useState } from "react";
import Header from "../../components/Header";

//SCROLL
import ScrollContainer from 'react-indiana-drag-scroll'
import 'react-indiana-drag-scroll/dist/index';
//IMG
import Limpeza from '../../assets/image/Limpeza.png'
import Luz from '../../assets/image/Luz.png'
import Torneira from '../../assets/image/Torneira.png'
import Construcao from '../../assets/image/construcao.png'
import Check from '../../assets/image/check.png'



import { db } from "../../../server/firebase";
import { collection, onSnapshot, query, orderBy, updateDoc, doc, addDoc, arrayUnion, deleteDoc, FieldValue } from 'firebase/firestore'
//CONTEXT
import { ContextInfo } from "../../context/ContextInfo";
import { Link, useNavigation } from "react-router-dom";
export default function AllPedidos() {
    const navigate = useNavigation()
    const [Pedido, setPedido] = useState([])
    const pedidoFilter = Pedido.filter((id, index, self) => {
        return index === self.findIndex((o) => o.id === id.id)
    })


    useEffect(() => {
        const Ref_Pedido_Limpeza = collection(db, "Limpeza")
        const queryRef_Limpeza = query(Ref_Pedido_Limpeza, orderBy("created", 'asc'))
        const unsub_Limpeza = onSnapshot(queryRef_Limpeza, (snapshot) => {
            snapshot.forEach((doc) => {
                setPedido((e) => [
                    ...e, {
                        id: doc.id,
                        empreendimento: doc.data().empreendimento,
                        quadra: doc.data().quadra,
                        numero: doc.data().numero,
                        status: doc.data().status,
                        data: doc.data().data,
                        hora: doc.data().hora,
                        pedido: doc.data().pedido,
                        author: doc.data().author,
                        dataConcluido: doc.data().dataConcluido,
                        horaConcluido: doc.data().horaConcluido,
                        cor: doc.data().cor,
                        imagemConcluido: doc.data().imagemConcluido,
                    }
                ])
            })
        })

        const Ref_Pedido_Agua = collection(db, "Agua")
        const queryRef_Agua = query(Ref_Pedido_Agua, orderBy("created", 'asc'))
        const unsub_Agua = onSnapshot(queryRef_Agua, (snapshot) => {
            snapshot.forEach((doc) => {
                setPedido((e) => [
                    ...e, {
                        id: doc.id,
                        empreendimento: doc.data().empreendimento,
                        quadra: doc.data().quadra,
                        numero: doc.data().numero,
                        status: doc.data().status,
                        data: doc.data().data,
                        hora: doc.data().hora,
                        pedido: doc.data().pedido,
                        dataConcluido: doc.data().dataConcluido,
                        horaConcluido: doc.data().horaConcluido,
                        author: doc.data().author,
                        cor: doc.data().cor,
                        imagemConcluido: doc.data().imagemConcluido,
                    }
                ])
            })
        })


        const Ref_Pedido_Energia = collection(db, "Energia")
        const queryRef_Energia = query(Ref_Pedido_Energia, orderBy("created", 'asc'))
        const unsub_Energia = onSnapshot(queryRef_Energia, (snapshot) => {
            snapshot.forEach((doc) => {
                setPedido((e) => [
                    ...e, {
                        id: doc.id,
                        empreendimento: doc.data().empreendimento,
                        quadra: doc.data().quadra,
                        numero: doc.data().numero,
                        status: doc.data().status,
                        data: doc.data().data,
                        hora: doc.data().hora,
                        pedido: doc.data().pedido,
                        dataConcluido: doc.data().dataConcluido,
                        horaConcluido: doc.data().horaConcluido,
                        author: doc.data().author,
                        imagem: doc.data().imagem,
                        cor: doc.data().cor,
                        imagemConcluido: doc.data().imagemConcluido,
                    }
                ])
            })
        })


        const Ref_Pedido_Construcao = collection(db, "Construcao")
        const queryRef_Construcao = query(Ref_Pedido_Construcao, orderBy("created", 'asc'))
        const unsub_Construcao = onSnapshot(queryRef_Construcao, (snapshot) => {
            snapshot.forEach((doc) => {
                setPedido((e) => [
                    ...e, {
                        id: doc.id,
                        empreendimento: doc.data().empreendimento,
                        quadra: doc.data().quadra,
                        numero: doc.data().numero,
                        status: doc.data().status,
                        data: doc.data().data,
                        hora: doc.data().hora,
                        pedido: doc.data().pedido,
                        dataConcluido: doc.data().dataConcluido,
                        horaConcluido: doc.data().horaConcluido,
                        author: doc.data().author,
                        cor: doc.data().cor,
                        imagemConcluido: doc.data().imagemConcluido,
                        observacao: doc.data().observacao,
                    }
                ])
            })
        })
    }, [])


    const { EmpreendimentosAll, setPedidoInfo } = useContext(ContextInfo)
    const [lot, setLot] = useState({
        empreendimento: '',
        quadra: '',
        numero: '',
        status: '',
        pedido: '',
        author: '',
    })
    const pedidoAllFilter = pedidoFilter.filter(item =>
        (!lot.empreendimento || item.empreendimento === lot.empreendimento) &&
        (!lot.quadra || item.quadra === lot.quadra) &&
        (!lot.numero || item.numero === lot.numero) &&
        (!lot.status || item.status === lot.status) &&
        (!lot.pedido || item.pedido === lot.pedido) &&
        (!lot.author || item.author === lot.author)
    )
    const handleInformations = (e, key) => {
        setLot({ ...lot, [key]: e.target.value })
    }
    async function UpdatePedido(e) {
        console.log(e.pedido)
        if (e.pedido == "Limpeza") {
            await updateDoc(doc(db, "Limpeza", e.id), {
                status: "Enviado",
            })

        }
        if (e.pedido == "Água") {
            await updateDoc(doc(db, "Agua", e.id), {
                status: "Enviado",
            })

        }
        if (e.pedido == "Energia") {
            await updateDoc(doc(db, "Energia", e.id), {
                status: "Enviado",
            })

        }
        if (e.pedido == "Construcao") {
            await updateDoc(doc(db, "Construcao", e.id), {
                status: "Enviado",
            })

        }
        window.location.reload()
    }

    //  {pedidoAllFilter.map((item, index) => (

    // console.log(pedidoAllFilter.length)
    // {
    //     Pedido.filter(elementos => elementos.empreendimento === item && elementos["status"] !== "Concluido" && elementos["status"] !== "Enviado").length == 0 ? (<Text></Text>) :
    //     <View style={{ backgroundColor: "#DC2626", borderRadius: 100, marginTop: -20, width: 30, height: 30, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }} >
    //         <Text style={{ color: 'white', fontSize: 11, fontWeight: '700' }}>{Pedido.filter(elementos => elementos.empreendimento === item && elementos["status"] !== "Concluido" && elementos["status"] !== "Enviado").length}</Text>
    //     </View>
    // }


    return (
        <main >
            <Header />
            <section className="flex flex-col items-center ">
                <div className=" w-full pl-2 flex-row justify-center flex">
                    <div>
                        <select value={lot.empreendimento} onChange={(e) => handleInformations(e, 'empreendimento')} className=" bg-transparent border text-white text-center outline-none border-gray-300 text-gray-900 p-2.5   ">
                            <option className=" bg-zinc-700" value="" selected>Empreendimento</option>
                            {EmpreendimentosAll.map((item, index) => (
                                <option className="  bg-zinc-700" key={index} value={item} >{item}</option>
                            ))}
                        </select>
                    </div>

                    <div>
                        <input value={lot.quadra} onChange={(e) => handleInformations(e, 'quadra')} type="text" placeholder="Quadra" className="bg-transparent border text-white border-gray-300  p-[9.4px] text-center outline-none " />
                    </div>
                    <div>
                        <input value={lot.numero} onChange={(e) => handleInformations(e, 'numero')} type="text" placeholder="Numero" className="bg-transparent border text-white border-gray-300  p-[9.4px] text-center outline-none " />
                    </div>
                    <div className=" flex flex-col items-center">

                        <select value={lot.status} onChange={(e) => handleInformations(e, 'status')} className=" bg-transparent border text-white text-center outline-none border-gray-300 text-gray-900 p-2.5   ">
                            <option className=" bg-zinc-700" value="" selected>Status </option>
                            <option className=" bg-zinc-700" value="Solicitado" selected>Solicitado</option>
                            <option className=" bg-zinc-700" value="Iniciando" selected>Iniciando</option>
                            <option className=" bg-zinc-700" value="Concluido" selected>Concluido </option>
                            <option className=" bg-zinc-700" value="Enviado" selected>Mensagem Enviada</option>
                            {/* <option className=" bg-zinc-700" value="Construcao" selected>Lotes com construção</option> */}
                        </select>
                        {
                            pedidoAllFilter.filter(elementos => elementos.status == "Concluido").length != 0 && <h1 className=" w-10 h-10 font-semibold rounded-full flex items-center justify-center bg-red-500 text-white">{pedidoAllFilter.filter(elementos => elementos.status == "Concluido").length}</h1>
                        }
                    </div>
                    <div>
                        <select value={lot.pedido} onChange={(e) => handleInformations(e, 'pedido')} className=" bg-transparent border text-white text-center outline-none border-gray-300 text-gray-900 p-2.5   ">
                            <option className=" bg-zinc-700" value="" selected>Pedido</option>
                            <option className=" bg-zinc-700" value="Limpeza" selected>Limpeza</option>
                            <option className=" bg-zinc-700" value="Água" selected>Agua</option>
                            <option className=" bg-zinc-700" value="Energia" selected>Energia</option>
                            <option className=" bg-zinc-700" value="Construcao">Construções</option>

                        </select>
                    </div>
                    <div>
                        <input value={lot.author} onChange={(e) => handleInformations(e, 'author')} type="text" placeholder="Autor" className="bg-transparent border text-white border-gray-300  p-[9.4px] text-center outline-none " />
                    </div>


                </div>
            </section>
            <section className=" mt-8 px-12 pb-4 grid grid-cols-3 gap-3">
                {pedidoAllFilter.map((item, index) => (
                    <>
                        {item.status !== "Concluido" && item.status !== "Enviado" && (
                            <>
                                <Link
                                    className=" m-auto"
                                    key={index}
                                    to={{ pathname: `/information/${index}` }}
                                    onClick={() => {
                                        setPedidoInfo({
                                            empreendimento: item.empreendimento,
                                            quadra: item.quadra,
                                            numero: item.numero,
                                            status: item.status,
                                            pedido: item.pedido,
                                            author: item.author,
                                            imagem: item.imagem,
                                            imagemConcluido: item.imagemConcluido,
                                            observacao: item.observacao
                                        })
                                    }}>

                                    <div className={`pt-[10px] pl-[10px] pr-[20px] text-black hover:scale-[1.05]  w-[310px] h-[190px] cursor-pointer flex flex-col border-gray-700 rounded-[15px] border  transition-all ${item.status == "Concluido" ? "bg-green-500" : "bg-zinc-100"}`} >
                                        <div className=" flex flex-row  items-center justify-between">
                                            <div className=" bg-[#FFF607] w-[60px] h-[60px] flex items-center justify-center border border-black rounded-full">
                                                {item.pedido == "Limpeza" && (
                                                    <img src={Limpeza} className=" pointer-events-none w-[40px] h-[40px]" />
                                                )}
                                                {item.pedido == "Energia" && (
                                                    <img src={Luz} className=" pointer-events-none w-[40px] h-[40px]" />
                                                )}
                                                {item.pedido == "Água" && (
                                                    <img src={Torneira} className=" pointer-events-none w-[40px] h-[40px]" />
                                                )}
                                                {item.pedido == "Construcao" && (
                                                    <img src={Construcao} className=" pointer-events-none w-[40px] h-[40px]" />
                                                )}

                                            </div>
                                            <h1 className="font-semibold">{item.status}</h1>
                                        </div>
                                        <div className=" flex flex-row items-center justify-between">
                                            <div className=" font-semibold mt-2">
                                                <p>{item.data} - {item.hora}</p>
                                                {item.dataConcluido && (
                                                    <p className="mt-4">{item.dataConcluido} - {item.horaConcluido}</p>
                                                )}
                                            </div>

                                        </div>

                                        <ScrollContainer
                                            horizontal={true}
                                            hideScrollbars={true} // Exibe as barras de rolagem
                                            className="flex pb-1 gap-2 mt-auto opacity-70 ">
                                            <div className={`inline-flex items-center px-2 border border-gray-600 text-[12px] ${item.status == "Concluido" && "bg-gray-600 text-white"}  h-[30px] font-semibold whitespace-nowrap   uppercase rounded-full`}>
                                                <p>{item.empreendimento}</p>
                                            </div>
                                            <div className={`inline-flex items-center px-2 border border-gray-600 text-[12px] ${item.status == "Concluido" && "bg-gray-600 text-white"}  h-[30px] font-semibold whitespace-nowrap   uppercase rounded-full`}>
                                                <p>{item.quadra}</p>
                                            </div>
                                            <div className={`inline-flex items-center px-2 border border-gray-600 text-[12px] ${item.status == "Concluido" && "bg-gray-600 text-white"}  h-[30px] font-semibold whitespace-nowrap   uppercase rounded-full`}>
                                                <p>{item.numero}</p>
                                            </div>
                                            <div className={`inline-flex items-center px-2 border border-gray-600 text-[12px] ${item.status == "Concluido" && "bg-gray-600 text-white"}  h-[30px] font-semibold whitespace-nowrap   uppercase rounded-full`}>
                                                <p>{item.pedido}</p>
                                            </div>
                                            <div className={`inline-flex items-center px-2 border border-gray-600 text-[12px] ${item.status == "Concluido" && "bg-gray-600 text-white"}  h-[30px] font-semibold whitespace-nowrap   uppercase rounded-full`}>
                                                <p>{item.author}</p>
                                            </div>
                                        </ScrollContainer>
                                    </div>
                                </Link >


                            </>
                        )}
                        {lot.status == "Concluido" && (
                            <>
                                <div className=" group group-hover:transition-all group-hover:transition-all hover:flex m-auto">
                                    <Link
                                        className=" "
                                        key={index}
                                        to={{ pathname: `/information/${index}` }}
                                        onClick={() => {
                                            setPedidoInfo({
                                                empreendimento: item.empreendimento,
                                                quadra: item.quadra,
                                                numero: item.numero,
                                                status: item.status,
                                                pedido: item.pedido,
                                                author: item.author,
                                                imagem: item.imagem,
                                                imagemConcluido: item.imagemConcluido,
                                                observacao: item.observacao
                                            })
                                        }}>

                                        <div className={`pt-[10px] pl-[10px] pr-[20px]  text-black hover:scale-[1.05]  w-[310px] h-[190px] cursor-pointer flex flex-col border-gray-700 rounded-[15px] border  transition-all ${item.status == "Concluido" ? "bg-green-500" : "bg-zinc-100"}`} >
                                            <div className=" flex flex-row  items-center justify-between">
                                                <div className=" bg-[#FFF607] w-[60px] h-[60px] flex items-center justify-center border border-black rounded-full">
                                                    {item.pedido == "Limpeza" && (
                                                        <img src={Limpeza} className=" pointer-events-none w-[40px] h-[40px]" />
                                                    )}
                                                    {item.pedido == "Energia" && (
                                                        <img src={Luz} className=" pointer-events-none w-[40px] h-[40px]" />
                                                    )}
                                                    {item.pedido == "Água" && (
                                                        <img src={Torneira} className=" pointer-events-none w-[40px] h-[40px]" />
                                                    )}
                                                    {item.pedido == "Construcao" && (
                                                        <img src={Construcao} className=" pointer-events-none w-[40px] h-[40px]" />
                                                    )}

                                                </div>
                                                <h1 className="font-semibold">{item.status}</h1>
                                            </div>
                                            <div className="  flex flex-row items-center justify-between">
                                                <div className=" font-semibold mt-2 ">
                                                    <p>{item.data} - {item.hora}</p>
                                                    {item.dataConcluido && (
                                                        <p className="mt-4">{item.dataConcluido} - {item.horaConcluido}</p>
                                                    )}
                                                </div>

                                            </div>

                                            <ScrollContainer
                                                horizontal={true}
                                                hideScrollbars={true} // Exibe as barras de rolagem
                                                className="flex pb-1 gap-2 mt-auto opacity-70 ">
                                                <div className={`inline-flex items-center px-2 border border-gray-600 text-[12px] ${item.status == "Concluido" && "bg-gray-600 text-white"}  h-[30px] font-semibold whitespace-nowrap   uppercase rounded-full`}>
                                                    <p>{item.empreendimento}</p>
                                                </div>
                                                <div className={`inline-flex items-center px-2 border border-gray-600 text-[12px] ${item.status == "Concluido" && "bg-gray-600 text-white"}  h-[30px] font-semibold whitespace-nowrap   uppercase rounded-full`}>
                                                    <p>{item.quadra}</p>
                                                </div>
                                                <div className={`inline-flex items-center px-2 border border-gray-600 text-[12px] ${item.status == "Concluido" && "bg-gray-600 text-white"}  h-[30px] font-semibold whitespace-nowrap   uppercase rounded-full`}>
                                                    <p>{item.numero}</p>
                                                </div>
                                                <div className={`inline-flex items-center px-2 border border-gray-600 text-[12px] ${item.status == "Concluido" && "bg-gray-600 text-white"}  h-[30px] font-semibold whitespace-nowrap   uppercase rounded-full`}>
                                                    <p>{item.pedido}</p>
                                                </div>
                                                <div className={`inline-flex items-center px-2 border border-gray-600 text-[12px] ${item.status == "Concluido" && "bg-gray-600 text-white"}  h-[30px] font-semibold whitespace-nowrap   uppercase rounded-full`}>
                                                    <p>{item.author}</p>
                                                </div>
                                            </ScrollContainer>
                                        </div>
                                    </Link >
                                    <button onClick={() => UpdatePedido(item)} className=" justify-center py-[4px] w-[120px] gap-2   group-hover:flex hidden  items-center bg-blue-400 m-auto rounded-[10px] ml-2">
                                        <h1>Enviado</h1>
                                        <img src={Check} className="w-[30px] h-[30px]" />
                                    </button>

                                </div>
                            </>
                        )}

                        {lot.status == "Enviado" && item.pedido !== "Construcao" && (
                            <>
                                <div className=" group group-hover:transition-all group-hover:transition-all hover:flex m-auto">
                                    <Link
                                        className=" "
                                        key={index}
                                        to={{ pathname: `/information/${index}` }}
                                        onClick={() => {
                                            setPedidoInfo({
                                                empreendimento: item.empreendimento,
                                                quadra: item.quadra,
                                                numero: item.numero,
                                                status: item.status,
                                                pedido: item.pedido,
                                                author: item.author,
                                                imagem: item.imagem,
                                                imagemConcluido: item.imagemConcluido,
                                                observacao: item.observacao
                                            })
                                        }}>
                                            

                                        <div className={`pt-[10px] pl-[10px] pr-[20px]  text-white hover:scale-[1.05]  w-[310px] h-[190px] cursor-pointer flex flex-col border-gray-700 rounded-[15px] border  transition-all bg-blue-500 `} >
                                            <div className=" flex flex-row  items-center justify-between">
                                                <div className=" bg-[#FFF607] w-[60px] h-[60px] flex items-center justify-center border border-black rounded-full">
                                                    {item.pedido == "Limpeza" && (
                                                        <img src={Limpeza} className=" pointer-events-none w-[40px] h-[40px]" />
                                                    )}
                                                    {item.pedido == "Energia" && (
                                                        <img src={Luz} className=" pointer-events-none w-[40px] h-[40px]" />
                                                    )}
                                                    {item.pedido == "Água" && (
                                                        <img src={Torneira} className=" pointer-events-none w-[40px] h-[40px]" />
                                                    )}
                                                    {item.pedido == "Construcao" && (
                                                        <img src={Construcao} className=" pointer-events-none w-[40px] h-[40px]" />
                                                    )}

                                                </div>
                                                <h1 className="font-semibold">{item.status}</h1>
                                            </div>
                                            <div className="  flex flex-row items-center justify-between">
                                                <div className=" font-semibold mt-2 ">
                                                    <p>{item.data} - {item.hora}</p>
                                                    {item.dataConcluido && (
                                                        <p className="mt-4">{item.dataConcluido} - {item.horaConcluido}</p>
                                                    )}
                                                </div>

                                            </div>

                                            <ScrollContainer
                                                horizontal={true}
                                                hideScrollbars={true} // Exibe as barras de rolagem
                                                className="flex pb-1 gap-2 mt-auto opacity-70 ">
                                                <div className={`inline-flex items-center px-2 border border-gray-200 text-[12px]  h-[30px] font-semibold whitespace-nowrap   uppercase rounded-full`}>
                                                    <p>{item.empreendimento}</p>
                                                </div>
                                                <div className={`inline-flex items-center px-2 border border-gray-200 text-[12px]  h-[30px] font-semibold whitespace-nowrap   uppercase rounded-full`}>
                                                    <p>{item.quadra}</p>
                                                </div>
                                                <div className={`inline-flex items-center px-2 border border-gray-200 text-[12px]  h-[30px] font-semibold whitespace-nowrap   uppercase rounded-full`}>
                                                    <p>{item.numero}</p>
                                                </div>
                                                <div className={`inline-flex items-center px-2 border border-gray-200 text-[12px]  h-[30px] font-semibold whitespace-nowrap   uppercase rounded-full`}>
                                                    <p>{item.pedido}</p>
                                                </div>
                                                <div className={`inline-flex items-center px-2 border border-gray-200 text-[12px]  h-[30px] font-semibold whitespace-nowrap   uppercase rounded-full`}>
                                                    <p>{item.author}</p>
                                                </div>
                                            </ScrollContainer>
                                        </div>
                                    </Link >
                                </div>
                            </>
                        )}


                        {lot.pedido == "Construcao" && lot.status == "Enviado" && (
                            <>
                                <div className=" group group-hover:transition-all group-hover:transition-all hover:flex m-auto">
                                    <Link
                                        className=" "
                                        key={index}
                                        to={{ pathname: `/information/${index}` }}
                                        onClick={() => {
                                            setPedidoInfo({
                                                empreendimento: item.empreendimento,
                                                quadra: item.quadra,
                                                numero: item.numero,
                                                status: item.status,
                                                pedido: item.pedido,
                                                author: item.author,
                                                imagem: item.imagem,
                                                imagemConcluido: item.imagemConcluido,
                                                observacao: item.observacao
                                            })
                                        }}>

                                        <div className={`pt-[10px] pl-[10px] pr-[20px]  text-white hover:scale-[1.05]  w-[310px] h-[190px] cursor-pointer flex flex-col border-gray-700 rounded-[15px] border  transition-all bg-blue-500 `} >
                                            <div className=" flex flex-row  items-center justify-between">
                                                <div className=" bg-[#FFF607] w-[60px] h-[60px] flex items-center justify-center border border-black rounded-full">
                                                    {item.pedido == "Limpeza" && (
                                                        <img src={Limpeza} className=" pointer-events-none w-[40px] h-[40px]" />
                                                    )}
                                                    {item.pedido == "Energia" && (
                                                        <img src={Luz} className=" pointer-events-none w-[40px] h-[40px]" />
                                                    )}
                                                    {item.pedido == "Água" && (
                                                        <img src={Torneira} className=" pointer-events-none w-[40px] h-[40px]" />
                                                    )}
                                                    {item.pedido == "Construcao" && (
                                                        <img src={Construcao} className=" pointer-events-none w-[40px] h-[40px]" />
                                                    )}

                                                </div>
                                                <h1 className="font-semibold">{item.status}</h1>
                                            </div>
                                            <div className="  flex flex-row items-center justify-between">
                                                <div className=" font-semibold mt-2 ">
                                                    <p>{item.data} - {item.hora}</p>
                                                    {item.dataConcluido && (
                                                        <p className="mt-4">{item.dataConcluido} - {item.horaConcluido}</p>
                                                    )}
                                                </div>

                                            </div>

                                            <ScrollContainer
                                                horizontal={true}
                                                hideScrollbars={true} // Exibe as barras de rolagem
                                                className="flex pb-1 gap-2 mt-auto opacity-70 ">
                                                <div className={`inline-flex items-center px-2 border border-gray-200 text-[12px]  h-[30px] font-semibold whitespace-nowrap   uppercase rounded-full`}>
                                                    <p>{item.empreendimento}</p>
                                                </div>
                                                <div className={`inline-flex items-center px-2 border border-gray-200 text-[12px]  h-[30px] font-semibold whitespace-nowrap   uppercase rounded-full`}>
                                                    <p>{item.quadra}</p>
                                                </div>
                                                <div className={`inline-flex items-center px-2 border border-gray-200 text-[12px]  h-[30px] font-semibold whitespace-nowrap   uppercase rounded-full`}>
                                                    <p>{item.numero}</p>
                                                </div>
                                                <div className={`inline-flex items-center px-2 border border-gray-200 text-[12px]  h-[30px] font-semibold whitespace-nowrap   uppercase rounded-full`}>
                                                    <p>{item.pedido}</p>
                                                </div>
                                                <div className={`inline-flex items-center px-2 border border-gray-200 text-[12px]  h-[30px] font-semibold whitespace-nowrap   uppercase rounded-full`}>
                                                    <p>{item.author}</p>
                                                </div>
                                            </ScrollContainer>
                                        </div>
                                    </Link >
                                </div>
                            </>
                        )}

                    </>
                ))}
            </section>

        </main >
    )
}
