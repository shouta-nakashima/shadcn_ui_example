'use client'

import { FormEvent, useState } from 'react'
import { useRouter } from 'next/navigation'
import { LogOut } from 'lucide-react'
import supabase from '../../utils/supabase'
import useStore from '../../store'
import { Button } from './ui/button'

const Auth = () => {
  const { loginUser } = useStore()
  const [isLogin, setIsLogin] = useState(true)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter()

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (isLogin) {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password
      })
      setEmail('')
      setPassword('')
      if (error) {
        alert(error.message)
      } else {
        router.push('/auth/todo_crud')
      }
    } else {
      const { error } = await supabase.auth.signUp({
        email,
        password
      })
      setEmail('')
      setPassword('')
      if (error) {
        alert(error.message)
      }
    }
  }
  const signOut = () => {
    supabase.auth.signOut()
  }
  return (
    <div className="flex flex-col items-center justify-center">
      <p>{loginUser.email}</p>
      <LogOut className="my-6 h-6 w-6 cursor-pointer text-blue-500" onClick={signOut} />
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            required
            placeholder="Email"
            onChange={e => setEmail(e.target.value)}
            className="my-2 rounded border border-gray-300 py-2 px-3 text-sm placeholder-gray-500 focus:outline-none"
          />
        </div>
        <div>
          <input
            type="password"
            required
            placeholder="Password"
            onChange={e => setPassword(e.target.value)}
            className="my-2 rounded border border-gray-300 py-2 px-3 text-sm placeholder-gray-500 focus:outline-none"
          />
        </div>
        <div className="my-6 flex justify-center text-sm">
          <Button
            type="submit"
            className="rounded-md bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700"
          >
            {isLogin ? 'Login' : 'Register'}
          </Button>
        </div>
      </form>
      <p onClick={() => setIsLogin(!isLogin)} className="cursor-pointer font-medium hover:text-indigo-500">
        change mode ?
      </p>
    </div>
  )
}

export default Auth
