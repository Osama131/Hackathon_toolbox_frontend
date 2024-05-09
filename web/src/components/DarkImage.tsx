import React from 'react';
import Image from 'next/image';
import '@/app/globals.css';
interface ImageProps {
    src: string;
    alt?: string;
}

export const LightImage: React.FC<ImageProps> = ({ src, alt = '' }) => {

    return (
        <div className="dark:hue-rotate-180 dark:invert border border-nuetral shadow">
            <img
                src={src} alt={alt}
                // height={0}
                // width={0}
            />
        </div>
    )
};

export const DarkImage: React.FC<ImageProps> = ({ src, alt = '' }) => {
    return (
        <div className="hue-rotate-180 invert border border-nuetral shadow">
            <img
                src={src} alt={alt}
                // height={0}
                // width={0} 
                />
        </div>
    )
};

export default LightImage;
