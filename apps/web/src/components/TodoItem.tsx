'use client'
import type { Database } from '../../database.types'
import { useRouter } from 'next/navigation'
import useStore from '../../store'
import supabase from '../../utils/supabase'
import Link from 'next/link'
import { Pencil, Trash2 } from 'lucide-react'

type Todo = Database['public']['Tables']['todos']['Row']

const TodoItem = (todo: Todo) => {
  const router = useRouter()
  const updateTask = useStore(state => state.updatedEditedTask)
  const resetTask = useStore(state => state.resetEditedTask)
  const updateMutate = async (id: string, completed: boolean) => {
    await supabase.from('todos').update({ completed: completed }).eq('id', id)
    resetTask()
    router.refresh()
  }
  const deleteMutate = async (id: string) => {
    await supabase.from('todos').delete().eq('id', id)
    router.refresh()
  }
  return (
    <li className="my-2">
      <input
        className="mr-1"
        type="checkbox"
        checked={todo.completed}
        onChange={e => updateMutate(todo.id, !todo.completed)}
      />
      <Link href={`/auth/todo_crud/${todo.id}`}>{todo.title}</Link>
      <div className="float-right ml-20 flex">
        <Pencil
          className="h-5 w-5 cursor-pointer text-blue-500"
          onClick={() => updateTask({ id: todo.id, title: todo.title })}
        />
        <Trash2 className="h-5 w-5 cursor-pointer text-red-500" onClick={() => deleteMutate(todo.id)} />
      </div>
    </li>
  )
}

export default TodoItem
