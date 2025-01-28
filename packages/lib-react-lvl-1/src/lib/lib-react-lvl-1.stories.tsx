import type { Meta, StoryObj } from '@storybook/react';
import { LibReactLvl1 } from './lib-react-lvl-1';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof LibReactLvl1> = {
  component: LibReactLvl1,
  title: 'LibReactLvl1',
};
export default meta;
type Story = StoryObj<typeof LibReactLvl1>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to LibReactLvl1!/gi)).toBeTruthy();
  },
};
