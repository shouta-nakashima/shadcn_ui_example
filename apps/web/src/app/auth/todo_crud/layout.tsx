import React, { Suspense } from 'react'
import TodoEdit from '../../../components/TodoEdit'
import Spinner from '../../../components/Spinner'
import TodoList from '../../../components/TodoList'

const TodoLayout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="flex">
      <aside className={`h-[calc(100vh-56px)] w-1/4 bg-gray-200`}>
        <TodoEdit />
        <Suspense fallback={<Spinner />}>
          <TodoList />
        </Suspense>
      </aside>
      <main className="flex justify-center flex-1">{children}</main>
    </section>
  )
}

export default TodoLayout
