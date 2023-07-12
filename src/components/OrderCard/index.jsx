import { useState } from 'react'
import PropTypes from 'prop-types'
import { TrashIcon } from '@heroicons/react/24/solid'


const OrderCard = ({ id, title, imageUrl, price, handleDelete }) => {
    let renderTrashIcon 
    if (handleDelete) {
        renderTrashIcon = <TrashIcon className='h-6 w-6 text-orange-600 cursor-pointer mr-2' onClick={() => handleDelete(id)}/>
    }


    const [quantity, setQuantity] = useState(1)

    const incrementQuantity = () => {
        setQuantity(quantity + 1)
      
    }
    
    const decrementQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1)
        }
    }

    let renderButtonQuantity
    if (handleDelete) {
        renderButtonQuantity = <div className="flex items-center">
                                    <button
                                        className="bg-orange-400 text-white font-bold py-1 px-2 rounded"
                                        onClick={decrementQuantity}
                                    >
                                        -
                                    </button>
                                    <span className="mx-2">{quantity}</span>
                                    <button
                                        className="bg-orange-400 text-white font-bold py-1 px-2 rounded"
                                        onClick={incrementQuantity}
                                    >
                                        +
                                    </button>
                                </div>
    }

    const truncatedTitle = title.slice(0, 12);

    const totalPrice = (price * quantity).toFixed(2)

    return (
        <div className='flex justify-between items-center border border-orange-400 rounded-lg mb-3'>
            <div className='flex items-center gap-2'>
                <figure className='w-20 h-20 '>
                    <img className='w-full h-full rounded-lg object-cover' src={imageUrl} alt={title} />
                </figure>
                <div>
                    <p className='text-sm font-light'>{truncatedTitle}</p>
                    {renderButtonQuantity}
                </div>
            </div>
            <div className='flex items-center gap-2'>
                <p className='text-lg font-medium mr-2'>{`$${totalPrice}`}</p>
                {renderTrashIcon}
            </div>
        </div>
    )
}

OrderCard.propTypes = {
    title: PropTypes.node.isRequired,
    imageUrl: PropTypes.node.isRequired,
    price: PropTypes.node.isRequired,
    id: PropTypes.node.isRequired,
    handleDelete: PropTypes.func.isRequired,

}

 export default OrderCard