import styles from './frontend-pages-patients-pages.module.css';

/* eslint-disable-next-line */
export interface FrontendPagesPatientsPagesProps {}

export function FrontendPagesPatientsPages(
  props: FrontendPagesPatientsPagesProps
) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to FrontendPagesPatientsPages!</h1>
    </div>
  );
}

export default FrontendPagesPatientsPages;
