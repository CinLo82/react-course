import { NavLink } from "react-router-dom"
import { useContext } from "react"
import { ShoppingBagIcon } from '@heroicons/react/24/solid'
import { ShoppingCartContext } from "../../Context"


const Navbar  = ()  => {
    const context = useContext(ShoppingCartContext)

    let activeStyle = "underline underline-offset-4"

    return (
        <nav className="flex justify-between items-center fixed z-10 w-full py-5 px-8 text-sm font-ligth top-0 bg-gray-200">
            <ul className="flex items-center gap-3">
                <li className="font-semibold text-lg">
                    <NavLink 
                        to='/'
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
                <li className="text-black/60">
                    cinlo@gmail.com
                </li>
                <li>
                    <NavLink 
                        to='/my-orders'
                        className={({ isActive }) => 
                        isActive ? activeStyle : undefined                                  
                        }
                    >
                        My Orders
                    </NavLink>
                </li>
                <li>
                    < NavLink 
                        to='/my-accound'
                        className={({ isActive }) => 
                        isActive ? activeStyle : undefined
                        }
                    >
                        My Accound
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to='/sign-in'
                        className={({ isActive }) => 
                        isActive ? activeStyle : undefined
                        }
                    >
                        Sign In
                    </NavLink>
                </li>
                <li className='flex gap-1 items-center'>  
                    <ShoppingBagIcon className='h-6 w-6 text-red-300 ' /> {context.cartProducts.length}
                </li>
            </ul>
        </nav>
    )
}
 

export default Navbar;