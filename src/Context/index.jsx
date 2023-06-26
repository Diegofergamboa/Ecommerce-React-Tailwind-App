import { createContext } from 'react'
import PropTypes from 'prop-types'
import { useState, useEffect } from "react"

export const ShoppingCartContext = createContext()

export const ShoppingCartProvider = ({ children }) => {
    const [products, setProducts] = useState(null);
    const [count, setCount] = useState(0);
    const [isProductDetailActive, setIsProductDetailActive] = useState(false)
    const changeProductDetail = () => setIsProductDetailActive(!isProductDetailActive)
    const [isCheckoutSideMenuActive, setIsCheckoutSideMenuActive] = useState(false)
    const changeCheckoutSideMenu = () => setIsCheckoutSideMenuActive(!isCheckoutSideMenuActive)
    const [productToShow, setProductToShow] = useState([])
    const [cartProducts, setCartProducts] = useState([])
    const [cartProductsDelete, setCartProductsDelete] = useState([])
    const [order, setOrder] = useState([])
    const [searchByTitle, setSearchByTitle] = useState('')
    const [filteredItems, setFilteredItems] = useState([])

    useEffect(() => {
        async function fetchData() {
            const response = await fetch('https://api.escuelajs.co/api/v1/products');
            const data = await response.json();
            setProducts(data);
        }
        fetchData();
    }, []);

    const filteredItemsByTitle = (items, searchByTitle) => {
        return items?.filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()));
    }

    useEffect(() => {
        if (searchByTitle) setFilteredItems(filteredItemsByTitle(products, searchByTitle));
    }, [products, searchByTitle]);

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
            setOrder,
            searchByTitle,
            setSearchByTitle,
            filteredItems
        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}

ShoppingCartProvider.propTypes = {
    children: PropTypes.node,
};
