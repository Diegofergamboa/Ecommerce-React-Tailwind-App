import Layout from '../../Components/Layout'
import Card from '../../Components/Card/index'
import ProductDetail from '../../Components/ProductDetail/index'
import { useState, useEffect } from "react";


const Home = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const response = await fetch('https://api.escuelajs.co/api/v1/products');
            const data = await response.json();
            console.table(data);
            setProducts(data);
        }
        fetchData();
    }, []);

    return (
        <Layout>
            <section className='grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-8'>
                {products.map(product => {
                    return (
                        <Card
                            key={product.id}
                            title={product.title}
                            category={product.category.name}
                            description={product.description}
                            price={product.price}
                            image={product.images[0]}
                        />
                    )
                })}
            </section>
            <ProductDetail />
        </Layout>
    )
}

export default Home