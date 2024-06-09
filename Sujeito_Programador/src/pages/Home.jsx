import React, { useEffect, useState } from 'react'
import { Social } from '../components/Social/Social'

import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'

//DATABASE
import { db } from '../services/Firebase'
import { getDocs, collection, orderBy, query, doc, getDoc } from 'firebase/firestore'
export const Home = () => {

    const [links, setLinks] = useState([])
    const [socialLinks, setSocialLinks] = useState({})
    useEffect(() => {
        function loadLinks() {
            const linksRef = collection(db, "links")
            const queryRef = query(linksRef, orderBy("created", "asc"))
            getDocs(queryRef)
                .then((snaphot) => {
                    let Lista = []

                    snaphot.forEach((doc) => {
                        Lista.push({
                            id: doc.id,
                            name: doc.data().name,
                            url: doc.data().url,
                            bg: doc.data().bg,
                            color: doc.data().color

                        })
                    })
                    console.log(Lista)
                    setLinks(Lista)

                })
        }
        loadLinks()

    }, [])

    useEffect(() => {

        function loadSocialLinks() {
            const doctRef = doc(db, "social", "link")
            getDoc(doctRef)
                .then((snaphot) => {
                    if (snaphot.data() !== undefined) {
                        setSocialLinks({
                            facebook: snaphot.data().facebook,
                            instagram: snaphot.data().instagram,
                            youtube: snaphot.data().youtube
                        })

                    }

                })

        }
        loadSocialLinks()

    }, [])
    return (
        <div className='flex flex-col w-full py-4 items-center justify-center'>
            <h1 className=' mb-4 text-white text-[28px] pt-[94px] md:text-[44px] text-center ' >Sujeiro Programador</h1>
            <span className='text-white mb-3'>Beja meus links 👇</span>

            <main className='flex flex-col max-w-[600px] w-[90%] text-center'>
                {links.map((item) => (
                    <section key={item.id} style={{ backgroundColor: item.bg }} className=' w-full mb-4 py-2 select-none rounded hover:scale-105 transition-all'>
                        <a href={item.url} target="_blank">
                            <p style={{ color: item.color }} className='text-[14px] sm:text-[18px] leading-[150%]'>{item.name}</p>
                        </a>
                    </section>
                ))}

                {links.length !== 0 && Object.keys(socialLinks).length > 0 && (
                    <footer className='flex gap-4 justify-center my-4'>
                        <Social url={socialLinks?.facebook}>
                            <FaInstagram size={35} color="#fff" />
                        </Social>
                        <Social url={socialLinks?.instagram}>
                            <FaGithub size={35} color="#fff" />
                        </Social>
                        <Social url={socialLinks?.youtube}>
                            <FaLinkedin size={35} color="#fff" />
                        </Social>

                    </footer>
                )}




            </main>

        </div>
    )
}
