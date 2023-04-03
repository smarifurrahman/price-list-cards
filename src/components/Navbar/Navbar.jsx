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
        <nav>
            <div onClick={() => setOpen(!open)}>
                <span>
                    {
                        open ?
                            <XMarkIcon className="h-6 w-6" />
                            : <Bars3Icon className="h-6 w-6" />
                    }
                </span>

            </div>
            <ul className='md:flex gap-8'>
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