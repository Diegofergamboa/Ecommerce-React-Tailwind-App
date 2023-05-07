import { gql } from "@apollo/client";

const GET_PRODUCTS = gql`
query {
        id
        title
        price
        description
        images
        category {
        id
        name
        image
        }
    }
`;


export default GET_PRODUCTS;