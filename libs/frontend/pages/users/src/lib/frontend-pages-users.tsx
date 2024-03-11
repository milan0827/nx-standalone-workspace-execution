import styles from './frontend-pages-users.module.css';

/* eslint-disable-next-line */
export interface FrontendPagesUsersProps {}

export function FrontendPagesUsers(props: FrontendPagesUsersProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to FrontendPagesUsers!</h1>
    </div>
  );
}

export default FrontendPagesUsers;
