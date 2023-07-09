import { useContext } from 'react'
import { Link } from 'react-router-dom'
import Layout from '../../components/Layout'
import OrdersCard from '../../components/OrdersCard'
import { ShoppingCartContext } from '../../Context'
import { ChevronLeftIcon } from '@heroicons/react/24/solid'


function MyOrders() {

    const context = useContext(ShoppingCartContext)
  
    return (
        <Layout>
            <div className='w-80 mb-4 items-center justify-center relative flex'>
                <Link to='/my-orders' className='absolute left-0'>
                    <ChevronLeftIcon className='h-6 w-6 text-gray-500 cursor-pointer'/>
                </Link>
                <h1 className='font-medium text-xl '>My Orders</h1> 
            </div>
            
            {
                context.order.map((order, index) => (
                    <Link key={index} to={`/my-orders/${index}`}>
                        <OrdersCard 
                            totalPrice={order.totalPrice} 
                            totalProducts={order.totalProducts} />
                    </Link>
               
                ))
            }
      
        </Layout>
    )
} 
    export default MyOrders
  
  