import React from 'react';

interface CommentProps {
    author: string;
    content: string;
    timestamp: string;
}

const Comment: React.FC<CommentProps> = ({ author, content, timestamp }) => {
    return (
        <div className="comment">
            <div className="comment-author">{author}</div>
            <div className="comment-content">{content}</div>
            <div className="comment-timestamp">{timestamp}</div>
        </div>
    );
};

export default Comment;
