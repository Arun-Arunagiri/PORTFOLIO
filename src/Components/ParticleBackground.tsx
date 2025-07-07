'use client';

import Particles, { initParticlesEngine } from '@tsparticles/react';
import { useEffect, useMemo, useState } from 'react';
import { loadSlim } from '@tsparticles/slim';
import type { Engine } from '@tsparticles/engine';
import type { Container, IOptions, RecursivePartial } from '@tsparticles/engine';

interface ParticlesComponentProps {
    id: string;
}

const ParticlesComponent: React.FC<ParticlesComponentProps> = ({ id }) => {
    const [init, setInit] = useState(false);

    useEffect(() => {
        initParticlesEngine(async (engine: Engine) => {
            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    // const particlesLoaded = (container: Container | undefined): void => {
    //     console.log(container);
    // };

    const options: RecursivePartial<IOptions> = useMemo(() => ({
        background: {
            color: {
                value: '#000000',
            },
        },
        fpsLimit: 120,
        interactivity: {
            events: {
                onClick: {
                    enable: true,
                    mode: 'attract',
                },
                onHover: {
                    enable: true,
                    mode: 'grab',
                },
            },
            modes: {
                push: {
                    distance: 200,
                    duration: 15,
                },
                grab: {
                    distance: 150,
                },
            },
        },
        particles: {
            color: {
                value: '#FFFFFF',
            },
            links: {
                color: '#FFFFFF',
                distance: 150,
                enable: true,
                opacity: 0.3,
                width: 1,
            },
            move: {
                direction: 'none',
                enable: true,
                outModes: {
                    default: 'bounce',
                },
                random: true,
                speed: 3,
                straight: false,
            },
            number: {
                density: {
                    enable: true,
                },
                value: 150,
            },
            opacity: {
                value: 1.0,
            },
            shape: {
                type: 'circle',
            },
            size: {
                value: { min: 1, max: 3 },
            },
        },
        detectRetina: true,
    }), []);

    return (
        <div className="absolute inset-0 -z-1">
            {init && <Particles id={id} options={options} />}
        </div>
    );
};

export default ParticlesComponent;
