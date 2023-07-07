import { ReactNode } from 'react'

const FirstLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="flex w-full h-full">
      <div className="w-1/6 h-full bg-blue-400 shrink-0">
        <p>Layout 1</p>
      </div>
      {children}
    </main>
  )
}

export default FirstLayout
