import { ReactNode } from 'react'

const ThirdLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="w-full h-full flex">
      <div className="w-1/6 h-full bg-emerald-300 shrink-0">Layout 3</div>
      {children}
    </main>
  )
}

export default ThirdLayout
