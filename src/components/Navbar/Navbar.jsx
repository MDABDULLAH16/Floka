import React from 'react';
import Logo from '../Logo/Logo';
import DotLoader from '../DotLoader/SwapLoader';
 
const Navbar = () => {
    return (
        <div className="flex items-center justify-between p-4 gap-4 bg-gray-200">
            <Logo></Logo>
            <div className='flex flex-1 justify-between items-center '>
                <a href="/">Home</a>
                <a href="/pages">Pages</a>
                <a href="/portfolio">Portfolio</a>
                <a href="/blog">Blog</a>
            </div>
            <div className='flex
            items-center gap-4'>
                <h2>Info@floka.com</h2>
                <DotLoader></DotLoader>
            </div>
        </div>
    );
};

export default Navbar;