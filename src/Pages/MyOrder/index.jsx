import { useContext } from 'react'
import { ShoppingCartContext } from '../../Context'
import Layout from '../../Components/Layout'
import { OrderCard } from '../../Components/OrderCard/'

function MyOrder() {
    const context = useContext(ShoppingCartContext)
    console.log(context.order)
    return (
        <Layout className="bg-red">
            My Order
            <div className='px-6'>
                {
                    context.order?.slice(-1)[0].products.map(product => (
                        <OrderCard
                            key={product.id}
                            id={product.id}
                            title={product.title}
                            imageUrl={product.image}
                            price={product.price}
                        />
                    ))
                }
            </div>
        </Layout>
    )
}

export default MyOrder