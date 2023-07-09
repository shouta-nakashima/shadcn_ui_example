'use client'
import { useRouter } from 'next/navigation'
import useStore from '../../store'
import supabase from '../../utils/supabase'
import { LogOut } from 'lucide-react'
import { Button } from './ui/button'

const TodoEdit = () => {
  const router = useRouter()
  const { editedTask, loginUser } = useStore()
  const updateTask = useStore(state => state.updatedEditedTask)
  const reset = useStore(state => state.resetEditedTask)

  const signOut = () => {
    supabase.auth.signOut()
    router.push('/auth')
  }

  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (editedTask.id === '') {
      const { error } = await supabase.from('todos').insert({ title: editedTask.title, user_id: loginUser.id })
      router.refresh()
      reset()
    } else {
      const { error } = await supabase.from('todos').update({ title: editedTask.title }).eq('id', editedTask.id)
      router.refresh()
      reset()
    }
  }
  return (
    <div className="m-5 text-center">
      <p className="my-3">{loginUser.email}</p>
      <div className="flex justify-center">
        <LogOut className="my-3 w-6 h-6 cursor-pointer text-blue-500" onClick={signOut} />
      </div>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          className="my-2 rounded border border-gray-300 px-3 py-2 text-sm placeholder-gray-500 focus:outline-none"
          placeholder="new task?"
          value={editedTask.title || ''}
          onChange={e => updateTask({ ...editedTask, title: e.target.value })}
        />
        <Button
          className="ml-2 rounded bg-indigo-600 px-3 py-2 text-sm font-medium text-white hover:bg-indigo-700"
          type="submit"
        >
          {editedTask.id === '' ? 'Create' : 'Update'}
        </Button>
      </form>
    </div>
  )
}

export default TodoEdit
