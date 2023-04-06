import React from 'react';


const Navbar = ({link}) => {
    return (
        <>
        
        
        <li className='mr-12 hover:bg-purple-600'>
            <a href={link.path}>{link.name}</a>
        </li>
         
        </>
    );
};

export default Navbar;