import { createContext, useState } from 'react'
import PropTypes from 'prop-types'


export const ShoppingCartContext = createContext()

export const ShoppingCartProvider = ({ children }) => {
    ShoppingCartProvider.propTypes = {
        children: PropTypes.node.isRequired,
    }

    // Shopping Cart . Increment quantily
    const [count, setCount] = useState(0)

    // Product Detail . Open/Close
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false)
    const openProductDetail = () => setIsProductDetailOpen(true)
    const closeProductDetail = () => setIsProductDetailOpen(false)

    // Product Detail . show product
    const [productToShow, setProductToShow ]=useState({
        title: "",
        price: "",
        description: "",
        images: [],
    })

    // Shopping cart. Add product to Cart
    const [cartProducts, setCartProducts ]=useState([])

    return (
        <ShoppingCartContext.Provider value={{
            count,
            setCount,
            openProductDetail,
            closeProductDetail,
            isProductDetailOpen,
            productToShow,
            setProductToShow,
            cartProducts,
            setCartProducts
        }}>
            { children}
        </ShoppingCartContext.Provider>   
    )
}