import * as TooltipRadix from '@radix-ui/react-tooltip'
import { ReactNode } from 'react'
import { TooltipContainer, TooltipContent } from './styles'

export interface TooltipProps {
  children: ReactNode
  message: string
}

export function Tooltip({ children, message }: TooltipProps) {
  return (
    <TooltipRadix.Provider>
      <TooltipContainer>
        <TooltipRadix.Trigger asChild>{children}</TooltipRadix.Trigger>
        <TooltipRadix.Portal>
          <TooltipContent>
            {message}
            <TooltipRadix.Arrow />
          </TooltipContent>
        </TooltipRadix.Portal>
      </TooltipContainer>
    </TooltipRadix.Provider>
  )
}

Tooltip.displayName = 'Tooltip'
