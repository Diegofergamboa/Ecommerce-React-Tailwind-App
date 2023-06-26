import { useContext } from 'react'
import { ShoppingCartContext } from '../../Context'
import Layout from '../../Components/Layout'
import { OrderCard } from '../../Components/OrderCard/'
import { Link } from 'react-router-dom'
import { FaArrowAltCircleLeft  } from 'react-icons/fa'

function MyOrder() {
    const context = useContext(ShoppingCartContext)
    const currentPath = window.location.pathname
    let index = currentPath.substring(currentPath.lastIndexOf('/') + 1)
    if (index === 'last') index = context.order?.length - 1

    return (
        <Layout className="bg-red">
            <div className='flex justify-center items-center w-80 relative mb-5'>
                <Link to={`/my-orders`} className='absolute left-0'>
                    <FaArrowAltCircleLeft />
                </Link>
                <h1 className='font-medium text-xl mb-3'>My Order</h1>
            </div>
            <div className='px-6'>
                {
                    context.order?.[index]?.products.map(product => (
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