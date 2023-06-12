import './styles.css'
import { FaWindowClose } from 'react-icons/fa'
import { useContext } from 'react';
import { ShoppingCartContext } from '../../Context'
import { OrderCard } from '../OrderCard/'

const CheckoutSideMenu = () => {
    const { cartProducts, setCartProducts, isCheckoutSideMenuActive, changeCheckoutSideMenu } = useContext(ShoppingCartContext)
    const handleDelete = (id, event) => {
        event.stopPropagation()
        const filteredProducts = cartProducts.filter(product => product.id != id)
        return setCartProducts(filteredProducts)
    }

    return (
        <aside className={`${isCheckoutSideMenuActive ? 'flex ' : 'hidden '} checkout-side-menu rounded-lg flex flex-col fixed right-0 border bg-white border-black`}>
            <div className='flex justify-between items-center p-6'>
                <FaWindowClose onClick={() => changeCheckoutSideMenu()} />
                <h2 className='font-medium text-xl'>My Order</h2>
            </div>
            <div className='px-6 overflow-y-scroll'>
            {
                cartProducts.map(product => (
                    <OrderCard
                        key={product.id}
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