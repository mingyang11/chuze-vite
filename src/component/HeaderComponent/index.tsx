import { Link, useLocation } from "react-router-dom"
import { Dropdown, Menu, Button } from '@arco-design/web-react';
import { IconAlipayCircle } from '@arco-design/web-react/icon';
import showRoutes from '../../router/showRoutes'

const SubMenu = Menu.SubMenu;
const MenuItem = Menu.Item;

const noHeaderList = ['/login','/logout','/register']
function HeaderComponent() {
  const {pathname} = useLocation()
  return <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
    <div style={{ width: 80, fontSize: 40, color: '#ffffffb3' }}><IconAlipayCircle /></div>
    {
      noHeaderList.includes(pathname) ? null : <div style={{flex: 1, display: 'flex'}}>
      {
        showRoutes.map((item) => {
          const { path, pageName } = item
          return <div style={{ paddingLeft: 10, paddingRight: 10 }} key={pageName}>
              <Link to={path} key={path} style={{color: '#ffffffe6', fontSize: 18, fontWeight: 500, textDecoration: 'none'}}>{pageName}</Link>
          </div>
        })
      }
      </div>
    }
    {
      noHeaderList.includes(pathname) ? null : <div style={{width: 80}}>操作</div>
    }
    
  </div>  
}

export default HeaderComponent