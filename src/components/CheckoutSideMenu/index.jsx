import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { XCircleIcon } from '@heroicons/react/24/solid'
import { ShoppingCartContext } from '../../Context'
import OrderCard from '../OrderCard'
import { totalPrice } from '../../utils'
import './styles.css'

const CheckoutSideMenu = () => {
    const { isCheckoutSideMenuOpen, closeCheckoutSideMenu} = useContext(ShoppingCartContext)

    const context= useContext(ShoppingCartContext)

    const handleDelete = (id) => {
        const filteredproducts = context.cartProducts.filter(product => product.id != id)
        context.setCartProducts(filteredproducts)
    }

    const handleCheckout = () => {
        const orderToAdd = {
          date: '07.03.2023',
          products: context.cartProducts,
          totalProducts: context.cartProducts.length,
          totalPrice: totalPrice(context.cartProducts),
        };
    
        context.setOrder([...context.order, orderToAdd]);
        context.setCartProducts([]);
      
      }

    return (
        <aside className={`${isCheckoutSideMenuOpen ? 'flex' : 'hidden'} checkout-side-menu  flex-col fixed right-0 border border-gray-300 rounded-lg bg-gray-100`}>
            <div className='flex justify-between items-center p-6'>
                <h2 className='font-medium text-xl'>My Order</h2>
                <div>
                    <XCircleIcon 
                        className='h-6 w-6 text-red-500 cursor-pointer' 
                        onClick={() => closeCheckoutSideMenu()} 
                    />
                </div>
            </div>
            <div className='px-6 overflow-y-scroll flex-1 '>
                {
                context.cartProducts.map(product => (
                    <OrderCard 
                        key={product.id}
                        title={product.title}
                        imageUrl={product.images}
                        price={product.price}
                        handleDelete={() =>handleDelete(product.id)}
                        id={product.id}
                    />
                ))
                }
            </div>
            <div className='px-6 mb-6'>
                <p className='flex justify-between items-center bg-green-200 p-2 rounded-lg mb-2'>
                    <span className='font-light'>Total:</span>
                    <span className='font-medium text-2xl'>${totalPrice(context.cartProducts)}</span>
                </p>
                <Link to='/my-orders/last'>
                    <button 
                        className='w-full bg-black py-3 text-white rounded-lg ' 
                        onClick={() => handleCheckout()}
                    >
                        Checkout
                    </button>
                </Link>
                
            </div>
            
        </aside>
    )
}

export default CheckoutSideMenu