import React, { useEffect, useState } from 'react'
import { Heade } from '../components/Header/Heade'
import { Input } from '../components/Input/Input'
import { MdAddLink } from 'react-icons/md'
import { toast } from 'react-toastify'
import { db } from '../services/Firebase'

import {
    setDoc,
    doc,
    getDoc
} from 'firebase/firestore'
export const Networks = () => {

    const LabelStyle = "text-white mt-2 mb-3 font-medium "

    const [facebook, setFacebook] = useState("")
    const [instagram, setInstagram] = useState("")
    const [youtube, setYoutube] = useState("")

    useEffect(() => {
        function loadLinks() {
            const docRef = doc(db, "social", "link")
            getDoc(docRef)
                .then((snapshot) => {
                    if (snapshot.data() !== undefined) {
                        setFacebook(snapshot.data().facebook)
                        setInstagram(snapshot.data().instagram)
                        setYoutube(snapshot.data().youtube)
                    }

                })
        }
        loadLinks()
    }, [])


    //SAVE SOCIAL MEDIA
    function handleSabe(e) {
        e.preventDefault()
        setDoc(doc(db, "social", "link"), {
            facebook: facebook,
            instagram: instagram,
            youtube: youtube
        }).then(() => {
            toast.success("Social Midias adicionados com Sucesso")
        })
            .catch((error) => {
                toast.error(`[ERROR] ${error}`)
            })
    }
    return (
        <div className='flex items-center pb-4 flex-col min-h-full px-[10px]'>
            <Heade />
            <h1 className='text-white mt-[20px] text-[30px]'>Sua redes socias</h1>
            <form
                onSubmit={handleSabe}
                className='flex  flex-col w-full max-w-[600px]'>
                <label className={`${LabelStyle}`}>Link do facebook</label>
                <Input placeholder="Digite a URL do facebook"
                    value={facebook} onChange={(e) => setFacebook(e.target.value)} />

                <label className={`${LabelStyle}`}>Link do instagram</label>
                <Input placeholder="Digite a URL do instagram"
                    value={instagram} onChange={(e) => setInstagram(e.target.value)} />
                <label className={`${LabelStyle}`}>Link do youtube</label>
                <Input placeholder="Digite a URL do youtube"
                    value={youtube} onChange={(e) => setYoutube(e.target.value)} />

                <button className='bg-blue-600 py-[6px] text-white font-medium rounded flex items-center justify-center gap-2' type='submit'>Salvar Links
                    <MdAddLink size={24} color="#fff" />
                </button>
            </form>
        </div>
    )
}
