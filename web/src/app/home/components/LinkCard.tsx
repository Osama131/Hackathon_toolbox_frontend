"use client"

import Link from "next/link"
import { useEffect, useState } from "react"

const LinkCard = ({ title, active_description, inactive_description, to, newTab = true, startTime, endTime, uuid }: {
    title: string,
    to: string,
    active_description: string,
    inactive_description: string,
    uuid?: string,
    newTab?: boolean,
    startTime: Date,
    endTime: Date
}) => {

    const [active, setActive] = useState(false)
    const [accepted_cookie, setAccepted_cookie] = useState(typeof window !== 'undefined' ? localStorage.getItem('accepted_cookie') : null)
    const [final_to, setFinal_to] = useState(accepted_cookie ? `${to}?uuid=${uuid}` : to)

    useEffect(() => {
        const checkTime = () => {
            const now = new Date();
            setActive(now >= startTime && now <= endTime);
        };

        // Run immediately on mount
        checkTime();

        // Then run every 1/2 minute
        const intervalId = setInterval(checkTime, 30 * 1000);

        // Clean up on unmount
        return () => clearInterval(intervalId);
    }, [startTime, endTime]);

    useEffect(() => {
        function checkLocalStorageUpdate() {
            setAccepted_cookie(localStorage.getItem('accepted_cookie'));
            if (accepted_cookie === 'true') {
                setFinal_to(accepted_cookie ? `${to}?uuid=${uuid}` : to);
            }
        }

        checkLocalStorageUpdate()

        window.addEventListener('storage', checkLocalStorageUpdate);

        // Clean up on unmount
        return () => window.removeEventListener('storage', checkLocalStorageUpdate);

    }, [accepted_cookie, to, uuid]
    );

    const active_styling = "group rounded-lg border px-5 py-4 transition-colors border-neutral-700 bg-amber-600 hover:bg-[#EBE540]/50 shadow-xl text-white hover:text-black"
    const inactive_styling = "rounded-lg border px-5 py-4 transition-colors border-neutral-700 bg-inherit text-black"

    return (
        <Link
            href={final_to}
            className={active ? active_styling : inactive_styling}
            rel="noopener noreferrer"
            target={"_blank"}
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
        </Link>
    )
}

export default LinkCard
