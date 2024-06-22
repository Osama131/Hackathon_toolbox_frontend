import React, { useState } from 'react';
import Comment from './Comment';
import NewComment from './NewComment';

interface CommentData {
    id: number;
    text: string;
}

const Forum: React.FC = () => {
    const [comments, setComments] = useState<CommentData[]>([]);

    const addComment = (text: string) => {
        const newComment: CommentData = {
            id: comments.length + 1,
            text: text,
        };
        setComments([...comments, newComment]);
    };

    return (
        <div>
            <h1>Discussion Forum</h1>
            <div>
                <h2>Comments</h2>
                {comments.map((comment) => (
                    <Comment key={comment.id} text={comment.text} />
                ))}
            </div>
            <div>
                <h2>Add a New Comment</h2>
                <NewComment onAddComment={addComment} />
            </div>
        </div>
    );
};

export default Forum;
