import { render } from '@testing-library/react';

import FrontendPagesPatients from './frontend-pages-patients';

describe('FrontendPagesPatients', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FrontendPagesPatients />);
    expect(baseElement).toBeTruthy();
  });
});
