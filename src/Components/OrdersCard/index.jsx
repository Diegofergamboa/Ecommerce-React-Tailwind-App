import { FaArrowAltCircleDown } from 'react-icons/fa';
import PropTypes from 'prop-types';

const OrdersCard = props => {
    const { totalPrice, totalProducts } = props

    return (
        <div className="orderCard flex flex-col justify-between gap-1 rounded-sm p-2 border-b border-blue-950/20 items-center mb-3 w-full border border-black">
            <p>
                <span>01.02.23</span>
                <span>{totalProducts}</span>
                <span>{totalPrice}</span>
            </p>
        </div>
    );
}

OrdersCard.propTypes = {
    id: PropTypes.number,
    title: PropTypes.string,
    imageUrl: PropTypes.string,
    price: PropTypes.number,
    handleDelete: PropTypes.function
}

export { OrdersCard }