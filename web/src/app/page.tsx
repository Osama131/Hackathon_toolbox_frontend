import Image from "next/image";
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between dark min-w-screen">
      <section className="h-screen flex bg-[#17376e] w-full relative overflow-x-hidden">
        <Image
          width="0"
          height="0"
          sizes="100vw"
          alt="the de-tel book"
          className="background w-1/2 h-auto z-10"
          src="https://ea-tel.eu/detel-book/assets/images/Cover.png"
        />
        <div className="background bg-[#FFA911] absolute top-0 left-0 w-3/4 h-screen"></div>
        <div className="background -skew-x-[30deg] border-white border-l-[20px] box-content bg-[#17376e] h-screen z-10 absolute right-0 bottom-0 w-1/2 flex flex-col justify-end overflow-clip">

          <Image
            width="0"
            height="0"
            sizes="100vw"
            alt="jTELSS"
            className="w-full h-auto scale-150 -translate-y-1/2 skew-x-[30deg]"
            src="https://ea-tel.eu/wp-content/uploads/JTELSS-brand-logo-Gforms-4x1-1-1536x413.png"
          />

        </div>
      </section>


      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <Link
          href="/git_intro"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Tutorials{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
           Review current tutorials (Draft only!!)
          </p>
        </Link>
      </div>
    </main>
  );
}
