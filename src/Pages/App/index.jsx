import { useRoutes, BrowserRouter, Navigate } from 'react-router-dom'
import { useContext } from 'react'
import Home from '../Home'
import MyAccound from '../MyAccound'
import MyOrder from '../MyOrder'
import MyOrders from '../MyOrders'
import NotFound from '../NotFound'
import SignIn from '../SignIn'
import Navbar from '../../components/Navbar'
import { ShoppingCartProvider, initializeLocalStorage, ShoppingCartContext } from '../../Context'
import CheckoutSideMenu from '../../components/CheckoutSideMenu'
import './App.css'

const AppRouters = () => {
	const context = useContext(ShoppingCartContext)
	// account
	const account = localStorage.getItem('account')
	const parsedAccount = JSON.parse(account)
	// sign out
	const signOut = localStorage.getItem('sign-out')
	const parsedSignOut = JSON.parse(signOut)
	// has an account
	const noAccountInLocalStorage = parsedAccount ? Object.keys(parsedAccount).length === 0 : true
	const noAccountInLocalState = Object.keys(context.account).length === 0 
	const hasUserAnAccount = !noAccountInLocalStorage || !noAccountInLocalState
	const isUserSignOut = context.signOut || parsedSignOut

	let routes = useRoutes([
	{ path: '/', element: hasUserAnAccount && !isUserSignOut ? <Home /> : <Navigate replace to={'/sign-in'} /> },
	{ path: '/clothes', element:  hasUserAnAccount && !isUserSignOut ? <Home /> : <Navigate replace to={'/sign-in'} /> },
	{ path: '/shoes', element: hasUserAnAccount && !isUserSignOut ? <Home /> : <Navigate replace to={'/sign-in'} /> },
	{ path: '/electronics', element: hasUserAnAccount && !isUserSignOut ? <Home /> : <Navigate replace to={'/sign-in'} /> },
	{ path: '/furnitures', element: hasUserAnAccount && !isUserSignOut ? <Home /> : <Navigate replace to={'/sign-in'} /> },
	{ path: '/others', element: hasUserAnAccount && !isUserSignOut ? <Home /> : <Navigate replace to={'/sign-in'} /> },
	{ path: '/my-accound', element: <MyAccound /> },
	{ path: '/my-order', element: <MyOrder /> },
	{ path: '/my-orders', element: <MyOrders /> },
	{ path: '/my-orders/last', element: <MyOrder /> },
	{ path: '/my-orders/:id', element: <MyOrder /> },
	{ path: '/sign-in', element: <SignIn /> },
	{ path: '/*', element: <NotFound /> },
	])
	return routes
}

const App = () => {
	initializeLocalStorage()
	return (
		<ShoppingCartProvider>
			<BrowserRouter>
				<AppRouters />
				<Navbar />
				<CheckoutSideMenu />
			</BrowserRouter>
		</ShoppingCartProvider>
	)
}

export default App
