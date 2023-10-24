import * as Toast from '@radix-ui/react-toast'
import { styled } from '../../styles'

export const ToastContainer = styled(Toast.Root, {
  position: 'absolute',
  right: '32px',
  bottom: '32px',
  width: '360px',
  padding: '12px 20px',
  background: '$gray800',
  borderRadius: '6px',
})

export const ToastHeader = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
})

export const Title = styled(Toast.Title, {
  color: '$white',
  fontSize: '$xl',
  fontFamily: '$default',
  fontWeight: '$bold',
})

export const Close = styled(Toast.Close, {
  cursor: 'pointer',
})

export const Description = styled(Toast.Description, {
  marginTop: '$2',
  color: '$gray200',
  fontSize: '$sm',
  fontFamily: '$default',
  fontWeight: '$regular',
})

export const Viewport = styled(Toast.Viewport, {
  listStyle: 'none',
  zIndex: 999,
})
