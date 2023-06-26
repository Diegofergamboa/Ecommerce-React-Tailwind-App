import './styles.css'
import { Link } from 'react-router-dom';
import { FaWindowClose } from 'react-icons/fa'
import { useContext } from 'react';
import { ShoppingCartContext } from '../../Context'
import { OrderCard } from '../OrderCard/'
import { totalPrice } from '../../utils'

const CheckoutSideMenu = () => {
    const { cartProducts, setCartProducts, isCheckoutSideMenuActive, changeCheckoutSideMenu, order, setOrder, setSearchByTitle } = useContext(ShoppingCartContext)

    const handleDelete = (id) => {
        const filteredProducts = cartProducts.filter(product => product.id != id)
        return setCartProducts(filteredProducts)
    }

    const handleCheckout = () => {
        const orderToAdd = {
            date: '01.02.23',
            products: cartProducts,
            totalProducts: cartProducts.length,
            totalPrice: totalPrice(cartProducts)
        }

        setOrder([...order, orderToAdd])
        setCartProducts([])
        setSearchByTitle(null)
    }

    return (
        <aside className={`${isCheckoutSideMenuActive ? 'flex ' : 'hidden '} checkout-side-menu rounded-lg flex flex-col fixed right-0 border bg-white border-black`}>
            <div className='flex justify-between items-center p-6'>
                <FaWindowClose onClick={() => changeCheckoutSideMenu()} />
                <h2 className='font-medium text-xl'>My Order</h2>
            </div>
            <div className='px-6'>
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
            <div className='px-6'>
                <p>
                    <span>Total: </span>
                    <span>${totalPrice(cartProducts)}</span>
                </p>
                <Link to='/my-orders/last'>
                <button className='bg-slate-500  text-fuchsia-50 py-3 px-5 rounded-lg mt-3 text-base' onClick={() => handleCheckout()}>Checkout</button>
                </Link>
            </div>
        </aside>
    )
}

export default CheckoutSideMenu;