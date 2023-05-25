import { createContext } from 'react';
import { useState } from 'react';
import { PropTypes } from 'prop-types';

export const ShoppingCartContext = createContext()

export const ShoppingCartProvider = ({ children }) => {
    {/* Setup for shopping cart counter */}
    const [count, setCount] = useState(0);

    {/* Setup for hidde or show aside product detail */}
    const [isProductDetailActive, setIsProductDetailActive] = useState(false);
    const changeProductDetail = () => setIsProductDetailActive(!isProductDetailActive)

    {/* Setup for show information in the product detail */}
    const [productToShow, setProductToShow] = useState([])

    {/* Setup for show information in the product detail */}
    const [cartProducts, setCartProducts] = useState([])

    return (
        <ShoppingCartContext.Provider value={{
            count,
            setCount,
            isProductDetailActive,
            setIsProductDetailActive,
            changeProductDetail,
            productToShow,
            setProductToShow,
        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}

ShoppingCartProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

