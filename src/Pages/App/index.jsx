import { useRoutes , BrowserRouter } from 'react-router-dom'
import Home from '../Home/index'
import MyAccount from '../MyAccount/index'
import MyOrder from '../MyOrder/index'
import MyOrders from '../MyOrders/index'
import NotFound from '../NotFound/index'
import SignIn from '../SignIn/index'
import './App.css'
import Navbar from '../../Components/Navbar'

const AppRouters = () => {
  let routers = useRoutes([
    {path: '/', element: < Home /> },
    {path: '/my-account', element: <MyAccount/> },
    {path: '/my-order', element: <MyOrder/> },
    {path: '/my-orders', element: <MyOrders/> },
    {path: '/sign-in', element: <SignIn/> },
    {path: '/*', element: <NotFound/> },
  ])
  return routers
}

function App() {
  return (
    <BrowserRouter>
        <Navbar />
        <AppRouters />
    </BrowserRouter>
  )
}

export default App
