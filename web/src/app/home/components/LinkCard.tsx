"use client"

import Link from "next/link"
import { useEffect, useState } from "react"

const LinkCard = ({ title, active_description, inactive_description, href, newTab = true, startTime, endTime }: {
    title: string,
    active_description: string,
    inactive_description: string,
    newTab?: boolean,
    startTime: Date,
    endTime: Date,
    href: {
        pathname: string;
        query: {
            lang: string;
            uuid: string;
        }
    }
}) => {


    const now = new Date();
    const [active, setActive] = useState(now >= startTime && now <= endTime)

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date();
            setActive(now >= startTime && now <= endTime)
        }, 1000)
        return () => clearInterval(interval)
    }, [])

    const active_styling = "group rounded-lg border px-5 py-4 transition-colors border-neutral-700 bg-amber-600 hover:bg-[#EBE540]/50 shadow-xl text-white hover:text-black"
    const inactive_styling = "rounded-lg border px-5 py-4 transition-colors border-neutral-700 bg-inherit text-black"

    return (
        <Link
            href={href}
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
