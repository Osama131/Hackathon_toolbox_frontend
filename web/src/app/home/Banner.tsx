import Image from 'next/image'

const Banner = () => {
  return (
    <section className="h-80 md:h-40 sm:h-40 bg-accent-navy w-full border border-neutral-700 ">
      <div className="border-8 w-full h-full relative border-white overflow-clip">
          <Image
            width="0"
            height="0"
            sizes="100vw"
            alt="the de-tel book"
            className="w-2/3 h-auto z-10 shadow-2xl"
            src="/detel_book_cover.png"
          />
        <div className="box-content w-full absolute">
          <Image
            width="0"
            height="0"
            sizes="100vw"
            alt="jTELSS"
            className="w-full h-auto shadow-2xl right-0 bottom-0"
            src="/JTELSS-brand-logo.png"
          />
        </div>
        <div className="star relative bottom-0 right-0 w-2/5 z-20 -rotate-[15deg]">
          <Image
            src="/icons/start_combined.svg"
            alt='star'
            width={0}
            height={0}
            className="relative bottom-0 right-0 w-full h-auto z-20"
          />
          <p className='absolute top-[40%] left-[50%] -translate-x-[50%] text-16xl md:text-4xl sm:text-4xl font-courtside font-extrabold'>Meets</p>
        </div>
      </div>
    </section >
  )
}

export default Banner
