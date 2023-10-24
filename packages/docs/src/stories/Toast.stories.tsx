import type { StoryObj, Meta } from '@storybook/react'
import { Toast, ToastProps } from '@zenky-ignite-ds/react'

export default {
    title: 'Overlay/Toast',
    component: Toast,
    args: {
        title: 'Lorem Ipsum',
        description: 'Ignatia Non Asiris'
    },
    argTypes: {
        title: {
            control: {
                type: 'text'
            }
        },
        description: {
            control: {
                type: 'text'
            }
        },
    }
} as Meta<ToastProps>

export const Primary: StoryObj<ToastProps> = {}
