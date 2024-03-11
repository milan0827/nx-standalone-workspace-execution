import { render } from '@testing-library/react';

import FrontendPagesDashboardPages from './frontend-pages-dashboard-pages';

describe('FrontendPagesDashboardPages', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FrontendPagesDashboardPages />);
    expect(baseElement).toBeTruthy();
  });
});
