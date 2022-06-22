import { useEffect } from 'react';
import styles from './index.module.scss';
import { ReactComponent as ReactLogo } from '@assets/icons/logo.svg';
const Dashboard = () => {
  useEffect(() => {}, []);
  return (
    <div className={styles.pageContent}>
      Dashboard页
      {/* <ReactLogo /> */}
    </div>
  );
};

export default Dashboard;
