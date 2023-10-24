import * as Tooltip from '@radix-ui/react-tooltip'
import { styled } from '../../styles'

export const TooltipContainer = styled(Tooltip.Root, {
  background: 'red',
})

export const TooltipContent = styled(Tooltip.Content, {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '44px',
  padding: '12px 16px',
  color: '$gray100',
  background: '$gray900',
  borderRadius: '4px',
  textAlign: 'center',
  fontSize: '$sm',
  fontFamily: '$default',
  boxSizing: 'border-box',
})
