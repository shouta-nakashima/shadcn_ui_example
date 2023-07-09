import { createServerComponentSupabaseClient } from '@supabase/auth-helpers-nextjs'
import { Database } from '../../../../../database.types'
import { cookies, headers } from 'next/headers'
import { notFound } from 'next/navigation'
import { format } from 'date-fns'

type PageProps = {
  params: {
    todoId: string
  }
}
const TodoPage = async ({ params }: PageProps) => {
  const supabase = createServerComponentSupabaseClient<Database>({
    headers,
    cookies
  })

  const { data: todo } = await supabase.from('todos').select('*').eq('id', params.todoId).single()

  if (!todo) return notFound()

  return (
    <div className="mt-16 border-2 p-8 h-fit">
      <p>Task ID: {todo.id}</p>
      <p>Title: {todo.title}</p>
      <p>Status: {todo.completed ? 'done' : 'not yet'}</p>
      <p>Created at: {todo && format(new Date(todo.created_at), 'yyyy-MM-dd HH:mm:ss')}</p>
    </div>
  )
}

export default TodoPage
