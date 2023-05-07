import Layout from '../../Components/Layout'
import Card from '../../Components/Card/index'
import { useQuery } from '@apollo/client';
import GET_PRODUCTS from '../../Graphql/queries/getProducts.js';
import client from '../../Graphql/client';

const Home = () => {
    const { loading, error, data } = useQuery(GET_PRODUCTS, { client });

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error 404</p>;

    return (
        <Layout>
            {data.products.map((product) => {
                return (
                    <Card
                        key={product.id}
                        name={product.title}
                        description={product.description}
                        price={product.price}
                        image={product.image}
                    />
                )
            })}
        </Layout>
    )
}

export default Home;