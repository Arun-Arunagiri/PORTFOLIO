"use client";
import React, { useRef } from 'react';
import Image from 'next/image';
import { Montserrat } from 'next/font/google';
import TypingParagraph from './TypingParagraph';
import TechCard from './Techcard';
import { motion, useInView } from 'framer-motion';

const montserrat = Montserrat({
    weight: '800',
    subsets: ['cyrillic']
});
const montserrat2 = Montserrat({
    weight: '600',
    subsets: ['cyrillic']
});

function About() {
    const sectionRef = useRef(null);

    const photoRef = useRef(null);
    const isPhotoInView = useInView(photoRef, { once: true });

    const paragraph = "Fully embracing the mindset of life-long learning, I'm a full stack developer with a strong passion for JavaScript, React, and everything web development. I’m driven by the unique blend of creativity, logic, and technology and the fact that there’s always something new to explore keeps my excitement alive.";

    return (
        <div
            ref={sectionRef}
            className='flex flex-col bg-transparent items-center justify-center min-h-[50vh] space-y-5'
        >
            <h2 className={`text-5xl font-extrabold ${montserrat.className} text-white relative inline-block`}>
                <span className="relative z-10">About</span>
                <span className="absolute left-9 -bottom-1 h-5 w-full bg-red-500 z-0"></span>
            </h2>

            <div className='lg:flex mt-10 lg:mt-0'>
                <div className='flex flex-col md:w-[45vw] items-center justify-center md:px-10 space-y-10'>
                    {/* ✅ Scroll-animated Profile Photo Box */}
                    <motion.div
                        ref={photoRef}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isPhotoInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className='bg-gradient-to-r from-pink-500 to-blue-500 p-[2px] rounded-lg'
                    >
                        {/* PROFILE PHOTO */}
                        <Image className='h-75 bg-[#1b1b1b] rounded-lg' src="/images/profile.png" alt="Profile" />
                    </motion.div>

                    <TypingParagraph text={paragraph} className={montserrat2.className} />

                </div>

                <div className='bg-transparent md:w-[45vw] mt-10 lg:mt-0'>
                    <div className="lg:min-h-screen md:flex items-center justify-center">
                        <div className={`flex flex-row gap-6 items-center justify-center ${montserrat2.className}`}>
                            <div className="flex flex-col gap-6">
                                <TechCard name="HTML" icon="/images/html.png" />
                                <TechCard name="React" icon="/images/react.png" />
                                <TechCard name="Express.js" icon="/images/express.png" />
                            </div>
                            <div className="flex flex-col gap-6">
                                <TechCard name="JavaScript" icon="/images/js.png" />
                                <TechCard name="CSS" icon="/images/css.png" />
                                <TechCard name="MongoDB" icon="/images/mongo.png" />
                                <TechCard name="Git" icon="/images/git.png" />
                            </div>
                            <div className="flex flex-col gap-6">
                                <TechCard name="Tailwind" icon="/images/tailwind.png" />
                                <TechCard name="Next.js" icon="/images/next.png" />
                                <TechCard name="Node.js" icon="/images/node.png" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
