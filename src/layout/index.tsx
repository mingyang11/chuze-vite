import { Layout } from '@arco-design/web-react';
import styles from './index.module.scss';

const Header = Layout.Header;
const Footer = Layout.Footer;
const Content = Layout.Content;

const Layouts = () => {
  return <div>
    <Layout style={{ height: '100vh' }}>
      <Header className={styles.header}>Header</Header>
      <Content>Content</Content>
      <Footer>Footer</Footer>
    </Layout>
  </div>
}

export default Layouts