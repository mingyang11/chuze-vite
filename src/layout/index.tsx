import { Layout } from '@arco-design/web-react';
import { Routes, Route } from "react-router-dom"
import HeaderComponent from '../component/HeaderComponent'
import routeList from '../router/routes'
import styles from './index.module.scss';

const Header = Layout.Header;
const Footer = Layout.Footer;
const Content = Layout.Content;


const Layouts = () => {
  return <div>
    <Layout style={{ height: '100vh' }}>
      <Header className={styles.header}>
        <HeaderComponent />
        </Header>
      <Content className={styles.content}>
        <Routes>
          {
            routeList.map((item) => {
              const { path, component } = item
              return <Route path={path} key={path} element={component}></Route>
            })
          }
        </Routes>
      </Content>
      <Footer className={styles.footer}>Footer</Footer>
    </Layout>
  </div>
}

export default Layouts