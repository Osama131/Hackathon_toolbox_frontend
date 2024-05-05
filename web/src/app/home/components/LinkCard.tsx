import Link from "next/link"

const LinkCard = ({title, description, to}:{
    title: string,
    to: string,
    description: string,
}) => {
  return (
    <Link
        href={to}
        className="group rounded-none border px-5 py-4 transition-colors border-neutral-700 hover:bg-neutral-800/30"
        rel="noopener noreferrer"
    >
        <h2 className={`mb-3 text-3xl md:text-5xl font-the-hand`}>
            {title}{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
            </span>
        </h2>
        <p className={`m-0 max-w-[30ch] text-xl md:text-3xl opacity-50 font-the-hand`}>
            {description}
        </p>
    </Link>
  )
}

export default LinkCard
