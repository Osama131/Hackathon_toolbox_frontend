import React from 'react';
import { AvatarFullConfig } from 'react-nice-avatar'
import { Card, CardHeader, CardBody, CardFooter, Divider, Textarea } from "@nextui-org/react";
import dynamic from 'next/dynamic'
const Avatar = dynamic(() => import('react-nice-avatar'), { ssr: false })

interface CommentProps {
    author: string;
    content: string;
    timestamp: Date;
    avatarConfig: AvatarFullConfig
}

const CommentCard: React.FC<CommentProps> = (
    {
        author,
        content,
        timestamp,
        avatarConfig
    }) => {


    timestamp = new Date(timestamp);
    const year = timestamp.getFullYear();
    const month = (timestamp.getMonth() + 1).toString().padStart(2, '0');
    const day = timestamp.getDate().toString().padStart(2, '0');
    const hour = timestamp.getHours().toString().padStart(2, '0');
    const minute = timestamp.getMinutes().toString().padStart(2, '0');

    const formattedTimestamp = `${year}-${month}-${day}  ${hour}:${minute}`;

    return (
        <a>
            <Card className="mb-1">
                <CardHeader className="flex gap-3">
                    <Avatar className="w-10 h-10" {...avatarConfig} />
                    <div className="flex-grow">
                        <p>
                            <strong>{author}</strong>
                        </p>
                        <p className='text-xs'>
                            {formattedTimestamp}
                        </p>
                    </div>
                </CardHeader>
                <Divider />
                <CardBody>
                    <p>
                        {content}
                    </p>
                </CardBody>
                {/* <CardFooter>
                </CardFooter> */}
            </Card>
        </a>
    );
};

export default CommentCard;
