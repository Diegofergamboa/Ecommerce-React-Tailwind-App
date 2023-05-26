import './styles.css'
import { FaWindowClose } from 'react-icons/fa'
import { useContext } from 'react';
import { ShoppingCartContext } from '../../Context'
import { OrderCard } from '../../Components/OrderCard'

const CheckoutSideMenu = () => {
    const { cartProducts, isCheckoutSideMenuActive, changeCheckoutSideMenu } = useContext(ShoppingCartContext)

    return (
        <aside className={`${isCheckoutSideMenuActive ? 'flex ' : 'hidden '} checkout-side-menu rounded-lg flex flex-col fixed right-0 border bg-white border-black`}>
            <div className='flex justify-between items-center p-6'>
                <FaWindowClose onClick={() => changeCheckoutSideMenu()} />
                <h2 className='font-medium text-xl'>My Order</h2>
            </div>
        {
            cartProducts.map(product => {
                <OrderCard 
                key={product.Id}
                title={product.title}
                imageUrl={product.images}
                price={product.price}
                />
            })
        }
        </aside>
    )
}

export default CheckoutSideMenu;