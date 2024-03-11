import styles from './frontend-pages-department.module.css';

/* eslint-disable-next-line */
export interface FrontendPagesDepartmentProps {}

export function FrontendPagesDepartment(props: FrontendPagesDepartmentProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to FrontendPagesDepartment!</h1>
    </div>
  );
}

export default FrontendPagesDepartment;
