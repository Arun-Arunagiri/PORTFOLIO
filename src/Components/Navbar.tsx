'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({
    weight: '700',
    subsets: ['cyrillic']
})

function Navbar() {
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const heroHeight = document.getElementById('hero')?.offsetHeight || 600;
            setIsSticky(window.scrollY > heroHeight - 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div
            className={`transition-all bg-[#282828] duration-300 z-50 md:pr-4 lg:pr-10 w-full mb-5 ${isSticky
                    ? 'fixed top-0 bg-[#282828] shadow-[0_4px_10px_0_rgba(0,0,0,0.7)]'
                    : ''
                }`}
        >
            <div className={`flex justify-center md:justify-end items-center space-x-5  min-h-14 text-white text-[10px] md:text-[14px] lg:text-[18px] ${montserrat.className} font-bold`}>
                <Link className='hover:text-red-500 focus:outline-none' href="/#hero">Home</Link>
                <Link className='hover:text-red-500 focus:outline-none' href="/#about">About</Link>
                <Link className='hover:text-red-500 focus:outline-none' href="/#projects">Projects</Link>
                <Link className='hover:text-red-500 focus:outline-none' href="/#contact">Contact</Link>
                <a href='/Resume.pdf' download="Arunagiri_Resume.pdf"  className='hover:text-red-500 cursor-pointer focus:outline-none'>Download Resume</a>
            </div>
        </div>
    );
}

export default Navbar;
