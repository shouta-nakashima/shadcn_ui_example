import * as React from 'react'
import { Button } from 'shadcn_ui/components/ui/button'

interface Props {
  title: string
  onClick: () => void
}

export const CustomButton = ({ title, onClick }: Props) => {
  return (
    <Button onClick={onClick} className="bg-blue-400">
      {title}
    </Button>
  )
}
