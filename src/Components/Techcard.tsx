'use client';

import React, { useRef, useMemo } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';

function TechCard(props: { name: string; icon: string }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const randomDelay = useMemo(() => Math.random() * 0.6 + 0.2, []);

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: randomDelay }}
            className="bg-gradient-to-r from-pink-500 to-blue-500 p-[2px] rounded-lg md:w-full"
        >
            <div className="bg-[#1b1b1b] px-1 md:px-5 py-0 rounded-lg">
                <div
                    className="flex flex-col items-center justify-center p-1 border rounded-lg bg-[#1b1b1b] border-transparent hover:border-gradient-to-r from-pink-500 to-blue-500 transition duration-300 shadow-md group"
                >
                    <div className="p-3 rounded-md">
                        <Image
                            src={props.icon}
                            alt={props.name}
                            className="h-12 w-12 object-contain"
                        />
                    </div>
                    <p className="text-white text-sm mt-2">{props.name.toUpperCase()}</p>
                </div>
            </div>
        </motion.div>
    );
}

export default TechCard;
