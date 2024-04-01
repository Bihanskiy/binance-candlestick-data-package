import type { Meta, StoryObj } from '@storybook/react';

import Candlestick from '.';

const meta: Meta<typeof Candlestick> = {
  title: 'Components/Candlestick',
  component: Candlestick,
  tags: ['autodocs'],
  argTypes: {
  },
};

export default meta;
type Story = StoryObj<typeof meta>;


export const Default: Story = {
  args: {
  },
};