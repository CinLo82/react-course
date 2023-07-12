import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingCartContext } from '../../Context'
import Layout from '../../components/Layout'
import OrderCard from '../../components/OrderCard'
import { ChevronLeftIcon } from '@heroicons/react/24/solid'
  

const MyOrder = () => {
  const context= useContext(ShoppingCartContext)

  const currenPath = window.location.pathname
  let index = currenPath.substring(currenPath.lastIndexOf('/') + 1)
  if (index === 'last') index = context.order?.length - 1
  console.log(index)

	return (
		<Layout>
			<div className='w-80 items-center justify-center relative flex mb-6 mt-3'>
				<Link to='/my-orders' className='absolute left-0'>
					<ChevronLeftIcon className='h-6 w-6 text-gray-500 cursor-pointer'/>
				</Link>
				<h1 className='font-medium text-xl'>My Order</h1> 
			</div>
			<div className='flex flex-col w-80 mt-4 bg-orange-200 px-4 pt-4 pb-1 rounded-lg '>
				{
				context.order?.[index]?.products.map(product => (
					<OrderCard 
						key={product.id}
						title={product.title}
						imageUrl={product.images}
						price={product.price}
						id={product.id}
					/>
				))
				}
			</div>
		</Layout>
	)
} 
  export default MyOrder
  
  