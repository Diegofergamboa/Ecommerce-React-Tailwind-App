import { useRoutes } from 'react-router-dom'
import Home from '../Home/index'
import MyAccount from '../MyAccount/index'
import MyOrder from '../MyOrder/index'
import MyOrders from '../MyOrders/index'
import NotFound from '../NotFound/index'
import SignIn from '../SignIn/index'
import './App.css'

function App() {
  return (
    <>
      <div className=''>
        <Home />
        <MyAccount />
        <MyOrder />
        <MyOrders />
        <NotFound />
        <SignIn />
      </div>
    </>
  )
}

export default App
