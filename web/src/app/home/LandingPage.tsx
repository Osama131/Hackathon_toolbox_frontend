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
    <section className={`${styles.main} flex gap-3 min-h-screen flex-col items-center justify-between min-w-screen p-2`}>
      <section className="h-full flex flex-col gap-3 overflow-y-clip" >
        <Banner />
         <Header />
      </section>
      <section className="wrapper flex flex-col gap-3" >
        <Links uuid={uuid} />
        <Description />
        <Details />
      </section>

    </section>
  );
}
