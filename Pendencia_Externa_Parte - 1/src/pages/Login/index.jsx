import { useContext, useEffect, useState } from 'react'

//IMAGE
import Logo from '../../assets/image/Logo.jpg'
//COMPONENTS
import { Input } from '../../components/Input/index'
//FIREBASE
import { auth } from '../../../server/firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'

import { toast } from 'react-toastify'
import { PiCircleNotchBold } from "react-icons/pi";

//NAVIGATE
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
export default function Login() {
  const [email, setEmail] = useState("ikaroassis08@gmail.com")
  const [senha, setSenha] = useState("ikaroass")
  const [ButtonSpiner, setButtonSpiner] = useState(false)

  //ROUTES
  const navigate = useNavigate()
 async function handleLogin(e) {
    e.preventDefault()

    const api22 = axios.create({
      baseURL: 'http://localhost:3333/users'
    })

    await api22.get('/')
      .then(response => {
        console.log('Dados da API:', response.data);
      })
      .catch(error => {
        console.error('Erro ao fazer requisição:', error);
      });

    // console.log("DDDDD")
    // setButtonSpiner(true)
    // if (email === '' || senha === "") {
    //   toast.warning("Preencha Todos os Campos")
    //   return;
    // }
    // signInWithEmailAndPassword(auth, email, senha)
    //   .then(() => {
    //     toast.success("[SUCESSO] Usuário Logado")
    //     navigate('/home',)
    //     setButtonSpiner(false)
    //   }).catch(() => {
    //     toast.error("[ERRO] Algo deu Errado")
    //   })
  }
  return (
    <div className='h-[100vh] w-full flex flex-col items-center  text-white  pt-[2rem]'>
      <img src={Logo} className="max-w-[140px] rounded-full" />
      <form className='w-[370px] text-black mt-[2rem]' onSubmit={handleLogin}>
        <Input type="email" placeholder='Digite seu email...' autoComplete='on'
          value={email} onChange={(e) => setEmail(e.target.value)} />
        <Input type="password" placeholder='**********' autoComplete='on'
          value={senha} onChange={(e) => setSenha(e.target.value)} />

        {ButtonSpiner == false ? (
          <button type='submit' className='h-[36px] w-full rounded border-none bg-[#FFF607] text-[18px] text-black font-medium'>Acessar</button>
        ) : (
          <button type='submit' className='h-[36px] w-full rounded border-none bg-[#FFF607] text-[18px] items-center justify-center flex'><PiCircleNotchBold className=' animate-spin' /></button>
        )}
      </form>
    </div>
  )
}