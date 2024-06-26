"use client"

import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";
import { useState, useEffect } from "react"

const ConsentDialog = () => {

    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const accepted_cookie = "accepted_cookie"; // Declare the variable accepted_cookie

    useEffect(() => {
        if (typeof window !== 'undefined') {
            if (localStorage.getItem(accepted_cookie) !== null) {
                if (localStorage.getItem(accepted_cookie) === 'false') { onOpen(); }
            }
        }
        else { onOpen(); }
    }, [typeof window !== 'undefined' ? localStorage.getItem(accepted_cookie) : null])

    const onAccept = () => {
        const key = 'accepted_cookie'; // Declare the variable key
        document.cookie = "accepted_cookie=true; max-age=2592000";
        localStorage.setItem(key, 'true');
        window.dispatchEvent(new StorageEvent('storage', {
            key: key, // Use the declared variable key
            newValue: 'true',
            oldValue: 'false',
            storageArea: localStorage
        }));
        //reload the page to update the links
        // window.location.reload();
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
