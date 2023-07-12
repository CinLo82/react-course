import { useContext } from 'react'
import { ShoppingCartContext } from '../../Context'
import { ShoppingBagIcon } from '@heroicons/react/24/solid'

const ShoppingCart = () => {
	const context = useContext(ShoppingCartContext)

    const openCheckoutSideMenu = () => {
        context.openCheckout()
        context.closeProductDetail()
    }

    return (
        <div className='relative flex gap-0.5 items-center'
            onClick={() => openCheckoutSideMenu()}>
            <ShoppingBagIcon className='h-6 w-6 fill-none stroke-orange-800 cursor-pointer' /> 
            <div className=' absolute bottom-3.5 left-3.5 flex justify-center items-center rounded-full text-sm bg-orange-800 w-4 h-4 text-sx text-orange-300'>
                {context.cartProducts.length}
            </div>
        </div>
    )
}

export default ShoppingCart