import { useContext, useEffect, useState } from "react";

//PERSONALIT ALERT
import { toast } from 'react-toastify'

//COMPONENTS
import Header from "../../components/Header";
import { Pedido } from "../../components/Pedido";

//ICONS
import { PiCircleNotchBold } from "react-icons/pi";

//CONTEXT
import { ContextInfo } from "../../context/ContextInfo";
//DB
import { auth, db, storage } from "../../../server/firebase";
import { addDoc, collection, onSnapshot, query, orderBy, } from 'firebase/firestore'
import { ref, getDownloadURL, uploadBytes } from 'firebase/storage'
import { Link } from "react-router-dom";

export default function Home() {
  const [pedidoAgua, setPedidoAgua] = useState([])
  const [pedidoEnergia, setPedidoEnergia] = useState([])
  const [pedidoLimpeza, setPedidoLimpeza] = useState([])
  const [pedidoConstrucao, setPedidoConstrucao] = useState([])
  const [ButtonSpiner, setButtonSpiner] = useState(false)
  const [imagemEnergia, setImagemEnergia] = useState([])
  const [imagemEnergiaURL, setImagemEnergiaURL] = useState([])

  useEffect(() => {
    auth.onAuthStateChanged(user => setLot({ ...lot, author: user.email }))

    const Ref_Pedido_Limpeza = collection(db, "Limpeza")
    const queryRef_Limpeza = query(Ref_Pedido_Limpeza, orderBy("created", 'asc'))
    const unsub_Limpeza = onSnapshot(queryRef_Limpeza, (snapshot) => {

      const listLimpeza = []
      snapshot.forEach((doc) => {
        listLimpeza.push({
          id: doc.id,
          empreendimento: doc.data().empreendimento,
          quadra: doc.data().quadra,
          numero: doc.data().numero,
          status: doc.data().status,
          data: doc.data().data,
          hora: doc.data().hora,
          pedido: doc.data().pedido,
          author: doc.data().author,
          cor: doc.data().cor,
          dataConcluido: doc.data().dataConcluido,
          horaConcluido: doc.data().horaConcluido,
          imagemConcluido: doc.data().imagemConcluido,
        })
      })
      setPedidoLimpeza(listLimpeza)
    })

    const Ref_Pedido_Agua = collection(db, "Agua")
    const queryRef_Agua = query(Ref_Pedido_Agua, orderBy("created", 'asc'))
    const unsub_Agua = onSnapshot(queryRef_Agua, (snapshot) => {
      const listAgua = []
      snapshot.forEach((doc) => {
        listAgua.push({
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
        })
      })
      setPedidoAgua(listAgua)
    })


    const Ref_Pedido_Energia = collection(db, "Energia")
    const queryRef_Energia = query(Ref_Pedido_Energia, orderBy("created", 'asc'))
    const unsub_Energia = onSnapshot(queryRef_Energia, (snapshot) => {
      const listEnergia = []
      snapshot.forEach((doc) => {
        listEnergia.push({
          id: doc.id,
          empreendimento: doc.data().empreendimento,
          quadra: doc.data().quadra,
          numero: doc.data().numero,
          status: doc.data().status,
          data: doc.data().data,
          hora: doc.data().hora,
          pedido: doc.data().pedido,
          author: doc.data().author,
          cor: doc.data().cor,
          dataConcluido: doc.data().dataConcluido,
          horaConcluido: doc.data().horaConcluido,
          imagemConcluido: doc.data().imagemConcluido,
          imagem: doc.data().imagem,
        })
      })
      setPedidoEnergia(listEnergia)
    })


    const Ref_Pedido_Construcao = collection(db, "Construcao")
    const queryRef_Construcao = query(Ref_Pedido_Construcao, orderBy("created", 'asc'))
    const unsub_Construcao = onSnapshot(queryRef_Construcao, (snapshot) => {
      const listConstrucao = []
      snapshot.forEach((doc) => {
        listConstrucao.push({
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
          observacao: doc.data().observacao,
        })
      })
      setPedidoConstrucao(listConstrucao)
    })

  }, [])


  const dataAtual = new Date()
  const { EmpreendimentosAll, setUser } = useContext(ContextInfo)
  const [lot, setLot] = useState({
    key: '',
    empreendimento: '',
    quadra: '',
    numero: '',
    status: 'Solicitado',
    pedido: '',
    author: '',
    video: '',
    observacao: '',

  })
  const handleInformations = (e, key) => {
    setLot({ ...lot, [key]: e.target.value })
  }

  async function handleRegister(e) {
    e.preventDefault()
    if (lot.pedido == "Limpeza") {
      setButtonSpiner(true)
      let Verif_Solicitacao = false

      pedidoLimpeza.map((item) => {
        if (item.empreendimento == lot.empreendimento && item.quadra == lot.quadra.toLocaleUpperCase() && item.numero == lot.numero.toLocaleUpperCase()) {
          Verif_Solicitacao = true
          return
        }
      })

      if (lot.empreendimento == "" || lot.quadra == "" || lot.numero == "") {
        toast.error("Preencha todos os campos obrigatorios")
        setButtonSpiner(false)
        return
      }

      if (Verif_Solicitacao == true) {
        toast.warning("Esse Pedido já foi solicitada")
        Verif_Solicitacao = false
        setButtonSpiner(false)
        return
      }

      if (Verif_Solicitacao == false) {
        addDoc(collection(db, "Limpeza"), {
          empreendimento: lot.empreendimento,
          quadra: lot.quadra.toLocaleUpperCase(),
          numero: lot.numero.toLocaleUpperCase(),
          status: lot.status,
          data: dataAtual.toLocaleDateString(),
          hora: dataAtual.toLocaleTimeString(),
          pedido: lot.pedido,
          author: lot.author,
          imagemConcluido: [],
          dataConcluido: "",
          horaConcluido: "",
          cor: "red",
          created: new Date(),
        }).then(() => {
          setLot({ ...lot, empreendimento: "", quadra: "", numero: "" })
          setButtonSpiner(false)
          toast.success("Pedido Enviado")

        })
          .catch(() => {
            toast.error("[ERROR] Não foi Possível Registrar")
            setButtonSpiner(false)

          })

      }
    }


    if (lot.pedido == "Água") {
      setButtonSpiner(true)

      let Verif_Solicitacao = false

      pedidoAgua.map((item) => {
        if (item.empreendimento == lot.empreendimento && item.quadra == lot.quadra.toLocaleUpperCase() && item.numero == lot.numero.toLocaleUpperCase()) {
          Verif_Solicitacao = true
          return
        }
      })

      if (lot.empreendimento == "" || lot.quadra == "" || lot.numero == "") {
        toast.error("Preencha todos os campos obrigatórios")
        setButtonSpiner(false)
        return
      }

      if (Verif_Solicitacao == true) {
        toast.warning("Esse Pedido já foi solicitada")
        Verif_Solicitacao = false
        setButtonSpiner(false)
        return
      }

      if (Verif_Solicitacao == false) {
        addDoc(collection(db, "Agua"), {
          empreendimento: lot.empreendimento,
          quadra: lot.quadra.toLocaleUpperCase(),
          numero: lot.numero.toLocaleUpperCase(),
          status: lot.status,
          data: dataAtual.toLocaleDateString(),
          hora: dataAtual.toLocaleTimeString(),
          pedido: lot.pedido,
          author: lot.author,
          imagemConcluido: [],
          dataConcluido: "",
          horaConcluido: "",
          cor: "red",
          created: new Date(),
        }).then(() => {
          setLot({ ...lot, empreendimento: "", quadra: "", numero: "" })
          setButtonSpiner(false)
          toast.success("Pedido Enviado")
        })
          .catch(() => {
            toast.error("[ERROR] Não foi Possível Registrar")
            setButtonSpiner(false)

          })

      }
    }


    if (lot.pedido == "Energia") {
      setButtonSpiner(true)
      let Verif_Solicitacao = false
      const arrayImage = Object.keys(imagemEnergia).map(chave => imagemEnergia[chave])
      let novoArrayImage = [];
      if (lot.empreendimento == "" || lot.quadra == "" || lot.numero == "" || imagemEnergia == "") {
        toast.error("Preencha todos os campos obrigatórios")
        setButtonSpiner(false)
        return
      }
      pedidoEnergia.map((item) => {
        if (item.empreendimento == lot.empreendimento && item.quadra == lot.quadra.toLocaleUpperCase() && item.numero == lot.numero.toLocaleUpperCase()) {
          Verif_Solicitacao = true
          return
        }
      })

      if (Verif_Solicitacao == true) {
        toast.warning("Esse Pedido já foi solicitada")
        Verif_Solicitacao = false
        setButtonSpiner(false)
        return
      }
      if (imagemEnergiaURL.length == 0) {
        arrayImage.forEach(async (i, index) => {
          const storageRef = ref(storage, `images/${i.name}_${dataAtual.getFullYear()}_${dataAtual.getMonth() + 1}_${dataAtual.getDate()}_${dataAtual.getHours()}_${dataAtual.getMinutes()}_${dataAtual.getSeconds()}_${dataAtual.getMilliseconds()}`)
          await uploadBytes(storageRef, i).then(
            async () => {
              await getDownloadURL(storageRef).then((url) => novoArrayImage.push(url))
              toast.info(`${index + 1} Enviado imagem`)
            }
          )
        })
        setImagemEnergiaURL(novoArrayImage)
      }
      if (imagemEnergiaURL.length !== 0) {
        if (Verif_Solicitacao == false) {
          addDoc(collection(db, "Energia"), {
            empreendimento: lot.empreendimento,
            quadra: lot.quadra.toLocaleUpperCase(),
            numero: lot.numero.toLocaleUpperCase(),
            status: lot.status,
            data: dataAtual.toLocaleDateString(),
            hora: dataAtual.toLocaleTimeString(),
            pedido: lot.pedido,
            author: lot.author,
            imagem: imagemEnergiaURL,
            imagemConcluido: [],
            dataConcluido: "",
            horaConcluido: "",
            cor: "red",
            created: new Date(),
          }).then(() => {
            toast.success("Pedido Enviado")
            setButtonSpiner(false)
            window.location.reload()
          })
            .catch(() => {
              toast.error("[ERROR] Não foi Possível Registrar")
              setButtonSpiner(false)
            })
        }
      }
    }
     
    if (lot.pedido == "Construcao") {
      console.log("Construção")
      setButtonSpiner(true)
      let Verif_Solicitacao = false
      pedidoConstrucao.map((item) => {
        if (item.empreendimento == lot.empreendimento && item.quadra == lot.quadra.toLocaleUpperCase() && item.numero == lot.numero.toLocaleUpperCase()) {
          Verif_Solicitacao = true
          return
        }
      })

      if (lot.empreendimento == "" || lot.quadra == "" || lot.numero == "") {
        toast.error("Preencha todos os campos obrigatórios")
        setButtonSpiner(false)
        return
      }

      if (Verif_Solicitacao == true) {
        toast.warning("Esse Pedido já foi solicitada")
        Verif_Solicitacao = false
        setButtonSpiner(false)
        return
      }

      if (Verif_Solicitacao == false) {
        addDoc(collection(db, "Construcao"), {
          empreendimento: lot.empreendimento,
          quadra: lot.quadra.toLocaleUpperCase(),
          numero: lot.numero.toLocaleUpperCase(),
          status: lot.status,
          data: dataAtual.toLocaleDateString(),
          hora: dataAtual.toLocaleTimeString(),
          pedido: lot.pedido,
          author: lot.author,
          observacao: lot.observacao,
          imagemConcluido: [],
          dataConcluido: "",
          horaConcluido: "",
          cor: "red",
          created: new Date(),
        }).then(() => {
          setLot({ ...lot, empreendimento: "", quadra: "", numero: "",observacao:"" })
          setButtonSpiner(false)
          toast.success("Pedido Enviado")
        })
          .catch(() => {
            toast.error("[ERROR] Não foi Possível Registrar")
            setButtonSpiner(false)

          })

      }
    }
  }
  setUser(lot.author)


  return (
    <main>
      <Header>
        <Link to="/All-pedidos" className=' text-[1.2rem] hover:text-[#FFF607]'>Todas as Solicitações</Link>
        {lot.author == "ikaroassis08@gmail.com" && (
          <Link to='/adminD6$pp9@XfhFSqMhjjrGeH8MKkvVKu&V$WXhaT!4&'>Admin</Link>

        )}
      </Header>
      <section className="flex flex-col items-center justify-center">
        <form className='w-[400px]' onSubmit={handleRegister} >
          <h1 className='text-white text-[1.4rem] text-center bg-black rounded p-2 mt-8'>Pendencia Externa</h1>
          <div className='flex text-white'>
            <h1 className='border w-full border-black px-4 py-2 text-[1.1rem]'>Solicitação</h1>
            <select className=' uppercase outline-none text-black w-full font-medium text-center border-black border-t-[2px]'
              value={lot.pedido}
              onChange={(e) => handleInformations(e, 'pedido')}>
              <option value=""></option>
              <option value="Limpeza">Limpeza</option>
              <option value="Água">Água</option>
              <option value="Energia">Energia</option>
              <option value="Construcao">Construções</option>

            </select>
          </div>
          <div className='flex text-white'>
            <h1 className='border w-full border-black px-4 py-2 text-[1.1rem]'>Empreendimento</h1>
            <select className=' uppercase outline-none text-black w-full font-medium text-center border-black border-t-[2px]'
              value={lot.empreendimento}
              onChange={(e) => handleInformations(e, 'empreendimento')}>
              <option value=""></option>
              {EmpreendimentosAll.map((item, index) => (
                <option key={index} value={item}>{item}</option>
              ))}
            </select>
          </div>

          <div className='flex text-white'>
            <h1 className='border w-full border-black px-4 py-2 text-[1.1rem]'>Quadra</h1>
            <input className=' uppercase outline-none text-black w-full font-medium text-center border-black border-t-[2px]'
              type="text" value={lot.quadra}
              onChange={(e) => handleInformations(e, 'quadra')} />
          </div>

          <div className='flex text-white'>
            <h1 className='border w-full border-black px-4 py-2 text-[1.1rem]'>Lote</h1>
            <input className=' outline-none text-black w-full font-medium text-center border-black border-y-[2px]'
              type="text" value={lot.numero}
              onChange={(e) => handleInformations(e, 'numero')} />
          </div>



          {lot.pedido == "Energia" && (
            <div className=" h-[30px] cursor-pointer rounded  mb-4">
              <input type='file' multiple accept='image/*' className="text-white" id="dropzone-file" onChange={(e) => setImagemEnergia(e.target.files)} />
            </div>
          )}

          {lot.pedido == "Construcao" && (
            <div className='flex text-white'>
              <h1 className='border w-full border-black px-4 py-2 text-[1.1rem]'>Observações</h1>
              <input className=' outline-none text-black w-full font-medium text-center border-black border-y-[2px]'
                type="text" value={lot.observacao}
                onChange={(e) => handleInformations(e, 'observacao')} />
            </div>
          )}

          {ButtonSpiner == false ? (
            <button className='bg-[#27272A] text-white border border-black w-full py-2 text-[1.1rem] font-bold' >Enviar</button>
          ) : (
            <button className='bg-[#27272A] text-white border border-black w-full py-3 text-[1.1rem] items-center justify-center flex' ><PiCircleNotchBold className=' animate-spin' /></button>

          )}


        </form>
      </section >

      {lot.empreendimento !== "" ? (
        <Pedido empreendimento={lot.empreendimento} quadra={lot.quadra} numero={lot.numero} status={lot.status} pedido={lot.pedido} />
      ) :
        (<div></div>)
      }
    </main>
  )
}
