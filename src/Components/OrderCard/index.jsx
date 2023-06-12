import { FaWindowClose } from 'react-icons/fa';
import PropTypes from 'prop-types';
//import { useContext } from 'react';
//import { ShoppingCartContext } from '../../Context'




const OrderCard = props => {
    //const context = useContext(ShoppingCartContext)
    
    const { id, title, imageUrl, price, handleDelete } = props

    return (
        <div className="flex justify-between items-center mb-3 w-full">
            <div className="flex items-center gap-2">
                <figure className="w-20 h-15">
                    <img className='w-full h-full rounded-lg object-cover' alt={title} src={imageUrl} />
                </figure>
                <p className="text-sm font-light">{title}</p>
            </div>
            <div className="flex items-center gap-2">
                <p className="text-lg font-medium">${price}</p>
                <p>{id}</p>
            </div>
            <FaWindowClose onClick={() => handleDelete(id)} className="h-6 text-black cursor-pointer" />
        </div>
    );
}

OrderCard.propTypes = {
    id: PropTypes.string,
    title: PropTypes.string,
    imageUrl: PropTypes.string,
    price: PropTypes.number,
    handleDelete: PropTypes.element
}

export { OrderCard }