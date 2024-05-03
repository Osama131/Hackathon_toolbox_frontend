import React from 'react';
import Image from 'next/image';
import '../../../src/app/globals.css';
interface ImageProps {
    src: string;
    alt?: string;
}

export const LightImage: React.FC<ImageProps> = ({ src, alt = '' }) => {
    return (
        <div className="dark:hue-rotate-180 dark:invert">
            <Image src={src} alt={alt} />
        </div>
    )
};

export const DarkImage: React.FC<ImageProps> = ({ src, alt = '' }) => {
    return (
        <div className="hue-rotate-180 invert">
            <Image src={src} alt={alt} />
        </div>
    )
};

export default LightImage;
