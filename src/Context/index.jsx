import { createContext, useState, useEffect } from 'react'
import PropTypes from 'prop-types'

export const ShoppingCartContext = createContext()


export const initializeLocalStorage = () => {
    const accountInLocalStorage = localStorage.getItem('account')
    const signOutInLocalStorage = localStorage.getItem('sign-out')
    let parsedAccount
    let parsedSignOut
  
    if (!accountInLocalStorage) {
      localStorage.setItem('account', JSON.stringify({}))
      parsedAccount = {}
    } else {
      parsedAccount = JSON.parse(accountInLocalStorage)
    }
  
    if (!signOutInLocalStorage) {
      localStorage.setItem('sign-out', JSON.stringify(false))
      parsedSignOut = false
    } else {
      parsedSignOut = JSON.parse(signOutInLocalStorage)
    }
}

export const ShoppingCartProvider = ({ children }) => {
    ShoppingCartProvider.propTypes = {
        children: PropTypes.node.isRequired,
    }

    // my accound
    const [account, setAccount] = useState({})

    // sign out
    const [signOut, setSignOut] = useState(false)


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
    
    // get products by category
    const [searchByCategory, setSearchByCategory] = useState(null)
         

    useEffect(() => {
        fetch('https://api.escuelajs.co/api/v1/products')
        .then((response) => response.json())
        .then(data  => setItems(data))
    }, [])


    const filteredItemsByTitle = (items, searchByTitle) => {
        return items?.filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
    }

    const filteredItemsByCategory = (items, searchByCategory) => {
            return items?.filter(item => item.category.name.toLowerCase().includes(searchByCategory.toLowerCase()))
        }

    const filterBy = (searchType, items, searchByTitle, searchByCategory) => {
        if (searchType === 'BY_TITLE') {
            return filteredItemsByTitle(items, searchByTitle)
        } 
        if (searchType === 'BY_CATEGORY') {
            return filteredItemsByCategory(items, searchByCategory)
        } 
        if (searchType === 'BY_TITLE_AND_CATEGORY') {
            return filteredItemsByCategory(items, searchByCategory).filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
        } 
        if (!searchType) {
            return items
        } 
    }


    useEffect(() => {
        if (searchByTitle && searchByCategory) setFilteredItems(filterBy('BY_TITLE_AND_CATEGORY', items, searchByTitle, searchByCategory))
        if (searchByTitle && !searchByCategory) setFilteredItems(filterBy('BY_TITLE', items, searchByTitle, searchByCategory))
        if (!searchByTitle && searchByCategory) setFilteredItems(filterBy('BY_CATEGORY', items, searchByTitle, searchByCategory))
        if (!searchByTitle && !searchByCategory) setFilteredItems(filterBy(null, items, searchByTitle, searchByCategory))
       
    }, [items, searchByTitle, searchByCategory])


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
            filteredItems,
            searchByCategory,
            setSearchByCategory,
            account,
            setAccount,
            signOut,
            setSignOut
        }}>
            { children}
        </ShoppingCartContext.Provider>   
    )
}