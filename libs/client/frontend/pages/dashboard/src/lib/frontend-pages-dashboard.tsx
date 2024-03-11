import styles from './frontend-pages-dashboard.module.css';

/* eslint-disable-next-line */
export interface FrontendPagesDashboardProps {}

export function FrontendPagesDashboard(props: FrontendPagesDashboardProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to FrontendPagesDashboard!</h1>
    </div>
  );
}

export default FrontendPagesDashboard;
