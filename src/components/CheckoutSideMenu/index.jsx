import { useContext } from 'react'
import { XCircleIcon } from '@heroicons/react/24/solid'
import { ShoppingCartContext } from '../../Context'
import './styles.css'

const CheckoutSideMenu = () => {
    const { isCheckoutSideMenuOpen, closeCheckoutSideMenu} = useContext(ShoppingCartContext)

   // const context= useContext(ShoppingCartContext)
    return (
        <aside className={`${isCheckoutSideMenuOpen ? 'flex' : 'hidden'} checkout-side-menu  flex-col fixed right-0 border border-black rounded-lg bg-white`}>
            <div className='flex justify-between items-center p-6'>
                <h2 className='font-medium text-xl'>My Order</h2>
                <div>
                    <XCircleIcon 
                        className='h-6 w-6 text-red-500 cursor-pointer' 
                        onClick={() => closeCheckoutSideMenu()} 
                    />
                </div>
            </div>
        </aside>
    )
}

export default CheckoutSideMenu