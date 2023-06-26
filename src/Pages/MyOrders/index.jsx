import Layout from '../../Components/Layout'
import { OrdersCard } from '../../Components/OrdersCard'
import { useContext } from 'react'
import { ShoppingCartContext } from '../../Context'
import { Link } from 'react-router-dom'

function MyOrders() {
    const context = useContext(ShoppingCartContext)
    return (
        <Layout>
            <div className='flex justify-center items-center w-80 relative'>
                <h1 className='font-medium text-xl mb-3'>MyOrders</h1>
            </div>
            {
                context.order.map((order, index) => (
                <Link key={index} to={`/my-orders/${index}`}>
                    <OrdersCard
                        totalPrice={order.totalPrice}
                        totalProducts={order.totalProducts}
                    />
                </Link>
                ))
            }
        </Layout>
    )
}

export default MyOrders