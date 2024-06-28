import React from 'react';
import Image from 'next/image';
import '@/app/globals.css';
interface ImageProps {
    src: string;
    alt?: string;
}

export const LightImage: React.FC<ImageProps> = ({ src, alt = '' }) => {
    const isLocal = src.startsWith('/');

    return (
        <div className="dark:hue-rotate-180 dark:invert border border-nuetral shadow">
            {isLocal ? (
                <img src={src} alt={alt} />
            ) : (
                <div style={{ position: 'relative' }}>
                    <img src={src} alt={alt} />
                    <div
                        style={{
                            position: 'absolute',
                            bottom: '0',
                            left: '0',
                            padding: '4px',
                            background: 'rgba(0, 0, 0, 0.5)',
                            color: 'white',
                            fontSize: '12px',
                        }}
                    >
                       Image from: {new URL(src).hostname}
                    </div>
                </div>
            )}
        </div>
    );
};

// export const DarkImage: React.FC<ImageProps> = ({ src, alt = '' }) => {
//     return (
//         <div className="hue-rotate-180 invert border border-nuetral shadow">
//             <img
//                 src={src} alt={alt}
//                 // height={0}
//                 // width={0} 
//                 />
//         </div>
//     )
// };

export default LightImage;
