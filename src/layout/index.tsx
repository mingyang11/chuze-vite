import { Layout } from '@arco-design/web-react';
import './index.css';

const Header = Layout.Header;
const Footer = Layout.Footer;
const Content = Layout.Content;

const Layouts = () => {
  return <div className='layout-basic-demo'>
    <Layout style={{ height: '100vh' }}>
      <Header>Header</Header>
      <Content>Content</Content>
      <Footer>Footer</Footer>
    </Layout>
  </div>
}

export default Layouts