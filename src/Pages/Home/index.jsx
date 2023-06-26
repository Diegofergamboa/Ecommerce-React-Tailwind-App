import Layout from '../../Components/Layout'
import Card from '../../Components/Card/index'
import ProductDetail from '../../Components/ProductDetail/index'
import { useContext } from 'react';
import { ShoppingCartContext } from '../../Context'

const Home = () => {
    const context = useContext(ShoppingCartContext)

    if (!context.products) {
        return null;
    }

    return (
        <Layout>
            <section className='grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-8'>
                {context.products.map(product => (
                    <Card
                        key={product.id}
                        id={product.id}
                        title={product.title}
                        price={product.price}
                        description={product.description}
                        category={product.category.name}
                        image={product.images[0]}
                    />
                ))}
            </section>
            <ProductDetail />
        </Layout>
    )
}

export default Home
