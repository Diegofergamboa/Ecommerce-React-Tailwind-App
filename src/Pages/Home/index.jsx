import Layout from '../../Components/Layout'
import Card from '../../Components/Card/index'
import ProductDetail from '../../Components/ProductDetail/index'
import { useState, useEffect } from "react";


const Home = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const response = await fetch('https://fakestoreapi.com/products');
            const data = await response.json();
            console.table(data[0])
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
                            id={product.id}
                            title={product.title}
                            price={product.price}
                            description={product.description}
                            category={product.category}
                            image={product.image}
                        />
                    )
                })}
            </section>
            <ProductDetail />
        </Layout>
    )
}

export default Home