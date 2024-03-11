import { render } from '@testing-library/react';

import FrontendPagesPatientsPages from './frontend-pages-patients-pages';

describe('FrontendPagesPatientsPages', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FrontendPagesPatientsPages />);
    expect(baseElement).toBeTruthy();
  });
});
