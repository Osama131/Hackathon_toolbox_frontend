import React, { useState, useEffect } from 'react';
import { Input, Textarea } from "@nextui-org/input";
import { Button, ButtonGroup } from "@nextui-org/button";
import { genConfig, AvatarFullConfig } from 'react-nice-avatar'
import dynamic from 'next/dynamic'
const Avatar = dynamic(() => import('react-nice-avatar'), { ssr: false })
import { Reload } from "./reload"

interface CommentBoxProps {
  tutorialId: string;
  onUpdate: Function;
}

const CommentBox: React.FC<CommentBoxProps> = ({ tutorialId, onUpdate }) => {
  // export const CommentBox = () => {

  //get the avatarConfig from the server "/api/forumComment/avatar" route
  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState<string>(() => {
    // Check if window is defined
    if (typeof window !== "undefined") {
      const storedUsername = localStorage.getItem('username');
      return storedUsername ? storedUsername : '';
    }
    return '';
  });
  // hook for the comment
  const [comment, setComment] = useState('');
  const handleCommentChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setComment(event.target.value);
  };

  //username effect
  useEffect(() => {
    localStorage.setItem('username', username);
  }, [username]);

  const generateNewAvatar = async () => {
    // if not found, generate a new avatarConfig and save it to the local storage, then store it on the server
    const newAvatarConfig = genConfig();
    setAvatarConfig(newAvatarConfig);
    localStorage.setItem('avatarConfig', JSON.stringify(newAvatarConfig));
    // post the new avatarConfig to the server
    await fetch(`/hack-participant-kit/api/forumComment/avatar`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ userName: username, avatarConfig: newAvatarConfig }),
    });
  }

  // Avatar effect
  const [avatarConfig, setAvatarConfig] = useState<AvatarFullConfig | null>(null);

  useEffect(() => {
    // try to find user's avatarConfig in the local storage
    const avatarConfig = localStorage.getItem('avatarConfig');
    if (avatarConfig) {
      setAvatarConfig(JSON.parse(avatarConfig));
      return;
    } else {
      generateNewAvatar();
    }
  }, []);

  // post the comment to the server
  const postComment = async () => {
    setLoading(true);
    try {
      const entry = { tutorialId: tutorialId, comment: comment, author: username, avatarConfig: avatarConfig };
      const response = await fetch(`/hack-participant-kit/api/forumComment/comments`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(entry),
      });

      if (!response.ok) {
        throw new Error('Failed to submit comment');
      }
    } catch (error) {
      console.error('Error submitting comment: ', error);
    }
    onUpdate()
    setComment('');
    setLoading(false);
  };


  const onAvatarClicked = async () => {
    await generateNewAvatar();
    onUpdate()
  }

  return (
    <div className="flex items-start space-x-4 p-4 border rounded-lg shadow-sm">
      <div className="flex-1" >
        <div className="flex space-x-2 px-2">
          <div className="relative w-14 h-14" onClick={onAvatarClicked} >
            <div className="absolute z-10 hover:z-30 rounded-full hover:bg-black/50 w-full h-full ">
              <Reload className="fill-white w-1/2 m-auto mt-4 " />
            </div>
            <Avatar className="absolute w-full h-full z-20 hover:z-0" {...avatarConfig} />
          </div>
          <Input
            className=''
            type="Name" variant="bordered" label="Name" placeholder="Anonymous" value={username} onValueChange={(value) => setUsername(value)}
          />
        </div>

        <Textarea
          className="w-full p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Share your thoughts ..."
          value={comment} // Bind the textarea's value to the state
          onValueChange={(value) => setComment(value)}
          label="Comment"
          isRequired
        />
      </div>
      <div className="flex items-center space-x-2">
        <Button
          color='primary'
          className="px-2 py-2"
          isLoading={loading}
          onClick={postComment}
        >
          Post
        </Button >
      </div>
    </div>
  );
};

export default CommentBox;
