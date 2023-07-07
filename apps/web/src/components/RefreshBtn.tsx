'use client'

import { Button } from './ui/button'
import { useRouter } from 'next/navigation'

const RefreshBtn = () => {
  const router = useRouter()
  return (
    <Button
      className="rounded bg-indigo-600 px-3 py-1 font-medium text-white hover:bg-indigo-700"
      onClick={() => router.refresh()}
    >
      Refresh Current Route
    </Button>
  )
}

export default RefreshBtn
