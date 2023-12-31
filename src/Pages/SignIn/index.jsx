import { useContext, useState, useRef } from 'react'
import { Link, Navigate } from 'react-router-dom'
import Layout from '../../components/Layout'
import { ShoppingCartContext } from '../../Context'


function SignIn() {

	const context= useContext(ShoppingCartContext)

	const [view, setView] = useState('user-info')
	const form = useRef(null)
	
	//Account
	const account = localStorage.getItem('account')
	const parsedAccount = JSON.parse(account)
	//has an account
	const noAccountInLocalStorage = parsedAccount ? Object.keys(parsedAccount).length === 0 : true
	const noAccountInLocalState = context.account ? Object.keys(context.account).length === 0 : true
	const hasUserAnAccount = !noAccountInLocalStorage || !noAccountInLocalState

	const handleSignIn = () => {
		const stringifiedSignOut = JSON.stringify(false)
		localStorage.setItem('sign-out', stringifiedSignOut)
		context.setSignOut(false)
		// redirect
		return <Navigate replace to={'/'}/>
	}


	const createAnAccount = () => {
		const formData = new FormData(form.current)
		const data = {
			name:formData.get('name'),
			email:formData.get('email'),
			password: formData.get('password')
		}

		//create account
		const stringifiedAccount= JSON.stringify(data)
		localStorage.setItem('account', stringifiedAccount)
		context.setAccount(data)
		// sign in
		handleSignIn()
	}


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
						onClick={() => handleSignIn()}
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
		return (
			<form ref={form} className='flex flex-col gap-4 w-80'>
				<div className='flex flex-col gap-1'>
					<label htmlFor='name'
						className='font-light text-sm'
					>
						Your name
					</label>
					<input 
						type='text'
						id='name'
						name='name'
						defaultValue={parsedAccount?.name}
						placeholder='Cinlo'
						className='rounded-lg border border-orange-400 placeholder:font-light placeholder:text-sm placeholder:text-black/60 focus:outline-none py-2 px-4'/>
				</div>
				<div className='flex flex-col gap-1'>
					<label htmlFor='name'
						className='font-light text-sm'
					>
						Your email
					</label>
					<input 
						type='text'
						id='email'
						name='email'
						defaultValue={parsedAccount?.email}
						placeholder='cinlo@cinlo.com'
						className='rounded-lg border border-orange-400 placeholder:font-light placeholder:text-sm placeholder:text-black/60 focus:outline-none py-2 px-4'/>
				</div>
				<div className='flex flex-col gap-1'>
					<label htmlFor='name'
						className='font-light text-sm'
					>
						Your password
					</label>
					<input 
						type='text'
						id='password'
						name='password'
						defaultValue={parsedAccount?.password}
						placeholder='*******'
						className='rounded-lg border border-orange-400 placeholder:font-light placeholder:text-sm placeholder:text-black/60 focus:outline-none py-2 px-4'/>
				</div>
				<div>
					<Link to='/'>
						<button
							className='bg-orange-500 text-white w-full rounded-lg py-3'
							onClick={() => createAnAccount()}
						>
							Create
						</button>
					</Link>
				</div>
			</form>
		)
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
  
  