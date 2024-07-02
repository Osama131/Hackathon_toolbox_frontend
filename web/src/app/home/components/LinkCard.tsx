"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";
import { getCookie, setCookie } from "cookies-next";

const LinkCard = ({ title, active_description, inactive_description, path, newTab = true, startTime, endTime }: {
    //link props
    title: string,
    active_description: string,
    inactive_description: string,
    newTab?: boolean,
    startTime: Date,
    endTime: Date,
    path: string
}) => {

    // link logic
    const now = new Date();
    const [active, setActive] = useState(now >= startTime && now <= endTime)

    const active_styling = "group rounded-lg border px-5 py-4 transition-colors border-neutral-700 bg-amber-600 hover:bg-[#EBE540]/50 shadow-xl text-white hover:text-black"
    const inactive_styling = "rounded-lg border px-5 py-4 transition-colors border-neutral-700 bg-inherit text-black"

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date();
            setActive(now >= startTime && now <= endTime)
        }, 1000)
        return () => clearInterval(interval)
    }, [])

    // cookie and uuid logic
    const default_uuid = "00000000-0000-0000-0000-000000000000"
    const key = 'accepted_cookie';

    // modal logic
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const [alreadyRejected, setAlreadyRejected] = useState<boolean>(false);


    const proceedWithLink = () => {
        let query_uuid = default_uuid;
        const storedValue = getCookie(key);
        if (storedValue === 'true') {
            const uuid: string = getCookie('session') as string;
            query_uuid = uuid
        }
        const query = {
            lang: 'en',
            uuid: query_uuid
        }
        window.open(path + "?" + new URLSearchParams(query).toString(), '_blank');
    }

    const handleOnClick = async (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        e.preventDefault();
        const storedValue = getCookie(key);
        if (storedValue === 'false' || !storedValue) {
            onOpen();
        } else {
            proceedWithLink();
        }

    }

    const onAccept = () => {
        setCookie(key, 'true', { maxAge: 2592000 });
        onOpenChange();
        proceedWithLink();
    }

    const onReject = () => {
        setCookie(key, 'false', { maxAge: 60 });
        setAlreadyRejected(true);
        onOpenChange();
        proceedWithLink();
    }

    return (

        <div className={active ? active_styling : inactive_styling}>
            <Modal isOpen={isOpen} onOpenChange={onOpenChange} isDismissable={false} isKeyboardDismissDisabled={false} hideCloseButton={true}>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">Can we connect your answers in pre and post questionnaires?</ModalHeader>
                            <ModalBody>
                                <p>
                                    For our research, we need to connect your answers in the pre and post questionnaires together and to the tutorials you view on this website.
                                    We can only do this with your consent to store a cookie on your device. The cookie will be stored for 30 days then it will be deleted automatically.
                                </p>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="danger" variant="light" onPress={onReject} size="sm">
                                    No!
                                </Button>
                                <Button color="primary" onPress={onAccept}>
                                    Yes
                                </Button>

                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
            < Link
                href={`${path}`}
                rel="noopener noreferrer"
                target={"_blank"}
                onClick={handleOnClick}
            >
                <h2 className={`mb-3 text-3xl md:text-5xl font-the-hand`}>
                    {title}{" "}
                    <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                        -&gt;
                    </span>
                </h2>
                <p className={`m-0 max-w-[30ch] text-xl md:text-3xl opacity-50 font-the-hand`}>
                    {active ? active_description : inactive_description}
                </p>
            </Link >
        </div>

    )
}

export default LinkCard
