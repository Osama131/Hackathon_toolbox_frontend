import React, { useState, useEffect } from 'react';
import { Input, Textarea } from "@nextui-org/input";
import { Button, ButtonGroup } from "@nextui-org/button";
import { genConfig, AvatarFullConfig } from 'react-nice-avatar'
import dynamic from 'next/dynamic'
const Avatar = dynamic(() => import('react-nice-avatar'), { ssr: false })

interface CommentBoxProps {
  tutorialId: string;
  onUpdate: Function;
}


// export const getServerSideProps = async (context: GetServerSidePropsContext) => {

//   // get "session" cookie to read user UUID
//   const cookies = parseCookies(context)
//   const uuid = cookies.session || ''

//   // Check if user already has an avatar saved in the database
//   const client: MongoClient = await clientPromise;
//   const db = client.db('comments');
//   const  avatarConfig = await db.collection('avatars').findOne({ uuid });

//   if (avatarConfig) {
//     // Directly return the avatarConfig if it matches the expected structure
//     return {
//       props: {
//         avatarConfig: avatarConfig,
//       },
//     };
//   } else {
//     // If no document is found, generate a new avatarConfig
//     const newAvatarConfig = genConfig();
//     await db.collection('avatars').insertOne({ uuid, avatarConfig: newAvatarConfig });

//     return {
//       props: {
//         avatarConfig: newAvatarConfig,
//       },
//     };
//   }
// };

// const NewComment: React.FC = () => {
//     const [comment, setComment] = useState('');

//     const handleCommentChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
//         setComment(event.target.value);
//     };

//     const handleSubmit = async () => {
//         // Example submission logic, replace URL and handling as needed
//         try {
//             const response = await fetch('/api/forumComment', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify({ comment }),
//             });

//             if (!response.ok) {
//                 throw new Error('Failed to submit comment');
//             }

//             console.log('Comment submitted: ', comment);
//         } catch (error) {
//               console.error('Error submitting comment: ', error);
//         }

//         setComment('');
//     };

//     return (
//         <div>
//             <textarea value={comment} onChange={handleCommentChange} />
//             <button onClick={handleSubmit}>Add Comment</button>
//         </div>
//     );
// };

// export default NewComment;


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


  // Avatar effect
  const [avatarConfig, setAvatarConfig] = useState<AvatarFullConfig | null>(null);
  useEffect(() => {
    // try to find user's avatarConfig in the local storage
    const avatarConfig = localStorage.getItem('avatarConfig');
    if (avatarConfig) {
      setAvatarConfig(JSON.parse(avatarConfig));
      return;
    }
    // if not found, generate a new avatarConfig and save it to the local storage, then store it on the server
    const newAvatarConfig = genConfig();
    setAvatarConfig(newAvatarConfig);
    localStorage.setItem('avatarConfig', JSON.stringify(newAvatarConfig));
    // post the new avatarConfig to the server
    fetch('/api/forumComment/avatar', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ userName: username, avatarConfig: newAvatarConfig }),
    });


    // // fetch the avatarConfig from the server
    // fetch('/api/forumComment/avatar')
    //   .then((res) => res.json())
    //   .then((data) => {
    //     if (data.avatarConfig){
    //       setAvatarConfig(data.avatarConfig);
    //     }else{
    //       // if no document is found, generate a new avatarConfig
    //       const newAvatarConfig = genConfig();
    //       setAvatarConfig(newAvatarConfig);
    //       // post the new avatarConfig to the server
    //       fetch('/api/forumComment/avatar', {
    //         method: 'POST',
    //         headers: {
    //           'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify({ avatarConfig: newAvatarConfig }),
    //       });
    //     }
    //   })
    //   .catch((error) => {
    //     console.error('Error fetching avatarConfig: ', error);
    //   });

    // // use a fixed avatarConfig for testing
    // const avatarConfig : AvatarFullConfig= {
    //   "sex": "woman",
    //   "faceColor": "#AC6651",
    //   "earSize": "big",
    //   "eyeStyle": "smile",
    //   "noseStyle": "long",
    //   "mouthStyle": "smile",
    //   "shirtStyle": "short",
    //   "glassesStyle": "none",
    //   "hairColor": "#FC909F",
    //   "hairStyle": "normal",
    //   "hatStyle": "none",
    //   "hatColor": "#D2EFF3",
    //   "eyeBrowStyle": "upWoman",
    //   "shirtColor": "#77311D",
    //   "bgColor": "#74D153"
    // }
    // setAvatarConfig(avatarConfig);

  }, []);


  // post the comment to the server
  const postComment = async () => {
    setLoading(true);
    try {
      const entry = { tutorialId: tutorialId, comment: comment, author: username, avatarConfig: avatarConfig};
      const response = await fetch('/api/forumComment/comments', {
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

  return (
    <div className="flex items-start space-x-4 p-4 border rounded-lg shadow-sm">
      <div className="flex-1" >
        <div className="flex space-x-2 px-2">
          <Avatar className="w-14 h-14" {...avatarConfig} />
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
