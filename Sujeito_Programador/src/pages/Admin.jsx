import React, { useEffect, useState } from 'react'
//COMPONENTS
import { Heade } from '../components/Header/Heade'
import { Input } from '../components/Input/Input'
import { Logo } from '../components/Logo/Logo'

//ICONS
import { MdAddLink } from 'react-icons/md'
import { FiTrash2 } from 'react-icons/fi'


//STYLES INPUT
const LabelStyle = "text-white mt-2 mb-3 font-medium "

//DATA BASE
import { db } from '../services/Firebase'

import {
  addDoc,
  collection,
  onSnapshot,
  query,
  orderBy,
  doc,
  deleteDoc
} from 'firebase/firestore'

import { toast } from 'react-toastify'

export const Admin = () => {
  const [nameInput, setNameInput] = useState("")
  const [urlInput, setUrlInput] = useState("")
  const [backgroundColorInput, setBackgroundColorInput] = useState("#f1f1f1")
  const [textColorInput, setTextColorInput] = useState("#121212")

  //LINKS
  const [links, setLinks] =useState([])

  useEffect(()=>{
    const linksRef = collection(db,'links')
    const queryRef = query(linksRef,orderBy("created","asc"))
    const unsub = onSnapshot(queryRef,(snaphot)=>{
      let list = []
      snaphot.forEach((doc)=>{
        list.push({
          id:doc.id,
          name: doc.data().name,
          url:doc.data().url,
          bg:doc.data().bg,
          color:doc.data().color,

        })
      })
      setLinks(list)
    })
  },[])


  //ADD LINK IN DATABASE
  async function handleRegister(e) {
    e.preventDefault()

    if (nameInput === '' || urlInput === "") {
      toast.warn("Preencha todos os campos")
      return
    }

    addDoc(collection(db, "links"), {
      name: nameInput,
      url: urlInput,
      bg: backgroundColorInput,
      color: textColorInput,
      created: new Date()
    })
      .then(()=>{
        setNameInput("")
        setUrlInput("")
        toast.success("Link Registrado com Sucesso")
      })
      .catch((error)=>{
        toast.error("Erro ao Registrar")
        console.log(error)
      })

  }

  //DELETE LINS
 async function handleDeleteLink(id){
    const docRef = doc(db,"links", id)
    await deleteDoc(docRef)
  }

  return (
    <div className='flex items-center pb-4 flex-col min-h-full px-[10px]'>
      <Heade />
      <Logo />
      <form className='flex  flex-col w-full max-w-[600px]' onSubmit={handleRegister}>
        <label className={`${LabelStyle}`}>Nome do Link</label>
        <Input placeholder="Nome do Link" value={nameInput} onChange={(e) => setNameInput(e.target.value)} />

        <label className={`${LabelStyle}`}>Url do link</label>
        <Input type="url" placeholder="Digite a url"
          value={urlInput} onChange={(e) => setUrlInput(e.target.value)} />

        <section className='flex my-3 gap-6'>
          <div>
            <label className={`${LabelStyle} mr-3`} >Fundo do link</label>
            <input type="color"
              value={backgroundColorInput} onChange={(e) => setBackgroundColorInput(e.target.value)} />
          </div>
          <div>
            <label className={`${LabelStyle} mr-3`} >cor do link</label>
            <input type="color"
              value={textColorInput} onChange={(e) => setTextColorInput(e.target.value)} />
          </div>
        </section>

        {nameInput !== "" &&
          <div className='m-0 mb-[28px] p-1 border-[1.5px] border-solid border-[rgba(255,255,255,0.5)] rounded flex items-center justify-center flex-col'>
            <label className={`${LabelStyle}`}>Veja como esta ficando 👇</label>
            <article style={{ backgroundColor: backgroundColorInput }} className={` w-[90%] max-w-[600px] flex flex-row items-center mt-2 mb-2 rounded px-2 py-2 justify-between`}>

              <p style={{ color: textColorInput }}>{nameInput}</p>

            </article>
          </div>
        }



        <button className='bg-blue-600 py-[6px] text-white font-medium rounded flex items-center justify-center gap-2' type='submit'>Cadastrar
          <MdAddLink size={24} color="#fff" />
        </button>

      </form>

      <h2 className='text-white mt-7 mb-4'>Meus Links</h2>

      {links.map((item,index)=>(
        <article key={index} style={{backgroundColor:item.bg}} className={` w-[90%] max-w-[600px] flex flex-row items-center mb-2 rounded px-2 py-4  justify-between`}>
        <p style={{ color: item.color }}>{item.name}</p>
        <div>
          <button className='border-[1px] border-[white] border-dashed bg-black py-1 px-2 rounded-sm' onClick={()=>handleDeleteLink(item.id)}>
            <FiTrash2 size={18} color='#fff' />
          </button>
        </div>
      </article>
      ))}
    </div>
  )
}
