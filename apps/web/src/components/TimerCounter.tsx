'use client'

import { useEffect, useState } from 'react'
import { Button } from './ui/button'

const TimerCounter = () => {
  const [count, setCount] = useState(0)
  useEffect(() => {
    const timer = setTimeout(() => setCount(count + 1), 1000)
    return () => clearTimeout(timer)
  }, [count])

  return (
    <div>
      <p>{count}</p>
      <Button className="font-sm my-3 rounded bg-indigo-600 py-1 px-3 text-white hover:bg-indigo-700">reset</Button>
    </div>
  )
}

export default TimerCounter
