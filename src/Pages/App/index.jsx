import { useRoutes, BrowserRouter } from 'react-router-dom'
import Home from '../Home'
import MyAccound from '../MyAccound'
import MyOrder from '../MyOrder'
import MyOrders from '../MyOrders'
import NotFound from '../NotFound'
import SignIn from '../SignIn'
import Navbar from '../../components/Navbar'
import { ShoppingCartProvider } from '../../Context'
import CheckoutSideMenu from '../../components/CheckoutSideMenu'
import './App.css'

const AppRouters = () => {
	let routes = useRoutes([
	{ path: '/', element: <Home /> },
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
