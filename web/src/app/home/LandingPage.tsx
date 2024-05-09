import Banner from "./Banner";
import Header from './Header';
import Description from './Description';
import Details from './Details';
import Links from './Links';
import { cookies } from 'next/headers'

import '@/app/globals.css';
import styles from './LandingPage.module.css';


export default function LandingPage() {

  const cookieStore = cookies()
  const uuid = cookieStore.get('session')?.value;
  return (
    <section className={`w-full min-h-screen flex gap-3 flex-col items-center justify-between p-2`}>
      <div className="flex flex-col w-full md:w-[80%] lg:w-[65%]">
        <Banner />
        <Header />
      </div>
      <section className="flex flex-col gap-3 bg-neutral-50 md:w-[80%] lg:w-[65%]" >

        <Links uuid={uuid} />
        <Description />
        <Details />

      </section>

    </section>
  );
}
