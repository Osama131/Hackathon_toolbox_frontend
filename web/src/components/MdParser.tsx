import React, { useState } from 'react';
import Markdown from 'react-markdown';
import '@/app/globals.css';

interface MdParserProps {
    text: string;
}

const MdBlock: React.FC<MdParserProps> = ({ text }) => {
    return (
        <div className="flex flex-col md:flex-row p-4 border border-gray-300">
            <div className="w-1/2 pr-4">
            <h2 className="font-bold">Markdown</h2>
                <pre>{text}</pre>
            </div>
            <div className="w-1/2 pl-4 border">
            <h2 className="font-bold">Parsed Markdown</h2>
                <div className="prose dark:hue-rotate-180 dark:invert">
                    <Markdown>{text}</Markdown>
                </div>
            </div>
        </div>
    );
};

export default MdBlock;
