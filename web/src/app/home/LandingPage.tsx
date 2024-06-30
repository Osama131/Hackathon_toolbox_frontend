import Banner from "./Banner";
import Header from './Header';
import Description from './Description';
import Details from './Details';
import Links from './Links';

import { cookies } from 'next/headers';

import '@/app/globals.css';


export default function LandingPage() {

  const cookieStore = cookies();
  var uuid: string = cookieStore.get('session')?.value ?? '';

  return (
    <section className={`bg-gradient-to-b from-[#C9C9FF] to-[#D6B8C0] w-full min-h-screen flex gap-3 flex-col items-center justify-between p-2`}>
      <div className="flex flex-col w-full md:w-[80%] lg:w-[65%] shadow-2xl">
        <Banner />
        <Header />
      </div>
      <section className="flex flex-col gap-3 w-full md:w-[80%] lg:w-[65%] py-4" >
        <Links uuid={uuid} />
        <Description />
        <Details />

      </section>

    </section>
  );
}
