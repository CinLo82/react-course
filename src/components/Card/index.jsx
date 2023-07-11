import { useContext } from 'react'
import { PlusIcon, CheckIcon } from '@heroicons/react/24/solid'
import { ShoppingCartContext } from '../../Context'

const Card = (data) => {
    const context = useContext(ShoppingCartContext)

    const showProduct = (productDetail) => {
        context.openProductDetail()
        context.setProductToShow(productDetail)
    }

    const addProductToCart = (productData) => {
        context.setCount(context.count + 1)
        context.setCartProducts([
            ...context.cartProducts, 
            productData 
        ])
        context.openCheckoutSideMenu()
    }

    const renderIcon = (id) => {
        const isInCart = context.cartProducts.filter(product => product.id === id).length > 0

        if (isInCart) {
            return (
                <CheckIcon className='absolute top-0 right-0 flex justify-center items-center bg-orange-600 w-6 h-6 rounded-full m-2 p-1 text-white' />
            )
        } else
        return (
            <div 
                    className='absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1'
                    onClick={() => addProductToCart(data.data)}
            >
                   <PlusIcon className='w-6 f-6 text-orange-600  font-bold'/>
            </div>
        )
    }

    return (
        <div 
        className='bg-orange-200 border-orange-300 cursor-pointer w-56 p-2 h-60 rounded-lg'
        >
            <figure className='relative mb-2 w-full h-4/5'>
                <span className='absolute bottom-0 left-0 bg-orange-300 rounded-lg text-black text-xs m-2 px-3 py-0.5'>{data.data.category.name}</span>
                <img 
                    className='w-full h-full object-cover rounded-lg' src={data.data.images[0]} 
                    alt={data.data.title} 
                    onClick={() => showProduct(data.data)}
                />
                {renderIcon(data.data.id)}
            </figure>
            <p className='flex justify-between'>
                <span className='text-sm font-light'>{data.data.title}</span>
                <span className='text-lg font-semibold'>${data.data.price}</span>
            </p>
        </div>
    )
}

export default Card