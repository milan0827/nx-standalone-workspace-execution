import { render } from '@testing-library/react';

import FrontendPagesConsultantPages from './frontend-pages-consultant-pages';

describe('FrontendPagesConsultantPages', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FrontendPagesConsultantPages />);
    expect(baseElement).toBeTruthy();
  });
});
