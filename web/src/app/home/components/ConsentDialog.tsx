"use client"

import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";
import { use, useEffect } from "react"

type ConsentDialogProps = {
    onConsentAccepted: () => void;
}

const ConsentDialog = ({ onConsentAccepted }: ConsentDialogProps) => {

    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    
    useEffect(() => {
        const key = 'accepted_cookie';
        const storedValue = localStorage.getItem(key);
        if (storedValue === 'false' || storedValue === null) {
            onOpen();
        }
    }, [])

    const onAccept = () => {
        const key = 'accepted_cookie'; // Declare the variable key
        document.cookie = `${key}=true; max-age=2592000`;
        localStorage.setItem(key, 'true');
        onConsentAccepted();
        onOpenChange();
    }

    const onReject = () => {
        onOpenChange();
    }

    return (
        <Modal isOpen={isOpen} onOpenChange={onOpenChange} isDismissable={false} isKeyboardDismissDisabled={false} hideCloseButton={true}>
            <ModalContent>
                {(onClose) => (
                    <>
                        <ModalHeader className="flex flex-col gap-1">Have a cookie 🍪</ModalHeader>
                        <ModalBody>
                            <p>
                                We use a cookie to connect your pre-questionnaire and post-questionnaire answers to the tutorials you view on this website.
                                This will help us with our research.
                            </p>
                            <p>
                                Our research focuses on evaluating the effectivness of such a toolbox with tutuorials on the performace of participants in a Hackathon event.
                            </p>
                            <p>
                                We do not collect any personal data. The data we collect is anonymized and stored on a secure server. We will not share this data with any third party.
                            </p>
                            <p>
                                We need your consent to store this cookie on your device. The cookie will be stored for 30 days then it will be deleted automatically.
                            </p>
                        </ModalBody>
                        <ModalFooter>
                            <Button color="danger" variant="light" onPress={onReject} size="sm">
                                No! I do not want to help you with your research.
                            </Button>
                            <Button color="primary" onPress={onAccept}>
                                Sure 😊

                            </Button>

                        </ModalFooter>
                    </>
                )}
            </ModalContent>
        </Modal>
    )
}

export default ConsentDialog;
