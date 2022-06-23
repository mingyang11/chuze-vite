import { useEffect } from 'react'
import api from '../../services/home';
const Home = () => {

  useEffect(() => {
    api.getUserlist({}).then((res) => {
      console.log(res);
      
    })
  }, [])
  return <div>home页</div>
}

export default Home