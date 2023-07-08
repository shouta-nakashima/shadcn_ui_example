'use client'
import { useState } from 'react'
import { Button } from './ui/button'

const Counter = () => {
  const [count, setCount] = useState(0)

  return (
    <div className="border border-orange-500 p-1 text-center">
      <p>Count: {count}</p>
      <Button
        className="rounded bg-indigo-600 px-3 py-1 font-medium hover:bg-indigo-700 text-white"
        onClick={() => setCount(prev => prev + 1)}
      >
        Increment
      </Button>
    </div>
  )
}

export default Counter
