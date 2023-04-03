import React, { useState } from 'react';
import Link from '../Link/Link';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'

const Navbar = () => {
    const [open, setOpen] = useState(false);

    const routes = [
        { id: 1, name: "Home", path: "/" },
        { id: 2, name: "About", path: "/about" },
        { id: 3, name: "Products", path: "/products" },
        { id: 4, name: "Services", path: "/services" },
        { id: 5, name: "Contact", path: "/contact" }
    ];

    return (
        <nav className='bg-purple-400 py-4'>
            <div onClick={() => setOpen(!open)} className='md:hidden px-4'>
                <span>
                    {
                        open ?
                            <XMarkIcon className="h-6 w-6" />
                            : <Bars3Icon className="h-6 w-6" />
                    }
                </span>

            </div>
            <ul className={`md:flex gap-8 absolute md:static duration-500 ${open ? 'top-12' : '-top-80'} bg-purple-400 px-4`}>
                {
                    routes.map(route => <Link
                        key={route.id}
                        route={route}
                    ></Link>)
                }
            </ul>
        </nav>
    );
};

export default Navbar;