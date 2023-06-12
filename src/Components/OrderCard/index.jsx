import { FaWindowClose } from 'react-icons/fa';
import PropTypes from 'prop-types';

const OrderCard = props => {

    const { id, title, imageUrl, price, handleDelete } = props

    return (
        <div className="orderCard flex flex-col justify-between gap-1 rounded-sm p-2 border-b border-blue-950/20 items-center mb-3 w-full">
            <FaWindowClose onClick={() => handleDelete(id)} className="h-6 text-black cursor-pointer self-end" />
            <div className="flex items-center gap-2">
                <figure className="w-1/2">
                    <img className='w-full h-full rounded-lg object-cover' alt={title} src={imageUrl} />
                </figure>
                <p className="w-1/2 text-sm font-light">{title}</p>
            </div>
            <div className="flex self-start gap-2">
                <p className="text-lg font-medium">${price}</p>
            </div>
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