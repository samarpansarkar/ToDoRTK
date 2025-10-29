import { Link, NavLink, Outlet, } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <header className="lg:px-16 px-4 bg-white flex flex-wrap items-center py-4 shadow-xl">
                <div className="flex-1 flex justify-between items-center">
                    <Link to="/" className="text-3xl">WorkTODO</Link>
                </div>
                <div className="hidden md:flex md:items-center md:w-auto w-full" id="menu">
                    <nav>
                        <ul className="md:flex items-center justify-between text-base text-gray-700 pt-4 md:pt-0">
                            <li><NavLink className="md:p-4 py-3 px-0 block" to="/add">Add Task</NavLink></li>
                            <li><NavLink className="md:p-4 py-3 px-0 block" to="/"></NavLink></li>
                            <li><NavLink className="md:p-4 py-3 px-0 block" to="/">Contact US</NavLink></li>
                            <li><NavLink className="md:p-4 py-3 px-0 block md:mb-0 mb-2" to="/">Contact Us</NavLink></li>
                        </ul>
                    </nav>
                </div>
            </header>
            {<Outlet />}
        </>
    )
}

export default Navbar