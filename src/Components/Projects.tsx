"use client";
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Montserrat } from 'next/font/google';
const montserrat = Montserrat({
    weight: '800',
    subsets: ['cyrillic']
});
const montserrat2 = Montserrat({
    weight: '700',
    subsets: ['cyrillic']
});
const montserrat3 = Montserrat({
    weight: '500',
    subsets: ['cyrillic']
});

function Projects() {
    const ref1 = useRef(null);
    const inView1 = useInView(ref1, { once: true });

    const ref2 = useRef(null);
    const inView2 = useInView(ref2, { once: true });

    return (
        <div id='projects' className='flex flex-col items-center justify-center lg:min-h-screen mt-20 space-y-20'>
            <h2 className={`text-5xl ${montserrat.className} text-white relative inline-block`}>
                <span className="relative z-10">Projects</span>
                <span className="absolute left-9 -bottom-1 h-5 w-full bg-red-500 z-0"></span>
            </h2>

            {/* Project 1 */}
            <div className='flex flex-col justify-start lg:min-h-screen w-full'>
                <motion.div
                    whileHover={{ scale: 0.98 }}
                    transition={{ duration: 0.3 }}
                    className='relative bg-blue-800 lg:min-h-[50vh] self-start rounded-r-2xl'>
                    <img src="/images/Iot.png" alt="" className='mr-15 lg:mr-30 my-15 lg:my-10 w-[50vw] rounded-r-2xl' />
                    <motion.div
                        ref={ref1}
                        initial={{ opacity: 0, x: -100 }}
                        animate={inView1 ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6 }}
                        className='absolute -right-30 top-0 md:-right-70 md:top-15 lg:-right-90 lg:top-50 w-[40vw] lg:w-[30vw]'
                    >
                        <p className={`text-white md:text-4xl ${montserrat2.className}`}>IoT BASED SMART HOME</p>
                        <p className={`text-white md:text-2xl ${montserrat2.className} mb-4`}>Control Appliances on Mobile</p>
                        <p className={`text-white text-[12px] ${montserrat3.className} text-1xl`}>Turning homes into smart homes by implementing IoT appliances using NodeMCU 8266 and Blynk IoT Platform.</p>
                    </motion.div>
                </motion.div>
            </div>

            {/* Project 2 */}
            <div className='flex flex-col justify-start lg:min-h-screen w-full'>
                <motion.div
                    whileHover={{ scale: 0.98 }}
                    transition={{ duration: 0.3 }}
                    className='relative bg-blue-800 md:min-h-[50vh] self-end rounded-l-2xl'>
                    <div className='flex justify-evenly bg-white py-15 ml-15 lg:ml-30 my-15 md:my-10 w-[50vw] rounded-l-2xl'>
                        <img src="/images/chat1.jpg" alt="" className='h-[20vh] md:h-[40vh] lg:h-[60vh] ' />
                        <img src="/images/chat2.jpg" alt="" className='h-[20vh] md:h-[40vh] lg:h-[60vh] border-2 rounded-[8]' />
                    </div>
                    <motion.div
                        ref={ref2}
                        initial={{ opacity: 0, x: 100 }}
                        animate={inView2 ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6 }}
                        className='absolute -left-30 top-0 md:-left-70 md:top-15 lg:-left-90 lg:top-50 w-[40vw] lg:w-[30vw]'
                    >
                        <p className={`text-white md:text-3xl ${montserrat2.className} text-right`}>MOBILE CHAT APPLICATION</p>
                        <p className={`text-white md:text-2xl ${montserrat2.className} mb-4 text-right`}>Simple Chatting Application</p>
                        <p className={`text-white text-[12px] ${montserrat3.className} text-right`}>Sent Messages to friends via Mobile application created by using Flutter Framework and Firebase Database</p>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
}

export default Projects;
