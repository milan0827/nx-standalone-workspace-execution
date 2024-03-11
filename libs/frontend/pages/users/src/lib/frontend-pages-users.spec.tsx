import { render } from '@testing-library/react';

import FrontendPagesUsers from './frontend-pages-users';

describe('FrontendPagesUsers', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FrontendPagesUsers />);
    expect(baseElement).toBeTruthy();
  });
});
