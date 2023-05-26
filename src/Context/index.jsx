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

    {/* Setup for count and show in the Product Cart every single product */}
    const [cartProducts, setCartProducts] = useState([])

    {/* Setup for hidde or show aside checkout Side Menu */}
    const [isCheckoutSideMenuActive, setIsCheckoutSideMenuActive] = useState(false);
    const changeCheckoutSideMenu = () => setIsCheckoutSideMenuActive(!isCheckoutSideMenuActive)

    return (
        <ShoppingCartContext.Provider value={{
            count,
            setCount,
            isProductDetailActive,
            setIsProductDetailActive,
            changeProductDetail,
            productToShow,
            setProductToShow,
            cartProducts,
            setCartProducts,
            isCheckoutSideMenuActive,
            changeCheckoutSideMenu
        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}

ShoppingCartProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

