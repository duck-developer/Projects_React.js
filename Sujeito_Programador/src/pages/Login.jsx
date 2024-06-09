import React, { useState } from 'react'
import { Logo } from '../components/Logo/Logo'
import { useNavigate } from 'react-router-dom'

import { auth } from '../services/Firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'

import { toast } from 'react-toastify'
import { Input } from '../components/Input/Input'





const formInput = 'border-none h-[36px] mb-[14px] rounded py-[8px] outline-none'
export const Login = () => {

  const [email, setEmail] = useState('')
  const [passsword, setPasssword] = useState('')
  const navigate = useNavigate()

  function handleLogin(e) {
    e.preventDefault()
    if (email === '' || passsword === "") {
      alert("preencha todos os campos")
      return;

    }
    signInWithEmailAndPassword(auth, email, passsword)
      .then(() => {
        navigate("/admin", { replace: true })
        toast.success("Bem vindo de volta :)")
      })
      .catch(() => {
        toast.error("Error ao tentar fazer o login")
      })
  }

  return (
    <div className='flex flex-col items-center justify-center h-[100vh] w-full'>
      <Logo className={formInput} />

      <form onSubmit={handleLogin} className='flex flex-col w-full max-w-[600px]  '>

        <Input
        value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder='Digite seu email...'
        />
        <Input
        value={passsword} onChange={(e) => setPasssword(e.target.value)} type="password" placeholder='**********' autoComplete='on'
        />

        <button type='submit' className='h-[36px] rounded border-none bg-[#3366ff] text-[18px] text-white'>Acessar</button>
      </form>
    </div>
  )
}
