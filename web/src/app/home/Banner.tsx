import Image from 'next/image'

const Banner = () => {
  return (
    <section className="bg-accent-navy h-[30%] md:h-[40%] relative w-full box-border mx-auto shadow-md">
      <div
        className="h-full bg-accent-navy w-2/3 absolute right-0 bottom-0"
        style={{
          clipPath: "polygon(25% 0, 100% 0, 100% 100%, 0% 100%)",
        }}
      >
          <Image
            width="0"
            height="0"
            sizes="500"
            alt="jTELSS"
            className="w-1/2 h-auto shadow-2xl absolute right-5 bottom-5"
            src="/JTELSS-brand-logo.png"
          />
      </div>
      <div
        className="h-full w-2/3  bg-accent-orange "
        style={{
          clipPath: "polygon(0 0, 100% 0, 25% 100%, 0% 100%)",
        }}>
          <Image
            width="0"
            height="0"
            sizes="100vw"
            alt="the de-tel book"
            className="w-1/2 h-auto z-10 absolute top-0 left-0"
            src="/detel_book_cover.png"
          />
      </div>
        <div className="star absolute top-1/2 left-1/2 w-2/5 md:w-1/5 -translate-x-[50%] -translate-y-[50%] z-20 -rotate-[15deg] border-5 border-red-500">
          <Image
            src="/icons/start_combined.svg"
            alt='star'
            width={0}
            height={0}
            className="bottom-0 right-0 w-full h-auto z-20"
          />
          {/* <p className='text-16xl md:text-4xl sm:text-4xl font-courtside font-extrabold'>Meets</p> */}
        </div>
    </section >
  )
}

export default Banner
