import Banner from "./Banner";
import Header from './Header';
import Description from './Description';
import Details from './Details';
import Links from './Links';
import '@/app/globals.css';


export default function LandingPage() {

  return (
    <section className={`bg-gradient-to-b from-[#C9C9FF] to-[#D6B8C0] w-full min-h-screen flex gap-3 flex-col items-center justify-between p-2`}>
      <div className="flex flex-col w-full md:w-[80%] lg:w-[65%] shadow-2xl">
        <Banner />
        <Header />
      </div>
      <section className="flex flex-col gap-3 w-full md:w-[80%] lg:w-[65%] py-4" >
        <Links />
        <Description />
        <Details />

      </section>

    </section>
  );
}
