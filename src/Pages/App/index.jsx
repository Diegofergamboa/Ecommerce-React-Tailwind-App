import { useRoutes , BrowserRouter } from 'react-router-dom'
import { ShoppingCartProvider } from '../../Context'
import Home from '../Home/index'
import MyAccount from '../MyAccount/index'
import MyOrder from '../MyOrder/index'
import MyOrders from '../MyOrders/index'
import NotFound from '../NotFound/index'
import SignIn from '../SignIn/index'
import './App.css'
import Navbar from '../../Components/Navbar'
import CheckoutSideMenu from '../../Components/CheckoutSideMenu'

const AppRouters = () => {
  let routers = useRoutes([
    {path: '/', element: < Home /> },
    {path: '/all', element: < Home /> },
    {path: '/clothes', element: < Home /> },
    {path: '/electronics', element: < Home /> },
    {path: '/furnitures', element: < Home /> },
    {path: '/toys', element: < Home /> },
    {path: '/others', element: < Home /> },
    {path: '/my-account', element: <MyAccount/> },
    {path: '/my-order', element: <MyOrder/> },
    {path: '/my-orders', element: <MyOrders/> },
    {path: '/my-orders/last', element: <MyOrder/> },
    {path: '/my-orders/:id', element: <MyOrder/> },
    {path: '/sign-in', element: <SignIn/> },
    {path: '/*', element: <NotFound/> },
  ])
  return routers
}

function App() {
  return (
    <ShoppingCartProvider>
      <BrowserRouter>
          <Navbar />
          <AppRouters />
          <CheckoutSideMenu />
      </BrowserRouter>
    </ShoppingCartProvider>
  )
}

export default App
