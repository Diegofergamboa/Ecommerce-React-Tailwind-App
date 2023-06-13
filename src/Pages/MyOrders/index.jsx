import Layout from '../../Components/Layout'
import { OrdersCard } from '../../Components/OrdersCard'
import { useContext } from 'react';
import { ShoppingCartContext } from '../../Context'
import { Link } from 'react-router-dom';

function MyOrders() {
    const context = useContext(ShoppingCartContext)
    return (
        <Layout>
            MyOrders
            {
                context.order.map((order, index) =>
                <Link key={index} to={`/my-orders/${order.id}`}>
                    <OrdersCard
                        totalPrice={order.totalPrice}
                        totalProducts={order.totalProducts}
                    />
                </Link>
                )
            }
            
        </Layout>
    )
}

export default MyOrders