import { render } from '@testing-library/react';

import FrontendPagesDashboard from './frontend-pages-dashboard';

describe('FrontendPagesDashboard', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FrontendPagesDashboard />);
    expect(baseElement).toBeTruthy();
  });
});
