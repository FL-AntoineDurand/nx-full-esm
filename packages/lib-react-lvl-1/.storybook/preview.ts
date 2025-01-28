import type { Preview } from '@storybook/react';
import { GlobalWrapper } from './global-wrapper';

import '../src/lib/index.scss';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    backgrounds: {
      default: 'dark',
      values: [
        {
          name: 'dark',
          value: '#222',
        },
      ],
    },
  },
  decorators: [GlobalWrapper],
  tags: [],
};

export default preview;
