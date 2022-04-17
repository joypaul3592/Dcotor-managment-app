import { Disclosure, Menu } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import { Link, NavLink, useLocation } from 'react-router-dom'




function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}
const Navbar = () => {

    const location = useLocation();


    return (
        <Disclosure
            as="nav" className=" bg-green-300 shadow-md sticky top-0 z-40">
            {({ open }) => (
                <>
                    <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                        <div className="relative flex items-center justify-between h-16">
                            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                {/* Mobile menu button*/}
                                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                    <span className="sr-only">Open main menu</span>
                                    {open ? (
                                        <XIcon className="block h-6 w-6" aria-hidden="true" />
                                    ) : (
                                        <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                                    )}
                                </Disclosure.Button>
                            </div>
                            <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-between">
                                <div>
                                    <Link className="flex-shrink-0 flex items-center " to={'/'}>
                                        <img
                                            className="block h-8 w-auto"
                                            src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                                            alt="Workflow"
                                        />
                                        <h1 className='text-3xl font-bold font-mono text-black mx-4'>Doc<span className=' text-blue-600'>Treat</span></h1>
                                    </Link>
                                </div>
                                <div className="hidden  sm:block sm:ml-6">
                                    <div className="flex space-x-4">
                                        <NavLink
                                            to={'/'}
                                            className={({ isActive }) => (`px-3 py-2 rounded-md text-xl font-medium ${isActive ? 'text-blue-500' : 'text-black'}`)}
                                        >Home</NavLink>
                                        <NavLink
                                            to={'service'}
                                            className={({ isActive }) => (`px-3 py-2 rounded-md text-xl font-medium ${isActive ? 'text-blue-500' : 'text-black'}`)}
                                        >Service</NavLink>
                                        <NavLink
                                            to={'blog'}
                                            className={({ isActive }) => (`px-3 py-2 rounded-md text-xl font-medium ${isActive ? 'text-blue-500' : 'text-black'}`)}
                                        >Blog</NavLink>
                                        <NavLink
                                            to={'about'}
                                            className={({ isActive }) => (`px-3 py-2 rounded-md text-xl font-medium ${isActive ? 'text-blue-500' : 'text-black'}`)}
                                        >About
                                        </NavLink>


                                        {
                                            location.pathname.includes('/signup') ? <NavLink
                                                to={'signup'}
                                                className={({ isActive }) => (`px-3 py-2 rounded-md text-xl font-medium ${isActive ? 'text-blue-500' : 'text-black'}`)}
                                            >SignUp</NavLink> : <NavLink
                                                to={'login'}
                                                className={({ isActive }) => (`px-3 py-2 rounded-md text-xl font-medium ${isActive ? 'text-blue-500' : 'text-black'}`)}
                                            >Login</NavLink>
                                        }
                                        {/* {
                                            user?.uid ? <NavLink
                                                to={'login'}
                                                onClick={() => { signOut(auth) }}
                                                className={({ isActive }) => (isActive ? 'text-blue-500 px-3 py-2 rounded-md text-xl font-medium ' : 'text-white px-3 py-2 rounded-md text-xl font-medium')}>LogOut</NavLink> :
                                    
                                        } */}

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <Disclosure.Panel className="sm:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1">
                            <NavLink
                                to={'/'}
                                className={({ isActive }) => (`px-3 py-2 rounded-md text-xl font-medium block ${isActive ? 'text-blue-500' : 'text-black'}`)}>Home</NavLink>
                            <NavLink
                                to={'about'}
                                className={({ isActive }) => (`px-3 py-2 rounded-md text-xl font-medium block ${isActive ? 'text-blue-500' : 'text-black'}`)}>About</NavLink>
                            <NavLink
                                to={'Cars'}
                                className={({ isActive }) => (`px-3 py-2 rounded-md text-xl font-medium block ${isActive ? 'text-blue-500' : 'text-black'}`)}>Cars</NavLink>
                            <NavLink
                                to={'login'}
                                className={({ isActive }) => (`px-3 py-2 rounded-md text-xl font-medium block ${isActive ? 'text-blue-500' : 'text-black'}`)}>Login</NavLink>
                        </div>
                    </Disclosure.Panel>
                </>
            )
            }
        </Disclosure >
    );
};

export default Navbar;