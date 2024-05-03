import React, { useState } from 'react';
import Markdown from 'react-markdown';
import '../../../src/app/globals.css';

interface MdParserProps {
    text: string;
}

const MdBlock: React.FC<MdParserProps> = ({ text }) => {
    const [showHtml, setShowHtml] = useState(false);

    const toggleShowHtml = () => {
        setShowHtml(!showHtml);
    };

    // return (
    //     <div>
    //         <div>
    //             <h2>Markdown</h2>
    //             <pre>{text}</pre>
    //         </div>
    //         <div>
    //             <h2>Parsed Markdown</h2>
    //             <button onClick={toggleShowHtml}>
    //                 {showHtml ? 'Show Graphics' : 'Show HTML'}
    //             </button>

    //             {showHtml ? (<pre>  <Markdown>{text}</Markdown> </pre>
    //             ) : (
    //                 <Markdown>{text}</Markdown>
    //             )}
    //         </div>
    //     </div>
    // );
    return (
        <div className="p-4 border border-gray-300">
            <div className="flex border">
                <div className="w-1/2 pr-4">
                    <h2 className="font-bold">Markdown</h2>
                    <pre>{text}</pre>
                </div>
                <div className="w-1/2 pl-4 border">
                    <h2 className="font-bold">Parsed Markdown</h2>
                    <button onClick={toggleShowHtml} className="mb-2">
                        {showHtml ? 'Show Graphics' : 'Show HTML'}
                    </button>

                    {showHtml ? (
                        <pre className="bg-gray50 p-2">
                            <Markdown>{text}</Markdown>
                        </pre>
                    ) : (
                        <Markdown>{text}</Markdown>
                    )}
                </div>
            </div>
        </div>
    );
};

export default MdBlock;
