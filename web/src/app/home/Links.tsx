"use client";
import { useEffect, useState } from "react"
import Link from "next/link"
import LinkCard from "./components/LinkCard"

const Links = (uuid: string) => {

  const pre_questionnaire_id = 583379
  const post_questionnaire_id = 974285

  const current_time = new Date().getTime()
  const pre_quesstionnaire_end_time = new Date("May 18, 2022 16:20:00 CEST").getTime()
  const post_quesstionnaire_start_time = new Date("May 18, 2022 16:25:00 CEST").getTime()

  const active_questionnaire_text = "Help Us with our research by answering a few questions"

  const [pre_questionnaire_active, setPreQuestionnaireActive] = useState(current_time < pre_quesstionnaire_end_time)
  const [post_questionnaire_active, setPostQuestionnaireActive] = useState(current_time > post_quesstionnaire_start_time)

  useEffect(() => {
    setInterval(() => {
      const current_time = new Date().getTime()
      setPreQuestionnaireActive(current_time < pre_quesstionnaire_end_time)
      setPostQuestionnaireActive(current_time > post_quesstionnaire_start_time)
    }, 1000)
  }, [])

  return (
    <section className="grid gap-3 text-center lg:max-w-5xl lg:w-full grid-cols-1 lg:grid-cols-3 lg:text-left">
      <Link
            href={'/git_intro'}
            className="group rounded-none border px-5 py-4 transition-colors border-neutral-700 hover:bg-neutral-800/30"
            rel="noopener noreferrer"
      >
          <h2 className={`mb-3 text-3xl md:text-5xl font-the-hand`}>
              {"Tutorials "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                  -&gt;
              </span>
          </h2>
      </Link>
      <LinkCard track_uuid={true} uuid={uuid} newTab={true} title={"Pre-Questionnaire"} description={ active_questionnaire_text} to={`https://limesurvey.uni-due.de/index.php/${pre_questionnaire_id}?lang=en`} />
      <LinkCard track_uuid={true} uuid={uuid} newTab={true} title={"Post-Questionnaire"} description={ active_questionnaire_text} to={`https://limesurvey.uni-due.de/index.php/${post_questionnaire_id}?lang=en`} />
    </section>
  )
}

export default Links
