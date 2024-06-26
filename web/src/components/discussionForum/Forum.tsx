import React, { useState, useEffect } from 'react';
import Comment from './Comment';
import CommentBox from './CommentBox';


interface ForumProps {
    tutorialId: string;
}

const Forum: React.FC<ForumProps> = ({ tutorialId }) => {

    const [comments, setComments] = useState<any[]>([]);

    const refresh = () => {
        // fetch comments
        fetch(`/hack-participant-kit/api/forumComment/comments?tutorialId=${tutorialId}`, { method: 'GET' })
            .then((response) => response.json())
            .then((data) => {
                setComments(data.comments);
            });
    }

    // use effect to fetch comments on page load
    useEffect(() => {
        refresh();
    }, []);


    return (
        <div>
            <div
                className="py-2"
            >
                {comments.map((comment, index) => (
                    <Comment
                        key={comment.id || index}
                        author={comment.author}
                        content={comment.comment}
                        timestamp={comment.timestamp}
                        avatarConfig={comment.avatarConfig}
                    />
                ))}
            </div>


            <CommentBox tutorialId={tutorialId} onUpdate={() => refresh()} />

        </div >
    );
};

export default Forum;
