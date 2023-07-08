'use client'

import { useRouter } from 'next/navigation'
import { Button } from './ui/button'

const RouterBtn = ({ destination = '' }: { destination?: string }) => {
  const router = useRouter()
  return (
    <Button
      onClick={() => router.push(`/${destination}`)}
      className="rounded bg-indigo-600 px-3 py-1 font-medium text-white hover:bg-indigo-700"
    >
      Nav to {destination ? destination : 'home'}
    </Button>
  )
}

export default RouterBtn
