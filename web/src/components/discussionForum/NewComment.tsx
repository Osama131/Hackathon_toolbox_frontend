import React, { useState } from 'react';

const NewComment: React.FC = () => {
    const [comment, setComment] = useState('');

    const handleCommentChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setComment(event.target.value);
    };

    const handleSubmit = async () => {
        // Example submission logic, replace URL and handling as needed
        try {
            const response = await fetch('/api/forumComment', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ comment }),
            });

            if (!response.ok) {
                throw new Error('Failed to submit comment');
            }

            console.log('Comment submitted: ', comment);
        } catch (error) {
            console.error('Error submitting comment: ', error);
        }

        setComment('');
    };

    return (
        <div>
            <textarea value={comment} onChange={handleCommentChange} />
            <button onClick={handleSubmit}>Add Comment</button>
        </div>
    );
};

export default NewComment;
