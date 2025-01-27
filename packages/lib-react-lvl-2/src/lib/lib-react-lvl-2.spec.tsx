import { render } from '@testing-library/react';

import LibReactLvl2 from './lib-react-lvl-2';

describe('LibReactLvl2', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<LibReactLvl2 />);
    expect(baseElement).toBeTruthy();
  });
});
