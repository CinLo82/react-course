import { useState } from 'react'
import PropTypes from 'prop-types'
import { XCircleIcon } from '@heroicons/react/24/solid'


const OrderCard = ({ title, imageUrl, price }) => {
    const [quantity, setQuantity] = useState(1)

      const incrementQuantity = () => {
        setQuantity(quantity + 1)
      }
    
      const decrementQuantity = () => {
        if (quantity > 1) {
          setQuantity(quantity - 1)
        }
      }

      const truncatedTitle = title.slice(0, 12);

      const totalPrice = (price * quantity).toFixed(2)

    return (
        <div className='flex justify-between items-center mb-3'>
            <div className='flex items-center gap-2'>
                <figure className='w-20 h-20 '>
                    <img className='w-full h-full rounded-lg object-cover' src={imageUrl} alt={title} />
                </figure>
                <div>
          <p className='text-sm font-light'>{truncatedTitle}</p>
          <div className="flex items-center">
            <button
              className="bg-gray-400 hover:bg-gray-500 text-white font-bold py-1 px-2 rounded"
              onClick={decrementQuantity}
            >
              -
            </button>
            <span className="mx-2">{quantity}</span>
            <button
              className="bg-gray-400 hover:bg-gray-500 text-white font-bold py-1 px-2 rounded"
              onClick={incrementQuantity}
            >
              +
            </button>
          </div>
        </div>
      </div>
            <div className='flex items-center gap-2'>
                <p className='text-lg font-medium'>{`$${totalPrice}`}</p>
                <XCircleIcon 
                        className='h-6 w-6 text-red-500 cursor-pointer'  
                />
            </div>
        </div>
    )
}

OrderCard.propTypes = {
    title: PropTypes.node.isRequired,
    imageUrl: PropTypes.node.isRequired,
    price: PropTypes.node.isRequired,
  }

 export default OrderCard