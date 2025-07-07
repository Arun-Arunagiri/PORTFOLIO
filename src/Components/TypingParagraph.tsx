import React, { useRef, useMemo } from 'react';
import { motion, useInView } from 'framer-motion';

// const paragraph = `Fully embracing the mindset of life-long learning, I'm a full stack developer with a strong passion for JavaScript, React, and everything web development. I’m driven by the unique blend of creativity, logic, and technology and the fact that there’s always something new to explore keeps my excitement alive.`;

const TypingParagraph = ({ text, className }: { text: string; className?: string }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const characters = useMemo(() => text.split(''), [text]);

    return (
        <p ref={ref} className={`text-white text-center leading-8 ${className}`}>
            {characters.map((char, i) => (
                <motion.span
                    key={i}
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ delay: i * 0.01, duration: 0.01 }}
                >
                    {char}
                </motion.span>
            ))}
        </p>
    );
};

export default TypingParagraph;