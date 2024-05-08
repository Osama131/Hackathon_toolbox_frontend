"use client"

import React, { useState } from 'react';
import Markdown from 'react-markdown';
import TextareaAutosize from 'react-textarea-autosize';

const MdPlayground: React.FC = () => {
    const [text, setText] = useState<string>(`
## Our playground
This is a markdown playground. You can edit the markdown text and see how it renders in real-time.
`);

    return (
        <div className="flex flex-col md:flex-row p-4 border bg-white dark:bg-gray-800 rounded-lg shadow-md">
            <TextareaAutosize
                className="w-full md:w-1/2 p-4 border border-gray-300 rounded-lg shadow-inner dark:bg-gray-700 dark:text-white resize-none overflow-auto"
                value={text}
                onChange={(e) => setText(e.target.value)}
                minRows={3}
                maxRows={15}
            />
            <div className="prose dark:hue-rotate-180 dark:invert mb-4 md:mb-0 md:mr-4 md:w-1/2">
                <Markdown>{text}</Markdown>
            </div>
        </div>
    );
}

export default MdPlayground;
