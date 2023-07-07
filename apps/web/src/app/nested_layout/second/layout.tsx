import { ReactNode } from 'react'

const SecondLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="w-full h-full">
      <div className="w-full h-1/5 flex-grow bg-amber-200 flex flex-col">Layout 2</div>
      {children}
    </main>
  )
}

export default SecondLayout
