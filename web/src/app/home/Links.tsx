import Link from "next/link"
import LinkCard from "./components/LinkCard"
import { cookies } from 'next/headers'

const Links = () => {

  const cookieStore = cookies()
  const uuid = cookieStore.get('session')?.value;
  const pre_questionnaire_id = 583379
  const post_questionnaire_id = 974285

  const pre_questionnaire_avtice = true
  const post_questionnaire_avtice = false

  const active_questionnaire_text = "Help Us with our research by answering a few questions"
  const inactive_questionnaire_text = "Not available at the moment"

  return (
    <section className="mb-32 grid gap-3 text-center lg:max-w-5xl lg:w-full lg:mb-0 grid-cols-3 lg:text-left">
      <LinkCard newTab={false}  title={"Tutorials"} description={"Review current tutorials"} to={"/git_intro"}/>
      <LinkCard newTab={true}  title={"Pre-Questionnaire"} description={pre_questionnaire_avtice?active_questionnaire_text : inactive_questionnaire_text} to={`https://limesurvey.uni-due.de/index.php/${pre_questionnaire_id}?lang=en&uuid=${uuid}`}/>
      <LinkCard newTab={true}  title={"Post-Questionnaire"} description={post_questionnaire_avtice?active_questionnaire_text : inactive_questionnaire_text} to={`https://limesurvey.uni-due.de/index.php/${post_questionnaire_id}?lang=en&uuid=${uuid}`}/>
    </section>
  )
}

export default Links
