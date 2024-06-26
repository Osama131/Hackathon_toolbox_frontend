import Image from "next/image";
import styles from "./LandingPage.module.css"

const Banner = () => {
  return (
    <section className=" h-[30vh] sm:h-[50vh] md:h-[50vh] lg:h[90vh] bg-[#FBFAE6] relative w-full box-border mx-auto shadow-md border-8 border-[#C04C12]">
      <div
        className="h-full bg-[#FBFAE6] w-2/3 absolute right-0 bottom-0"

      >
        <Image
          width="0"
          height="0"
          sizes="500"
          alt="aied_2024"
          className="w-1/2 h-auto absolute right-5 bottom-5"
          src={`/hack-participant-kit/aied_logo.png`}
        />
      </div>
      <div
        className="h-full w-2/3  bg-[#FBFAE6] "
      >
        <Image
          width="0"
          height="0"
          sizes="100vw"
          alt="logo"
          className="w-full xl:w-3/4 2xl:w-1/2 h-auto z-10 absolute top-0 left-0"
          src={`/hack-participant-kit/hack4ailiteracy.png`}
        />
      </div>

    </section>
  );
};

export default Banner;
