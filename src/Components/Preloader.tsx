" use client"
import react, { useState, useEffect } from 'react';
import Image from 'next/image';
import preloaderImg from '../Images/Untitled design (2).svg'

type PreloaderProps = {
    closeDelay?: number;
};

const Preloader: React.FC<PreloaderProps> = ({ closeDelay = 13000 }) => {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const timeout = setTimeout(() => setIsVisible(false), closeDelay);
        return () => clearTimeout(timeout);
    }, []);

    return (
        <div
            className="fixed top-0 left-0 w-full h-full bg-main-color-white flex items-center justify-center z-[9999]"
            style={{ visibility: isVisible ? 'visible' : 'hidden' }}
        >
            <Image
                src={preloaderImg}
                alt="Portfolio Preloader"
                layout="fixed"
                width={300}
                height={300}
                objectFit="cover"
                className="loading"
            />
        </div>
    );
};

export default Preloader;
