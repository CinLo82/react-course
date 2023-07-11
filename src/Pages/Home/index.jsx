import { useContext } from 'react'
import Layout from '../../components/Layout'
import Card from '../../components/Card'
import ProductDetail from '../../components/ProductDetail'
import { ShoppingCartContext } from '../../Context'
import './styles.css'

function Home() {

	const context = useContext(ShoppingCartContext)
  
	const renderView = () => {

		if (context.filteredItems?.length > 0  ) {
			return (
				context.filteredItems?.map(item => (
					<Card key={item.id} data={item} />
				))
			)
        } else {
			return (
				<div>We don't have anything</div>
			)
			}
		} 

    return (
		<Layout>
			<div className='flex items-center justify-center w-80 mb-4'>
				<h1 className='font-medium text-xl'>
				Exclusive Products
				</h1>
			</div>
			<input 
				type="text" 
				placeholder='Search a Product'
				className='rounded-lg border border-orange-300 bg-orange-200 w-80 p-2 mb-2 focus:outline-none'
				onChange={(event) => context.setSearchByTitle(event.target.value)}
			/>
			<div className='grid-autofill'>
				{
				renderView()
				} 
			</div>
		<ProductDetail />
		</Layout>
    )
}
  
export default Home
  