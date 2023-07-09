import { cookies, headers } from 'next/headers'
import { createServerComponentSupabaseClient } from '@supabase/auth-helpers-nextjs'
import { Database } from '../../database.types'
import TodoItem from './TodoItem'

const TodoList = async () => {
  const supabase = createServerComponentSupabaseClient<Database>({
    headers,
    cookies
  })
  const { data: todos } = await supabase.from('todos').select().order('created_at', { ascending: true })

  return (
    <ul className="my-6 mx-3">
      {todos.map(todo => (
        <TodoItem key={todo.id} {...todo} />
      ))}
    </ul>
  )
}

export default TodoList
