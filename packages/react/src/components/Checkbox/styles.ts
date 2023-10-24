import * as Checkbox from '@radix-ui/react-checkbox'
import { styled, keyframes } from '../../styles'

export const CheckboxContainer = styled(Checkbox.Root, {
  all: 'unset',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '$6',
  height: '$6',
  backgroundColor: '$gray900',
  borderRadius: '$xs',
  lineHeight: 0,
  overflow: 'hidden',
  boxSizing: 'border-box',
  border: '2px solid $gray900',
  cursor: 'pointer',

  '&[data-state="checked"]': {
    backgroundColor: '$ignite300',
  },

  '&:focus': {
    border: '2px solid $ignite300',
  },
})

const slideIn = keyframes({
  from: {
    transform: 'translateY(-100%)',
  },
  to: {
    transform: 'translateY(0)',
  },
})

const slideOut = keyframes({
  from: {
    transform: 'translateY(0)',
  },
  to: {
    transform: 'translateY(-100%)',
  },
})

export const CheckboxIndicator = styled(Checkbox.Indicator, {
  width: '$4',
  height: '$4',
  color: '$white',

  '&[data-state="checked"]': {
    animation: `${slideIn} 0.2s ease-in`,
  },

  '&[data-state="unchecked"]': {
    animation: `${slideOut} 0.2s ease-out`,
  },
})
