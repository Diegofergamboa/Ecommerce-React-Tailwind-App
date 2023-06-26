import { createContext } from 'react'
import PropTypes from 'prop-types'
import { useState, useEffect } from "react"

export const ShoppingCartContext = createContext()

export const ShoppingCartProvider = ({ children }) => {

    {/* Get products */}
    const [products, setProducts] = useState(null);
    
    {/* Setup for shopping cart counter */}
    const [count, setCount] = useState(0);

    {/* Setup for hide or show aside product detail */}
    const [isProductDetailActive, setIsProductDetailActive] = useState(false)
    const changeProductDetail = () => setIsProductDetailActive(!isProductDetailActive)
    
    {/* Setup for hide or show aside checkout Side Menu */}
    const [isCheckoutSideMenuActive, setIsCheckoutSideMenuActive] = useState(false)
    const changeCheckoutSideMenu = () => setIsCheckoutSideMenuActive(!isCheckoutSideMenuActive)

    {/* Setup for showing information in the product detail */}
    const [productToShow, setProductToShow] = useState([])

    {/* Setup for count and show in the Product Cart every single product */}
    const [cartProducts, setCartProducts] = useState([])

    {/* Setup for count and show in the Product Cart every single product */}
    const [cartProductsDelete, setCartProductsDelete] = useState([])

    {/* Shopping CART * Order */}
    const [order, setOrder] = useState([])


    useEffect(() => {
        async function fetchData() {
            const response = await fetch('https://api.escuelajs.co/api/v1/products');
            const data = await response.json();
            setProducts(data);
        }
        fetchData();
    }, []);

    return (
        <ShoppingCartContext.Provider value={{
            products,
            setProducts,
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
            changeCheckoutSideMenu,
            cartProductsDelete,
            setCartProductsDelete,
            order,
            setOrder
        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}

ShoppingCartProvider.propTypes = {
    children: PropTypes.node,
};
