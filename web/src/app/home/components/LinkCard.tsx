import Link from "next/link"


const LinkCard = ({ title, description, to, uuid, newTab = false, active = true, track_uuid = false }: {
    title: string,
    to: string,
    description: string,
    newTab?: boolean
    active?: boolean
    track_uuid?: boolean
    uuid?: string
}) => {

    const active_styling = "group rounded-none border px-5 py-4 transition-colors border-neutral-700 hover:bg-neutral-800/30"
    const inactive_styling = "group rounded-none border px-5 py-4 transition-colors border-neutral-700 bg-neutral-800/30"

    if (track_uuid) {
        to = `${to}&uuid=${uuid}`
    }
    const inactive_questionnaire_text = "Not available at the moment"


    return (
        <Link
            href={active ? to : ' '}
            className={active ? active_styling : inactive_styling}
            rel="noopener noreferrer"
            target={newTab && active ? "_blank" : undefined}
        >
            <h2 className={`mb-3 text-3xl md:text-5xl font-the-hand`}>
                {title}{" "}
                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                    -&gt;
                </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-xl md:text-3xl opacity-50 font-the-hand`}>
                {active ? description : inactive_questionnaire_text}
            </p>
        </Link>
    )
}

export default LinkCard
