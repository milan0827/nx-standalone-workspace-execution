import styles from './frontend-pages-consultant.module.css';

/* eslint-disable-next-line */
export interface FrontendPagesConsultantProps {}

export function FrontendPagesConsultant(props: FrontendPagesConsultantProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to FrontendPagesConsultant!</h1>
    </div>
  );
}

export default FrontendPagesConsultant;
