import styles from './frontend-pages-patients.module.css';

/* eslint-disable-next-line */
export interface FrontendPagesPatientsProps {}

export function FrontendPagesPatients(props: FrontendPagesPatientsProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to FrontendPagesPatients!</h1>
    </div>
  );
}

export default FrontendPagesPatients;
