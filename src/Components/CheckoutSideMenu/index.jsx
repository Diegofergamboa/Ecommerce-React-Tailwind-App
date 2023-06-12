import './styles.css'
import { FaWindowClose } from 'react-icons/fa'
import { useContext } from 'react';
import { ShoppingCartContext } from '../../Context'
import { OrderCard } from '../OrderCard/'

const CheckoutSideMenu = () => {
    const { cartProducts, isCheckoutSideMenuActive, changeCheckoutSideMenu, context } = useContext(ShoppingCartContext)
    const handleDelete = (id) => {
        const filteredProducts = cartProducts.filter(product => product.id != id)
        console.log('filtered Products', filteredProducts)
        console.log('Id of the product filtered', id)
        console.log('###########################')
        console.log('cart Products', cartProducts)
        return context.setCartProducts(filteredProducts)
    }

    return (
        <aside className={`${isCheckoutSideMenuActive ? 'flex ' : 'hidden '} checkout-side-menu rounded-lg flex flex-col fixed right-0 border bg-white border-black`}>
            <div className='flex justify-between items-center p-6'>
                <FaWindowClose onClick={() => changeCheckoutSideMenu()} />
                <h2 className='font-medium text-xl'>My Order</h2>
            </div>
            <div className='px-6 overflow-y-scroll'>
            {
                cartProducts.map((product, index) => (
                    <OrderCard
                        key={`${product.id}${index}`}
                        id={product.id}
                        title={product.title}
                        imageUrl={product.image}
                        price={product.price}
                        handleDelete={handleDelete}
                    />
                ))
            }
            </div>
        </aside>
    )
}

export default CheckoutSideMenu;