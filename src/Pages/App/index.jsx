import { useRoutes, BrowserRouter } from 'react-router-dom'
import Home from '../Home'
import MyAccound from '../MyAccound'
import MyOrder from '../MyOrder'
import MyOrders from '../MyOrders'
import NotFound from '../NotFound'
import SignIn from '../SignIn'
import Navbar from '../../components/Navbar'
import { ShoppingCartProvider } from '../../Context'
import './App.css'

const AppRouters = () => {
	let routes = useRoutes([
	{ path: '/', element: <Home /> },
	{ path: '/my-accound', element: <MyAccound /> },
	{ path: '/my-order', element: <MyOrder /> },
	{ path: '/my-orders', element: <MyOrders /> },
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
			</BrowserRouter>
		</ShoppingCartProvider>
	)
}

export default App
