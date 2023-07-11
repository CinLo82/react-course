import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import Layout from '../../components/Layout'
import { ShoppingCartContext } from '../../Context'


function SignIn() {

	const context= useContext(ShoppingCartContext)

	const [view, setView] = useState('user-info')
	
	//Account
	const account = localStorage.getItem('account')
	const parsedAccount = JSON.parse(account)

	//has an account
	const noAccountInLocalStorage = parsedAccount ? Object.keys(parsedAccount).length === 0 : true
	const noAccountInLocalState = context.account ? Object.keys(context.account).length === 0 : true
	const hasUserAnAccount = !noAccountInLocalStorage || !noAccountInLocalState

	const renderLogIn = () => {
		return (
			<div className='flex flex-col w-80 bg-orange-200 p-4 rounded-lg'>
				<p>
					<span className='font-light text-sm'>Email: </span>
					<span>{parsedAccount?.email}</span>
				</p>
				<p>
					<span className='font-light text-sm'>Password: </span>
					<span>{parsedAccount?.password}</span>
				</p>
				<Link 
					to='/'
				>
					<button 
						className='bg-orange-500 disabled:bg-orange-500/40 text-white w-full rounded-lg p-3 mt-4 mb-2'
						disabled={!hasUserAnAccount}>
						Log In
					</button>
				</Link>
				<div className='text-center'>
					<a className='font-ligth text-sm underline underline-offset-4' href='/'>Forgot my Password</a>
				</div>
				<button 
					className='border border-orange-500 disabled:text-orange-500/40 disabled:border-orange-500/40 rounded-lg mt-6 py-3 w-full'
					onClick={()=>setView('create-user-info')}
					disabled={hasUserAnAccount}
				>
					Sign Up
				</button>
			</div>
		)
	}

	const renderCreateUserInfo = () => {

	}
	
	const renderView = () => view === 'create-user-info' ? renderCreateUserInfo() : renderLogIn()



	return (
		<Layout>
			<h1 className='font-medium text-xl text-center mb-6 mt-3 w-80 '>Welcome</h1>
			{renderView()}
			
		</Layout>
	)
} 
  export default SignIn
  
  