import { NavLink } from "react-router-dom"
import { useContext } from "react"
import { ShoppingCartContext } from "../../Context"
import ShoppingCart from "../ShoppingCart"


const Navbar  = ()  => {
    const context = useContext(ShoppingCartContext)

    let activeStyle = "underline underline-offset-4"

    // sign out
    const signOut = localStorage.getItem('sign-out')
    const parsedSignOut = JSON.parse(signOut)
    const isUserSignOut = context.signOut || parsedSignOut
    //Account
    const account = localStorage.getItem('account')
    const parsedAccount = JSON.parse(account)
    // has an account 
    const noAccountInLocalStorage = parsedAccount ? Object.keys(parsedAccount).length === 0 : true
    const noAccountInLocalState = context.account ? Object.keys(context.account).length === 0 : true
    const hasUserAnAccount = !noAccountInLocalStorage || !noAccountInLocalState


    const handleSignOut = () => {
        const stringifiedSignOut = JSON.stringify(true)
        localStorage.getItem('sign-out', stringifiedSignOut)
        context.setSignOut(true)
    }

    const renderView = () => {
        if (hasUserAnAccount && !isUserSignOut) {
            return (
                <>
                    <li className='text-black/60'>
                        cinlo@cinlo.com
                    </li>
                    <li>
                        <NavLink
                            to='/my-orders'
                            className={({ isActive }) => isActive ? activeStyle : undefined}>
                            My Orders
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to='/my-account'
                            className={({ isActive }) => isActive ? activeStyle : undefined}>
                            My Account
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to='/sign-in'
                            className={({ isActive }) => isActive ? activeStyle : undefined}
                            onClick={() => handleSignOut()}>
                            Sign out
                        </NavLink>
                    </li>
                </>
            )
        } else {
            <li>
                <NavLink 
                    to='/sign-in'
                    onClick={() => handleSignOut()}
                    className={({ isActive }) => 
                    isActive ? activeStyle : undefined
                    }
                >
                    Sign Out
                </NavLink>
            </li>
        }
    }
    return (
        <nav className="flex justify-between items-center fixed z-10 w-full py-5 px-8 text-sm font-ligth top-0 bg-orange-200">
            <ul className="flex items-center gap-3">
                <li className="font-semibold text-lg">
                    <NavLink 
                        to={`${isUserSignOut ? '/sign-in' : '/'}`}
                        onClick={() => {context.setSearchByCategory(null)
                        }}
                        className={({ isActive }) => 
                            isActive ? activeStyle : undefined
                        } 
                    >
                        Shopi
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to='/'
                        onClick={() => {context.setSearchByCategory(null)
                        }}
                        className={({ isActive }) => 
                            isActive ? activeStyle : undefined
                        }
                    >
                        all
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to='/clothes'
                        onClick={() => context.setSearchByCategory('clothes')}
                        className={({ isActive }) => 
                        isActive ? activeStyle : undefined
                        }
                    >
                        Clothes
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to='/shoes'
                        onClick={() => context.setSearchByCategory('shoes')}
                        className={({ isActive }) => 
                        isActive ? activeStyle : undefined
                        }
                    >
                        Shoes
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to='/electronics'
                        onClick={() => context.setSearchByCategory('electronics')}
                        className={({ isActive }) => 
                        isActive ? activeStyle : undefined
                        }
                    >
                        Electronics
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to='/furnitures'
                        onClick={() => context.setSearchByCategory('furniture')}
                        className={({ isActive }) => 
                        isActive ? activeStyle : undefined
                        }
                    >
                        Furnitures
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to='/others'
                        onClick={() => context.setSearchByCategory('others')}
                        className={({ isActive }) => 
                        isActive ? activeStyle : undefined
                        }
                    >
                        Others
                    </NavLink>
                </li>
            </ul>
            <ul className="flex items-center gap-3">
                    { renderView()}
                <li className='flex gap-1 items-center'>  
                    <ShoppingCart />
                </li>
            </ul>
        </nav>
    ) 

}

export default Navbar;