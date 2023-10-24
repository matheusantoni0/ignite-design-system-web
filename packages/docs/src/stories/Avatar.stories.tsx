import type { StoryObj, Meta } from "@storybook/react";
import { Avatar, AvatarProps } from "@zenky-ignite-ds/react";

export default {
  title: "Data display/Avatar",
  component: Avatar,
  args: {
    src: "https://github.com/matheusantoni0.png",
    alt: "Zenky",
  },
  argTypes: {
    src: {
      control: {
        type: "text",
      },
    },
  },
} as Meta<AvatarProps>;

export const Primary: StoryObj<AvatarProps> = {};

export const WithFallBack: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
};
