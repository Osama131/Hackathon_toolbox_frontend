import Image from 'next/image'

const Landing = () => {
  return (
    <section className="h-screen flex bg-accent-navy w-full relative overflow-x-hidden">
        <Image
          width="0"
          height="0"
          sizes="100vw"
          alt="the de-tel book"
          className="background w-1/2 h-auto z-10"
          src="https://ea-tel.eu/detel-book/assets/images/Cover.png"
        />
        <div className="background bg-accent-orange absolute top-0 left-0 w-3/4 h-screen"></div>
        <div className="background -skew-x-[30deg] border-white border-l-[20px] box-content bg-accent-navy h-screen z-10 absolute right-0 bottom-0 w-1/2 flex flex-col justify-end overflow-clip">

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
  )
}

export default Landing
