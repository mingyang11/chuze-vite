import Home from '../page/home';
import Login from '../component/Login'
import Register from '../component/Register'
import Logout from '../component/Loginout'
import Dashboard from '../page/dashboard';

const routeList = [
  {
    path: '/',
    component: <Home />
  },
  {
    path: '/login',
    component: <Login />
  },
  {
    path: '/logout',
    component: <Logout />
  },
  {
    path: '/register',
    component: <Register />
  },
  {
    path: '/dashboard',
    component: <Dashboard />
  }
];

export default routeList;
