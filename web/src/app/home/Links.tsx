import Link from "next/link"
import LinkCard from "./components/LinkCard"
import { cookies } from 'next/headers'

const Links = () => {

  const cookieStore = cookies()
  const uuid = cookieStore.get('session')?.value;

  return (
    <section className="mb-32 grid gap-3 text-center lg:max-w-5xl lg:w-full lg:mb-0 grid-cols-2 lg:text-left">
      <LinkCard title={"Tutorials"} description={"Review current tutorials (Draft only!!)"} to={"/git_intro"}/>
      {/* FIXME: Replace dummy text and link with real questionnaire data */}
      <LinkCard title={"Questionnaire"} description={"Help Us with our research by filling the following questionnaire"} to={"https://limesurvey.uni-due.de/index.php/618686?lang=en&uuid=" + uuid}/>
    </section>
  )
}

export default Links
