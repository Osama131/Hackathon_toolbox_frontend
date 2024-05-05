import Link from "next/link"
import LinkCard from "./components/LinkCard"

const Links = () => {
  return (
    <section className="mb-32 grid gap-3 text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-2 lg:text-left">
      <LinkCard title={"Tutorials"} description={"Review current tutorials (Draft only!!)"} to={"/git_intro"}/>
      {/* FIXME: Replace dummy text and link with real questionnaire data */}
      <LinkCard title={"Questionnaire"} description={"Lorem ipsum dolor sit amet"} to={"/"}/>
    </section>
  )
}

export default Links
