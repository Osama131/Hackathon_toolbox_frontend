import React, { useState } from 'react';
import Markdown from 'react-markdown';
import TextareaAutosize from 'react-textarea-autosize';
import '@/app/globals.css';

interface MdParserProps {
    text: string;
}

const MdBlock: React.FC<MdParserProps> = ({ text }) => {
    return (
        <div className=" border-2 dark:border grid gap-5 w-full grid-cols-1 md:grid-cols-2">
            <div className="p-4 w-50">
                <h2 className="font-bold">Markdown</h2>
                <TextareaAutosize
                    className="border-2 rounded-md p-4 text-wrap w-full"
                    value={text}
                />
            </div>
            <div className="p-4 w-50">
                <h2 className="font-bold">Parsed Markdown</h2>
                <div className="prose dark:hue-rotate-180 dark:invert border-2 p-4 shadow-md">
                    <Markdown>{text}</Markdown>
                </div>
            </div>
        </div>
    );
};

export default MdBlock;
