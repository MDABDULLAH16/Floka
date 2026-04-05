import React from 'react';
import Logo from '../Logo/Logo';
import DotLoader from '../DotLoader/SwapLoader';
 
const Navbar = () => {
    return (
      <div className="flex items-center justify-between p-4 gap-4 bg-gray-200 h-18.5 font-semibold">
        <Logo></Logo>
        <div className="flex flex-1 justify-between items-center mr-4">
          <a href="/">Home</a>
          <a href="/pages">Pages</a>
          <a href="/portfolio">Portfolio</a>
          <a href="/blog">Blog</a>
        </div>
        <div className="flex justify-baseline items-center gap-4 ml-16">
          <h2>Info@floka.com</h2>

          <span className="w-px h-6 bg-gray-300 mr-1 inline-block"></span>

          <DotLoader />
        </div>
      </div>
    );
};

export default Navbar;


