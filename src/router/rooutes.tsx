import Home from "../page/home"
import Dashboard from "../page/dashboard"

const routeList = [
  {
    path: '/',
    pageName: '首页',
  },
  {
    path: '/home',
    component: <Home />
  },
  {
    path: '/dashboard',
    component: <Dashboard />
  },
]

export default routeList