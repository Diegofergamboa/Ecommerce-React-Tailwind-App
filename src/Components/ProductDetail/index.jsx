import './styles.css'
import { FaWindowClose } from 'react-icons/fa'
import { useContext } from 'react';
import { ShoppingCartContext } from '../../Context'

const ProductDetail = () => {
    const { changeProductDetail, isProductDetailActive, productToShow } = useContext(ShoppingCartContext)

    return (
        <aside className={`${isProductDetailActive ? 'flex ' : 'hidden '} product-detail rounded-lg flex flex-col fixed right-0 border bg-white border-black`}>
            <div className='flex justify-between items-center p-6'>
                <FaWindowClose onClick={() => changeProductDetail()} />
                <h2 className='font-medium text-xl'>Product Information</h2>
            </div>
            <div className='flex flex-col p-6 gap-2 bg-gray-300 rounded-sm shadow-slate-500'>
                <img src={productToShow.image} className='w-full  rounded-lg product-detail__image'/>
                <h2 className='bold text-xl font-bold'>{productToShow.title}</h2>
                <h4 className='font-bold text-lg underline'>${productToShow.price}</h4>
                <p className='italic text-sm'>{productToShow.description}</p>
            </div>
        </aside>
    )
}

export default ProductDetail