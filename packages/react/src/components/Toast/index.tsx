import * as ToastRadix from '@radix-ui/react-toast'
import { X } from 'phosphor-react'
import { ReactNode, useState } from 'react'
import { Button } from '../..'
import {
  Close,
  Description,
  Title,
  ToastContainer,
  ToastHeader,
  Viewport,
} from './styles'

export interface ToastProps {
  children: ReactNode
  title: string
  description: string
}

export function Toast({ title, description }: ToastProps) {
  const [open, setOpen] = useState(false)

  return (
    <ToastRadix.Provider duration={3000}>
      <Button onClick={() => setOpen(true)}>Open</Button>

      <ToastContainer open={open} onOpenChange={setOpen}>
        <ToastHeader>
          <Title>{title}</Title>
          <Close asChild>
            <X size={20} color="red" />
          </Close>
        </ToastHeader>
        <Description>{description}</Description>
      </ToastContainer>

      <Viewport />
    </ToastRadix.Provider>
  )
}

Toast.displayName = 'Tooltip'
