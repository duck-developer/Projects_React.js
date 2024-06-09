import Logo from '../../assets/image/Logo.jpg'
import { Link } from 'react-router-dom'
//ICON
import { BiLogOut } from 'react-icons/bi'
import { auth } from '../../../server/firebase'
import { signOut } from 'firebase/auth'
import { useContext } from 'react'

export default function Header({children}) {


  async function handleLogOut() {
    await signOut(auth)
  }

  return (
    <header className='flex  py-3 px-[5.6rem] justify-between bg-[#27272A] text-white w-full'>
      <Link to="/home">
        <img src={Logo} className=' cursor-pointer rounded-full w-[60px] border-white border-[2px]' />
      </Link>
      <ul className='flex justify-center items-center gap-10'>
        {children}
       
      </ul>
      <button onClick={handleLogOut} >
        <BiLogOut className='cursor-pointer ' size={38} />
      </button>


    </header>
  )
}
