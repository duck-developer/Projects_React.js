import React from 'react'
import { Link } from 'react-router-dom'

import styles from './Header.module.css'
//ICONS
import {BiLogOut} from 'react-icons/bi'

//DATA
import {auth} from '../../services/Firebase'
import { signOut } from 'firebase/auth'



export const Heade = () => {

    //LOGN OUT
   async function HandleLogout(){
        await signOut(auth)
    }
  return (
    <header className='w-full max-w-[720px] mt-4 px-4'>
        <nav className='w-full bg-white h-[48px] flex items-center rounded'>

            <button
            onClick={HandleLogout}
             className=' border-none bg-transparent mr-6 ml-2'>
                <BiLogOut size={28} color="#db2629"/>
            </button>
            <Link className={`${styles.Link} mr-4 text-[#21242d] hover:text-[#eda617]`}  to='/admin'>
                Links
            </Link>
            <Link className={`${styles.Link} mr-4 text-[#21242d] hover:text-[#eda617]`}  to='/admin/social'>
                Redes sociais
            </Link>
        </nav>
    </header>
  )
}
