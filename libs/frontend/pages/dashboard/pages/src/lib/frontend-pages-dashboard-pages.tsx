import styles from './frontend-pages-dashboard-pages.module.css';

/* eslint-disable-next-line */
export interface FrontendPagesDashboardPagesProps {}

export function FrontendPagesDashboardPages(
  props: FrontendPagesDashboardPagesProps
) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to FrontendPagesDashboardPages!</h1>
    </div>
  );
}

export default FrontendPagesDashboardPages;
