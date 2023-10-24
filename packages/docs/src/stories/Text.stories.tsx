import type { StoryObj, Meta } from '@storybook/react'
import { Text, TextProps } from '@zenky-ignite-ds/react'

export default {
    title: 'Typography/Text',
    component: Text,
    args: {
        size: 'md',
        children: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis maxime sequi deserunt, quo beatae quos. Ipsam doloribus velit vitae perspiciatis nulla neque assumenda dolor corrupti officia? Necessitatibus corporis sint odio.'
    },
    argTypes: {
        size: {
            options: ['xxs', 'xs', 'sm', 'md', 'lg', 'xl', '2xl', '4xl', '5xl', '6xl', '7xl', '8xl', '9xl'],
            control: {
                type: 'inline-radio'
            }
        },
    }
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
    args: {
        children: 'Strong text',
        as: 'strong'
    }
}