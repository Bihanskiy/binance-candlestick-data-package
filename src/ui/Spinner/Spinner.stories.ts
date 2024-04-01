import type { Meta, StoryObj } from '@storybook/react';

import Spinner from '.';

const meta: Meta<typeof Spinner> = {
  title: 'Molecules/Spinner',
  component: Spinner,
  tags: ['autodocs'],
  argTypes: {
  },
};

export default meta;
type Story = StoryObj<typeof meta>;


export const Default: Story = {
  args: {
    color: "primary",
    size: "md"
  },
};