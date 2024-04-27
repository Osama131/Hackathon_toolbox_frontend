import React from 'react';
// import styles from './darkImage.module.css';

interface ImageProps {
    src: string;
    alt?: string;
}

export const LightImage: React.FC<ImageProps> = ({ src, alt }) => {
    return (
        <div className="dark:filter hue-rotate-180 invert">
            <img src={src} alt={alt} />
        </div>
    )
};

export const DarkImage: React.FC<ImageProps> = ({ src, alt }) => {
    return (
        <div>
            <img src={src} alt={alt} />
        </div>
    )
};
