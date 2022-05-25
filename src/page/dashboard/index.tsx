import { useEffect } from 'react';
import styles from './index.module.scss';
import { ReactComponent as ReactLogo } from '@assets/icons/logo.svg';
import fib from 'virtual:fib';
alert(`结果: ${fib(10)}`);
const Dashboard = () => {
  useEffect(() => {
    // alert(`结果: ${fib(10)}`);
  }, []);
  return (
    <div className={styles.pageContent}>
      Dashboard页s
      <ReactLogo />
    </div>
  );
};

export default Dashboard;
