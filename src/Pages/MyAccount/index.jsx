import { useContext, useState, useRef } from 'react'
import { ShoppingCartContext } from '../../Context'
import Layout from '../../components/Layout'

function MyAccount() {
	const context = useContext(ShoppingCartContext)
	const [view, setView] = useState('user-info')
	const account = localStorage.getItem('account')
	const parsedAccount = JSON.parse(account)
	const form = useRef(null)

	const editAccount = () => {
		const formData = new FormData(form.current)
		const data = {
			name: formData.get("name"),
			email: formData.get("email"),
			password: formData.get("password")
		}
		// update account
		const stringifiedAccount = JSON.stringify(data)
		localStorage.setItem('account',stringifiedAccount);
		context.setAccount(data)
	}

	const renderUserInfo = () => {
		return (
			<>
				<h1 className='font-medium text-xl text-center mb-6 mt-3 w-80 '>My Account</h1>
				<div className='flex flex-col w-80 bg-orange-200 p-3 rounded-lg'>
					<p>
						<span className='font-light text-sm'>Name: </span>
						<span>{parsedAccount?.name}</span>
					</p>
					<p>
						<span className='font-light text-sm'>Email: </span>
						<span>{parsedAccount?.email}</span>
					</p>
					<button
						className='border border-orange-400 text-orange-600 rounded-lg mt-6 py-3'
						onClick={() => setView('edit-user-info')}>
						Edit
					</button>
				</div>
			</>
		)
	}
	const rendereditUserInfo = () => {
		return (
			<>
			<h1 className='font-medium text-xl text-center mb-6 mt-3 w-80 '>My Account</h1>
			<form ref={form} className='flex flex-col gap-4 w-80 bg-orange-200 p-4 rounded-lg'>
				<div className='flex flex-col gap-1'>
					<label htmlFor="name" className='font-light text-sm'>Your name:</label>
					<input
						type="text"
						id="name"
						name="name"
						defaultValue={parsedAccount.name}
						placeholder="Peter"
						className='rounded-lg border border-orange-400 placeholder:font-light placeholder:text-sm placeholder:text-black/60 focus:outline-none py-2 px-4'
					/>
				</div>
				<div className='flex flex-col gap-1'>
					<label htmlFor="email" className='font-light text-sm'>Your email:</label>
					<input
						type="text"
						id="email"
						name="email"
						defaultValue={parsedAccount.email}
						placeholder="hi@helloworld.com"
						className='rounded-lg border border-orange-400 placeholder:font-light placeholder:text-sm placeholder:text-black/60 focus:outline-none py-2 px-4'
					/>
				</div>
				<div className='flex flex-col gap-1'>
				<label htmlFor="password" className='font-light text-sm'>Your password:</label>
				<input
					type="text"
					id="password"
					name="password"
					defaultValue={parsedAccount.password}
					placeholder="******"
					className='rounded-lg border border-orange-400 placeholder:font-light placeholder:text-sm placeholder:text-black/60 focus:outline-none py-2 px-4'
				/>
				</div>
				<button
					className='bg-orange-500 text-orange-200 w-full  rounded-lg py-3'
					onClick={() => {setView('user-info'), editAccount()}}>
					Edit
				</button>
			</form>
			</>
		)
	}

	const renderView = () => view === 'edit-user-info' ? rendereditUserInfo() : renderUserInfo()

		return (
			<Layout>
				{renderView()}
			</Layout>
		)
}
    
export default MyAccount
  
  