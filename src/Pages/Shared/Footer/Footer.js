import React from 'react';

const Footer = () => {
    const today = new Date()
    const year = today.getFullYear()
    return (
        <footer className='text-center m-5'>
            <h6 >copyright © {year}</h6>
        </footer>
    );
};

export default Footer;