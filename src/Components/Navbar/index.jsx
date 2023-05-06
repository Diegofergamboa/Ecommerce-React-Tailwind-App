import { NavLink } from "react-router-dom"

const Navbar = () => {
    const activeStyle = [
        'underline' ,
        'underline-offset-2',
        'text-red-950',
    ];

    return (
        <nav className='bg-transparent sticky flex justify-between p-1 w-full'>
            <ul className='flex justify-between p-1'>
                <li>
                    <NavLink
                        to='/'
                        className={( {isActive} ) =>
                            isActive ? activeStyle : undefined
                        }>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/all'
                        className={( {isActive} ) =>
                            isActive ? activeStyle : undefined
                        }>
                        All
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/clothes'
                        className={( {isActive} ) =>
                            isActive ? activeStyle : undefined
                        }>
                        Clothes
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/electronics'
                        className={( {isActive} ) =>
                            isActive ? activeStyle : undefined
                        }>
                        Electronics
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/toys'
                        className={( {isActive} ) =>
                            isActive ? activeStyle : undefined
                        }>
                        Toys
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/others'
                        className={( {isActive} ) =>
                            isActive ? activeStyle : undefined
                        }>
                        Others
                    </NavLink>
                </li>
            </ul>
            <ul className="flex justify-between p-1">
                <li>
                    <NavLink>
                        Mail@mail.com
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/my-orders'
                        className={( {isActive} ) =>
                            isActive ? activeStyle : undefined
                        }>
                        My Orders
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/sign-in'
                        className={( isActive ) =>
                            isActive ? activeStyle : undefined
                        }>
                        Sign In
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/electronics'
                        className={( {isActive} ) =>
                            isActive ? activeStyle : undefined
                        }>
                        Electronics
                    </NavLink>
                </li>
                <li>
                    Shopping Cart
                </li>
            </ul>
        </nav>
    )
}

export default Navbar