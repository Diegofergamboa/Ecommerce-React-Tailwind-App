import { createContext } from 'react';
import { useState } from 'react';
import { PropTypes } from 'prop-types';

export const ShoppingCartContext = createContext()

export const ShoppingCartProvider = ({ children }) => {
    {/* Setup for shopping cart counter */}
    const [count, setCount] = useState(0);

    {/* Setup for hidde or show aside product detail */}
    const [isProductDetailActive, setIsProductDetailActive] = useState(false);

    {/* Setup for show information in the product detail */}
    const changeProductDetail = () => setIsProductDetailActive(!isProductDetailActive)
    const [productDetail, setProductDetail] = useState([])

    return (
        <ShoppingCartContext.Provider value={{
            count,
            setCount,
            isProductDetailActive,
            setIsProductDetailActive,
            changeProductDetail,
            productDetail,
            setProductDetail,
        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}

ShoppingCartProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

