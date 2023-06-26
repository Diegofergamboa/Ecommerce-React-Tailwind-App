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

    const renderView = () => {
        if (context.filteredItems?.length > 0) {
            return (
                <>
                    {context.filteredItems.map(product => (
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
                </>
            )
        } else {
            return (
                <>
                    <h2 className='w-full text-center text-xl'>No products match the search criteria</h2>
                </>
            )
        }
    }

    return (
        <Layout>
            <div className='flex justify-center items-center w-80 relative mb-5'>
                <h1 className='font-medium text-xl mb-3'>Products</h1>
            </div>
            <input 
                placeholder='Search your products' 
                className='rounded-lg border-black border-2 w-120 p-4 mb-4 focus:outline-none '
                onChange={(event) => context.setSearchByTitle(event.target.value)}
            />
            <section className='grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-8'>
                {renderView()}
            </section>
            <ProductDetail />
        </Layout>
    )
}

export default Home