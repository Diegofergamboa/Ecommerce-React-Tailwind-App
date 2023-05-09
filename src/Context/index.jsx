import { createContext } from 'react';
import { useState } from 'react';


export const ShoppingCartContext = createContext()

export const ShoppingCartProvider = ({children}) => {
    const [count, setCount] = useState(0);
    const [isProductDetailActive, setIsProductDetailActive] = useState(false);

    const changeProductDetail = () => setIsProductDetailActive(!isProductDetailActive)

    return (
        <ShoppingCartContext.Provider value={{
            count,
            setCount,
            isProductDetailActive,
            setIsProductDetailActive,
            changeProductDetail
        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}