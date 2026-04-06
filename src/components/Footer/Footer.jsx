import React from 'react';

const Footer = () => {
    const year = new Date().getFullYear();
    return (
      <div className='text-center text-xl   font-semibold text-gray-600 py-10'>
        <h1>Copyright © {year} Floka</h1>
      </div>
    );
};

export default Footer;