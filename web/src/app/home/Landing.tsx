import Image from 'next/image'

const Landing = () => {
  return (
    <section className="h-[98vh] flex bg-accent-navy w-full  border border-neutral-700">
        <div className="border-8 h-full w-full relative border-white overflow-clip">
          <div className="background bg-accent-orange w-3/4 h-screen">
            <Image
              width="0"
              height="0"
              sizes="100vw"
              alt="the de-tel book"
              className="background w-2/3 h-auto z-10"
              src="https://ea-tel.eu/detel-book/assets/images/Cover.png"
            />
          </div>
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
          <Image
            src="/icons/start_combined.svg"
            alt='star'
            width={0}
            height={0}
            className="absolute top-[40%] left-[45%] w-1/4 h-auto -translate-x-[40%] -translate-y-[50%] z-50"
          />
          <p className='absolute top-[35%] left-[45%] w-1/4 h-auto  z-50 text-5xl font-courtside font-extrabold'>Meets</p>
        </div>
      </section>
  )
}

export default Landing
