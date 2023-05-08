import './styles.css'
import { FaWindowClose } from 'react-icons/fa'

const ProductDetail = () => {
    return (
        <aside className='product-detail rounded-lg flex flex-col fixed right-0 border bg-white border-black'>
            <div className='flex justify-between items-center p-6'>
                <FaWindowClose />
                <h2 className='font-medium text-xl'>Product Information</h2>
            </div>
        </aside>
    )
}

export default ProductDetail