import { render } from '@testing-library/react';

import FrontendPagesUsersPages from './frontend-pages-users-pages';

describe('FrontendPagesUsersPages', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FrontendPagesUsersPages />);
    expect(baseElement).toBeTruthy();
  });
});
