import Landing from "./home/Landing";
import Header from './home/Header';
import Description from './home/Description';
import Details from './home/Details';
import Links from './home/Links';

export default function Home() {
  return (
    <main className="dark flex gap-3 min-h-screen flex-col items-center justify-between min-w-screen dark:bg-slate-900">
      <Landing />
      <Header />
      <Description />
      <Details />
      <Links  />

    </main>
  );
}
