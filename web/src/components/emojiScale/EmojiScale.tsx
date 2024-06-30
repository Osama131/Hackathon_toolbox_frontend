import React from 'react';
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { Button, Divider, Link } from "@nextui-org/react";
import { SadEmoji } from './emojis';
import { NeutralEmoji } from './emojis';
import { HappyEmoji } from './emojis';
import { useConfig } from 'nextra-theme-docs';


type EmojiScaleProps = {
    tutorialId: string;
};

// const EmojiScale: React.FC<EmojiScaleProps> = ({ tutorialId }) => {
const EmojiScale = () => {
    // fallback if props are not provided
    // if (!tutorialId) {
    const { title } = useConfig()
    const tutorialId = title;
    // tutorialId = title;
    // }

    const [selectedEmoji, setSelectedEmoji] = React.useState(100);

    const handleEmojiClick = (rating: number) => {
        setSelectedEmoji(rating);
        // Send the rating to the server
        fetch(`/hack-participant-kit/api/emojiScale`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ rating, tutorialId }),
        })
            .then(response => response.json())
            .catch((error) => {
                console.error('Error:', error);
            });
    };

    // use effect to fetch the rating from the server
    React.useEffect(() => {
        fetch(`/hack-participant-kit/api/emojiScale?tutorialId=${tutorialId}`)
            .then(response => response.json())
            .then(data => {
                if (data.rating) {
                    setSelectedEmoji(data.rating);
                }
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }, [tutorialId]);

    const buttonVariant = (rating: number) => {
        return selectedEmoji === rating ? "shadow" : "flat";
    }

    return (
        <Card>
            <CardHeader>How did you find this tutorial?</CardHeader>
            <CardBody>

                <div className="flex gap-x-1.5">
                    <Button isIconOnly color="primary" variant={buttonVariant(1)} onPress={() => handleEmojiClick(1)}>  <SadEmoji />      </Button>
                    <Button isIconOnly color="primary" variant={buttonVariant(2)} onPress={() => handleEmojiClick(2)}>   <NeutralEmoji />  </Button>
                    <Button isIconOnly color="primary" variant={buttonVariant(3)} onPress={() => handleEmojiClick(3)}>   <HappyEmoji />     </Button>
                </div>

            </CardBody>
            <Divider />
            <CardFooter>
                <span className="inline-block text-pretty">
                    Tell us more in the &nbsp; <Link href="#comments">comments</Link> &nbsp; below.
                </span>
            </CardFooter>
        </Card>
    );
};

export default EmojiScale;
