import PropTypes from 'prop-types'
//import { TrashIcon } from '@heroicons/react/24/solid'

const OrdersCard = ({ totalPrice, totalProducts}) => {
    OrdersCard.propTypes = {
        totalPrice: PropTypes.node.isRequired,
        totalProducts: PropTypes.node.isRequired,
    }

    return (
        <div>
           <p className='flex flex-col w-56 bg-gray-100 rounded-lg p-2  items-center mb-3 border border-gray-200'>
                <span>01.02.12</span>
                <span>Total Product: {totalProducts}</span>
                <span>Total Price: ${totalPrice}</span>
           </p>
        </div>
    )
}

 export default OrdersCard