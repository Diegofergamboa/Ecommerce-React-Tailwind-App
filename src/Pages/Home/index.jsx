import Layout from '../../Components/Layout'
<<<<<<< HEAD
import Card from '../../Components/Card/index'
import { useQuery } from '@apollo/client';
import GET_PRODUCTS from '../../Graphql/queries/getProducts.js';
import client from '../../Graphql/client';
=======
>>>>>>> parent of 243be4e (Card component created)

const Home = () => {
    const { loading, error, data } = useQuery(GET_PRODUCTS, { client });

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error 404</p>;

    return (
        <Layout>
<<<<<<< HEAD
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
=======
            Hi World!
>>>>>>> parent of 243be4e (Card component created)
        </Layout>
    )
}

export default Home;