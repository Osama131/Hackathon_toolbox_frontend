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
              className="background w-2/3 h-auto z-10 -rotate-12 translate-x-20 translate-y-12 shadow-2xl"
              src="https://ea-tel.eu/detel-book/assets/images/Cover.png"
            />
          </div>
          <div className="background -skew-x-[30deg] box-content bg-accent-navy h-screen z-10 absolute right-0 bottom-0 w-1/2 flex flex-col justify-end overflow-clip">
            <Image
              width="0"
              height="0"
              sizes="100vw"
              alt="jTELSS"
              className="w-full h-auto scale-150 translate-x-20 -translate-y-1/2 skew-x-[30deg]"
              src="https://ea-tel.eu/wp-content/uploads/JTELSS-brand-logo-Gforms-4x1-1-1536x413.png"
            />
          </div>
          <div className="star absolute top-[50%] left-[50%] w-2/5 -translate-x-[60%] -translate-y-[50%] z-50 -rotate-[15deg]">
            <Image
              src="/icons/start_combined.svg"
              alt='star'
              width={0}
              height={0}
              className="w-full h-auto z-50"
            />
            <p className='absolute top-[40%] left-[50%] -translate-x-[50%] text-8xl font-courtside font-extrabold'>Meets</p>
          </div>
        </div>
      </section>
  )
}

export default Landing
