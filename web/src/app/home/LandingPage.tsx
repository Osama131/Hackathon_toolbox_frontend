import Banner from "./Banner";
import Header from './Header';
import Description from './Description';
import Details from './Details';
import Links from './Links';
import { ThemeSwitch } from "./components/ThemeSwitch";

import '@/app/globals.css';
import styles from './LandingPage.module.css';


export default function LandingPage() {
  return (
    <section className={`${styles.main} flex gap-3 min-h-screen flex-col items-center justify-between min-w-screen p-2`}>

      <Banner />

      <section className="wrapper flex flex-col gap-3" >
        <Header />
        <Links />
        <Description />
        <Details />
      </section>

    </section>
  );
}
