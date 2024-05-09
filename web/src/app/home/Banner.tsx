import Image from "next/image";
import styles from "./LandingPage.module.css"

const Banner = () => {
  return (
    <section className=" h-[40vh] sm:h-[50vh] md:h-[50vh] bg-accent-navy relative w-full box-border mx-auto shadow-md">
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
          className="w-1/2 h-auto absolute right-5 bottom-5"
          src="/JTELSS-brand-logo.png"
        />
      </div>
      <div
        className="h-full w-2/3  bg-accent-orange "
        style={{
          clipPath: "polygon(0 0, 100% 0, 25% 100%, 0% 100%)",
        }}
      >
        <Image
          width="0"
          height="0"
          sizes="100vw"
          alt="the de-tel book"
          className="w-1/2 h-auto z-10 absolute top-0 left-0"
          src="/detel_book_cover.png"
        />
      </div>
      <div className={`star absolute top-1/2 left-1/2 w-2/5 md:w-1/4 lg:w-1/5 -translate-x-[60%] md:-translate-x-[75%] -translate-y-[50%] z-20`}>
        <div className={` ${styles.scaleUp} relative`}>
          <div className={` ${styles.wiggle} relative`}>
            <Image
              src="/icons/start_combined.svg"
              alt="star"
              width={0}
              height={0}
              className={`w-full h-auto z-20 `}
            />
            <p className="text-center lg:text-3xl text-3xl font-courtside font-extrabold absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]">
              Meets
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
