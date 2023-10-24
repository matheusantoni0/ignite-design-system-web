import type { StoryObj, Meta } from '@storybook/react'
import { Tooltip, TooltipProps } from '@zenky-ignite-ds/react'
import { Info } from 'phosphor-react'

export default {
    title: 'Overlay/Tooltip',
    component: Tooltip,
    args: {
        children: <Info size={24} color="orange" weight="bold" />,
        message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis maxime sequi deserunt, quo beatae quos. Ipsam doloribus velit vitae perspiciatis nulla neque assumenda dolor corrupti officia? Necessitatibus corporis sint odio.'
    },
    argTypes: {
        message: {
            control: {
                type: 'text'
            }
        },
        children: {
            control: {
                type: null
            }
        }
    }
} as Meta<TooltipProps>

export const Primary: StoryObj<TooltipProps> = {}
