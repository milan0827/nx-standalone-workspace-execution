import { render } from '@testing-library/react';

import FrontendPagesConsultant from './frontend-pages-consultant';

describe('FrontendPagesConsultant', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FrontendPagesConsultant />);
    expect(baseElement).toBeTruthy();
  });
});
