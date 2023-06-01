import PropTypes from 'prop-types';
import { useContext } from 'react';
import { ShoppingCartContext } from '../../Context';
import { FaCheck } from 'react-icons/fa'
import { FaPlusCircle } from 'react-icons/fa'

const Card = (data) => {
    const context = useContext(ShoppingCartContext)

    const showProductDetail = () => {
        context.changeProductDetail()
        context.setProductToShow(data)
    }

    const addShoppingCart = (event, productData) => {
        event.stopPropagation()
        context.setCount(context.count + 1)
        context.setCartProducts([...context.cartProducts, productData])
        context.changeCheckoutSideMenu()
        console.log('Cart', context.cartProducts)
    }

    const renderIcon = (image) => {
        console.log(`The image form the card is this ${image}`)
        const isInCart = context.cartProducts.filter(product => product.image === image).length > 0   
        console.log(isInCart)
        if (!isInCart) {
            return (
                <div className='absolute top-0 right-0 p-1 m-1 text-center align-middle flex justify-center items-center w-6 h-6 bg-slate-50/80 shadow-lg font-bold rounded-full drop-shadow-2xl mix-blend-normal'
                    onClick={(event) => addShoppingCart(event, data)}
                >
                    <FaPlusCircle />
                </div>
            )
        }
        else {
            return (
                <div className='absolute top-0 right-0 p-1 m-1 text-center align-middle flex justify-center items-center w-6 h-6 font-bold  bg-slate-50/80 shadow-lg drop-shadow-2xl rounded-full'
                    onClick={(event) => addShoppingCart(event, data)}
                >
                    <FaCheck />
                </div>
            )
        }
    }


    return (
        <div className='bg-white cursor-pointer w-56 rounded-lg'
            onClick={() => showProductDetail()}
        >
            <figure className='relative mb-2 w-full '>
                <span className='absolute top-0 left-0 p-1 rounded-3xl m-1 bg-white/60 text-black text-sm '>{data.category}!</span>
                <img className="rounded-lg object-cover" src={data.image} alt='headphones' />
                <p>{data.image}</p>
                {renderIcon(data.image)}
            </figure>
            <p className='flex justify-between'>
                <span className='text-sm font-bold'>{data.title}</span>
                <span>${data.price}</span>
            </p>
        </div>
    )
}

Card.defaultProps = {
    title: 'Unset Title',
    category: 'Unset Category',
    price: 'Unset Price',
    image: 'https://img.freepik.com/vector-gratis/ups-error-404-ilustracion-concepto-robot-roto_114360-5529.jpg?w=2000'
}

Card.propTypes = {
    name: PropTypes.string,
    image: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired
};

export default Card;