import { useContext } from 'react'
import { Link } from 'react-router-dom'
import Layout from '../../components/Layout'
import OrdersCard from '../../components/OrdersCard'
import { ShoppingCartContext } from '../../Context'

function MyOrders() {

    const context = useContext(ShoppingCartContext)
  
    return (
        <Layout>
            <div className='w-80 items-center justify-center relative flex mb-6 mt-3'>
                <Link to='/my-orders' className='absolute left-0'>
                   
                </Link>
                <h1 className='font-medium text-xl '>My Orders</h1> 
            </div>
            <div className='bg-orange-200 px-4 pt-4 pb-1 rounded-lg'> 
                {
                    context.order.map((order, index) => (
                        <Link key={index} to={`/my-orders/${index}`}>
                            <OrdersCard 
                                totalPrice={order.totalPrice} 
                                totalProducts={order.totalProducts} />
                        </Link>
                    ))
                }
            </div>
        </Layout>
    )
} 
    export default MyOrders
  
  