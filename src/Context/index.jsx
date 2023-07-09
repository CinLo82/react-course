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

    // checkout side menu . Open/Close
    const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false)
    const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true)
    const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false)

    // Product Detail . show product
    const [productToShow, setProductToShow ]=useState({
        title: "",
        price: "",
        description: "",
        images: [],
    })

    // Shopping cart. Add product to Cart
    const [cartProducts, setCartProducts ]=useState([])

     // Shopping cart. Order
     const [order, setOrder ]=useState([])
    
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
            setCartProducts,
            isCheckoutSideMenuOpen,
            openCheckoutSideMenu,
            closeCheckoutSideMenu, 
            order,
            setOrder
        }}>
            { children}
        </ShoppingCartContext.Provider>   
    )
}