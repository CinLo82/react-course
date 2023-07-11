import { Link } from 'react-router-dom'
import Layout from '../../components/Layout'

function SignIn() {
	return (
		<Layout>
			<h1 className='font-medium text-xl text-center mb-6 mt-3 w-80 '>Welcome</h1>
			<div className='flex flex-col w-80 bg-orange-200 p-4 rounded-lg'>
				<p>
					<span>Email: </span>
					<span>cinlo@cinlo.com:</span>
				</p>
				<p>
					<span>Password: </span>
					<span>******: </span>
				</p>
				<Link 
					to='/'
				>
					<button className='bg-orange-500 disabled:bg-orange-500/40 text-white w-full rounded-lg p-3 mt-4 mb-2'>
						Log In
					</button>
				</Link>
				<div className='text-center'>
					<a className='font-ligth text-sm underline underline-offset-4' href='/'>Forgot my Password</a>
				</div>
				<button className='border border-orange-500 disabled:text-orange-500/40 disabled:border-orange-500/40 rounded-lg mt-6 py-3 w-full'>
					Sign Up
				</button>
			</div>
			
		</Layout>
	)
} 
  export default SignIn
  
  