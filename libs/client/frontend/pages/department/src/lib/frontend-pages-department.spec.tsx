import { render } from '@testing-library/react';

import FrontendPagesDepartment from './frontend-pages-department';

describe('FrontendPagesDepartment', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FrontendPagesDepartment />);
    expect(baseElement).toBeTruthy();
  });
});
