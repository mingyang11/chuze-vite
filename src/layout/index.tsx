import { Layout } from '@arco-design/web-react';
import { Routes, Route, Link } from "react-router-dom"
import showRoutes from '../router/showRoutes'
import routeList from '../router/rooutes'
import styles from './index.module.scss';

const Header = Layout.Header;
const Footer = Layout.Footer;
const Content = Layout.Content;

const Layouts = () => {
  return <div>
    <Layout style={{ height: '100vh' }}>
        <Header className={styles.header}>
          {
            showRoutes.map((item) => {
              const {path, pageName } = item
              return <Link to={path} key={path}>{pageName}</Link>
            })
          }
        </Header>
      <Content>
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