import { createContext, useState, useEffect } from 'react'
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

    // get products
    const [items, setItems] = useState(null)
    const [filteredItems, setFilteredItems] = useState(null)

    // get products by title
    const [searchByTitle, setSearchByTitle] = useState(null)        

    useEffect(() => {
        fetch('https://api.escuelajs.co/api/v1/products')
        .then((response) => response.json())
        .then(data  => setItems(data))
    }, [])


      const filteredItemsByTitle = (items, searchByTitle) => {
        return items?.filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()))

      }
      useEffect(() => {
        if (searchByTitle) setFilteredItems(filteredItemsByTitle(items, searchByTitle))
    }, [items, searchByTitle])
    

    
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
            setOrder,
            items, 
            setItems,
            searchByTitle,
            setSearchByTitle,
            filteredItems
        }}>
            { children}
        </ShoppingCartContext.Provider>   
    )
}