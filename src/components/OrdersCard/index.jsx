import PropTypes from 'prop-types'
import { ChevronRightIcon } from '@heroicons/react/24/solid'

const OrdersCard = ({ totalPrice, totalProducts}) => {
    OrdersCard.propTypes = {
        totalPrice: PropTypes.node.isRequired,
        totalProducts: PropTypes.node.isRequired,
    }

    return (
        <div className='flex justify-between w-80 bg-gray-200 rounded-lg p-4 items-center mb-3 border border-gray-300'>
            <div className='flex justify-between w-full'>
                <p className='flex flex-col'>
                    <span className='font-light'>01.02.12</span>
                    <span className='font-light'>{totalProducts} articles</span>
                </p> 
                <p className='flex items-center gap-2'>
                   <span className='font-medium text-2xl'>${totalPrice}</span>
                   <ChevronRightIcon className='h-6 w-6 text-gray-500'/>
                </p>
            </div>
           
        </div>
    )
}

 export default OrdersCard