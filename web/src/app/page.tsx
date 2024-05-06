import Landing from "./home/Landing";
import Header from './home/Header';
import Description from './home/Description';
import Details from './home/Details';
import Links from './home/Links';

import styles from './home/home.module.css';

export default function Home() {
  return (
    <main className="flex gap-3 min-h-screen flex-col items-center justify-between min-w-screen dark:bg-slate-900 p-2">
      <Landing />
      <section className="wrapper flex flex-col gap-3" >
        <Header />
        <Description />
        <Details />
        <Links />
      </section>

    </main>
  );
}
