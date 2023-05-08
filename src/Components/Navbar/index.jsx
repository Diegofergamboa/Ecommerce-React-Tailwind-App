import { NavLink } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome/index.es'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { FaShoppingCart } from 'react-icons/fa'
import { useContext } from "react"
import { ShoppingCartContext } from "../../Context"

const Navbar = () => {
    const context = useContext(ShoppingCartContext)
    const activeStyle = 'underline underline-offset-2 text-blue-950'

    return (
        <nav className='bg-white/80 sticky flex flex-col justify-between p-1 w-full z-10 px-8 py-5 font-bold border-b-2 top-0'>
            <div className="flex items-center justify-between w-full lg:w-auto">
                <ul className='flex flex-col lg:flex-row lg:items-center gap-3'>
                    <li>
                        <NavLink
                            to='/'
                            className={({ isActive }) =>
                                isActive ? activeStyle : undefined
                            }>
                            <FontAwesomeIcon icon={faHome} />
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to='/all'
                            className={({ isActive }) =>
                                isActive ? activeStyle : undefined
                            }>
                            All
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to='/clothes'
                            className={({ isActive }) =>
                                isActive ? activeStyle : undefined
                            }>
                            Clothes
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to='/electronics'
                            className={({ isActive }) =>
                                isActive ? activeStyle : undefined
                            }>
                            Electronics
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to='/toys'
                            className={({ isActive }) =>
                                isActive ? activeStyle : undefined
                            }>
                            Toys
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to='/others'
                            className={({ isActive }) =>
                                isActive ? activeStyle : undefined
                            }>
                            Others
                        </NavLink>
                    </li>
                </ul>
                <ul className="flex flex-col lg:flex-row lg:items-center gap-3">
                    <li>
                        <NavLink>
                            Mail@mail.com
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to='/my-orders'
                            className={({ isActive }) =>
                                isActive ? activeStyle : undefined
                            }>
                            My Orders
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to='/sign-in'
                            className={(isActive) =>
                                isActive ? activeStyle : undefined
                            }>
                            Sign In
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to='/electronics'
                            className={({ isActive }) =>
                                isActive ? activeStyle : undefined
                            }>
                            Electronics
                        </NavLink>
                    </li>
                    <li>
                        <FaShoppingCart className="text-gray-800 text-2xl" /> {context.count}
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar