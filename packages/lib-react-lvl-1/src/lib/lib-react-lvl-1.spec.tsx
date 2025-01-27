import { render } from '@testing-library/react';

import LibReactLvl1 from './lib-react-lvl-1';

describe('LibReactLvl1', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<LibReactLvl1 />);
    expect(baseElement).toBeTruthy();
  });
});
