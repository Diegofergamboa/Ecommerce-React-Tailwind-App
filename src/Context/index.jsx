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
    const [searchByCategory, setSearchByCategory] = useState('')

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch('https://api.escuelajs.co/api/v1/products');
                if (!response.ok) {
                    throw new Error('Failed to fetch products');
                }
                const data = await response.json();
                setProducts(data);
            } catch (error) {
                console.error('Error on fetch', error);
            }
        }

        fetchData();
    }, []);


    const filteredItemsByTitle = (items, searchByTitle) => {
        return items?.filter(item => item?.title?.toLowerCase().includes(searchByTitle.toLowerCase()));
    }

    const filteredItemsByCategory = (items, searchByCategory) => {
        return items?.filter(item => item.category?.name?.toLowerCase().includes(searchByCategory.toLowerCase()));
    }


    const filterBy = (searchType, products, searchByTitle, searchByCategory) => {
        if (searchType === 'BY_TITLE') {
            return filteredItemsByTitle(products, searchByTitle)
        }

        if (searchType === 'BY_CATEGORY') {
            return filteredItemsByCategory(products, searchByCategory)
        }

        if (searchType === 'BY_TITLE_AND_BY_CATEGORY') {
            return filteredItemsByTitle(products, searchByCategory).filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
        }

        if (!searchType) {
            return products
        }
    }
    useEffect(() => {
        if (searchByTitle && searchByCategory) setFilteredItems(filterBy('BY_TITLE_AND_BY_CATEGORY', products, searchByTitle, searchByCategory))
        if (searchByTitle && !searchByCategory) setFilteredItems(filterBy('BY_TITLE', products, searchByTitle, searchByCategory))
        if (!searchByTitle && searchByCategory) setFilteredItems(filterBy('BY_CATEGORY', products, searchByTitle, searchByCategory))
        if (!searchByTitle && !searchByCategory) setFilteredItems(filterBy(null, products, searchByTitle, searchByCategory))
    }, [products, searchByTitle, searchByCategory])

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
            filteredItems,
            setFilteredItems,
            searchByCategory,
            setSearchByCategory
        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}

ShoppingCartProvider.propTypes = {
    children: PropTypes.node,
};
