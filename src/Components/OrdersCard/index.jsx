import { FaRegArrowAltCircleRight } from 'react-icons/fa';
import PropTypes from 'prop-types';

const OrdersCard = props => {
    const { totalPrice, totalProducts } = props

    return (
        <div className="flex justify-between items-center mb-3 rounded-lg border-b border-blue-950/20  border border-black p-4 w-80">
            <div className='flex justify-between w-full'>
                <div className='flex flex-col'>
                    <span className='font-light'>Actual Date</span>
                    <span className='font-light'>{totalProducts} articles</span>
                </div>
                <p className='flex gap-2 items-center'>
                    <span className='font-medium text-2xl'>${totalPrice}</span>
                    <FaRegArrowAltCircleRight />
                </p>
            </div>
        </div>
    );
}

OrdersCard.propTypes = {
    totalPrice: PropTypes.string,
    totalProducts: PropTypes.string
}

export { OrdersCard }