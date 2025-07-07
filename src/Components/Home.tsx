"use client";
import React from 'react'
import { Montserrat } from 'next/font/google';
import ParticleBackground from './ParticleBackground';
import Link from 'next/link';
import { motion } from 'framer-motion';

const montserrat = Montserrat({
    weight: '500',
    subsets: ['cyrillic']
})


function Home() {

    return (
        <div id='hero' className='relative min-h-screen '>
            <ParticleBackground id='particles' />
            <div className='relative flex flex-col items-center justify-center min-h-screen space-y-5 px-20 gap-6 '>
                <motion.p
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className={`text-5xl ${montserrat.className} text-white text-center leading-16 lg:leading-10`}>Hello, I&apos;m <span className='text-red-600'>Arunagiri</span>.
                </motion.p>
                <motion.p
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className={`text-5xl ${montserrat.className} text-white text-center  leading-16 lg:leading-0`}>I&apos;m a full stack web developer.
                </motion.p>


                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1 }}
                >
                    <Link href={'/#about'} className={`hover:animate-[var(--animation-pulse512)] border-2 border-red-600 ${montserrat.className} text-red-600 bg-transparent text-[20px] md:text-2xl px-2 py-2 focus:outline-none cursor-pointer transition-all duration-300`}>
                        View my works &#8595;
                    </Link>
                </motion.div>

            </div>
        </div>
    )
}

export default Home