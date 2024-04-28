import React, { useState } from 'react';
import Markdown from 'react-markdown'

interface MdParserProps {
    text: string;
}

const MdBlock: React.FC<MdParserProps> = ({ text }) => {
    const [showHtml, setShowHtml] = useState(false);

    const toggleShowHtml = () => {
        setShowHtml(!showHtml);
    };

    return (
        <div>
            <div>
                <h2>Unparsed Text</h2>
                <pre>{text}</pre>
            </div>
            <div>
                <h2>Parsed Markdown</h2>
                <button onClick={toggleShowHtml}>
                    {showHtml ? 'Show Graphics' : 'Show HTML'}
                </button>
                {showHtml ? (
                    <div dangerouslySetInnerHTML={{ __html: text }} />
                ) : (
                    <Markdown>{text}</Markdown>
                )}
            </div>
        </div>
    );
};

export default MdBlock;
