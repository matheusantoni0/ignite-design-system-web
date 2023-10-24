import type { StoryObj, Meta } from '@storybook/react'
import { Box, BoxProps, Text } from '@zenky-ignite-ds/react'

export default {
    title: 'Surfaces/Box',
    component: Box,
    args: {
        children: <Text>Testando box</Text>
    },
    argTypes: {
        children: {
            control: {
                type: null
            }
        }
    }
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {}