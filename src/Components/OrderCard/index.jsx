import { FaWindowClose } from 'react-icons/fa';

const OrderCard = props => {
    const { title, imageUrl, price } = props;
    return (
        <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
                <figure className="w-20 h-20">
                    <img className='w-full h-full rounded-lg object-cover' alt={title} src={imageUrl} />
                </figure>
                <p className="text-sm font-light">{title}</p>
            </div>
            <div className="flex items-center gap-2">
                <p className="text-lg font-medium">${price}</p>
                <FaWindowClose className="h-6 text-black cursor-pointer" />
            </div>
        </div>
    );
}

export default OrderCard;