import React, { useState } from 'react';
import Navbar from './Navbar/Navbar';
import { BeakerIcon , Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'

const Nav = () => {
    const [open, setOpen] =  useState(false)
    const routes = [
        {
            id: 1,
            name: 'Home',
            path: '/'
        },
        {
            id: 2,
            name: 'About',
            path: '/about'
        },
        {
            id: 3,
            name: 'Contact',
            path: '/contact'
        },
        {
            id: 4,
            name: 'Products',
            path: '/products'
        },
        {
            id: 5,
            name: 'Services',
            path: '/services'
        }
    ];
    return (
        <div >
            <nav className='bg-purple-500'>
                <div className='md:hidden' onClick={()=> setOpen(!open)}>
                    
                    <span>
                        {open == true ? <XMarkIcon className='h-6 w-6 text-black'/>
                         : <Bars3Icon  className="h-6 w-6 text-black" />}
                        </span>
                    
                
                
                
                </div>
           
                <ul className={`md:flex absolute bg-purple-500 md:static duration-500 pl-5 pb-5 hover:bg-purple-500 ${open ? 'top-6' : '-top-36'}`}>
                    {
                        routes.map(link => <Navbar link={link} key={link.id} ></Navbar>)
                    }
                </ul>
            </nav>
        </div>
    );
};

export default Nav;