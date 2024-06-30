"use client"

import Link from "next/link"
import LinkCard from "./components/LinkCard"
import ConsentDialog from './components/ConsentDialog';
import { useEffect, useState } from "react"
// import dynamic from 'next/dynamic'
// const LinkCard = dynamic(() => import('./components/LinkCard'), { ssr: false })

const Links = ({ uuid }: { uuid: string }) => {
  const pre_questionnaire_id = 866624
  const post_questionnaire_id = 483132

  const pre_questionnaire_link = `https://limesurvey.uni-due.de/index.php/${pre_questionnaire_id}`
  const post_questionnaire_link = `https://limesurvey.uni-due.de/index.php/${post_questionnaire_id}`

  let default_uuid = "00000000-0000-0000-0000-000000000000"
  const [query_uuid, setQueryUuid] = useState<string>(default_uuid)

  useEffect(() => {

    const key = 'accepted_cookie';
    const storedValue = localStorage.getItem(key);
    if (storedValue === 'true') {
      setQueryUuid(uuid)
    }
  }, []);


  const query = {
    lang: 'en',
    uuid: query_uuid
  }
  const pre_q_href = {
    pathname: pre_questionnaire_link,
    query: query
  }

  const post_q_href = {
    pathname: post_questionnaire_link,
    query: query
  }

  const pre_quesstionnaire_start_time = new   Date("2024-07-01T12:00:00.000-03:00");
  const pre_quesstionnaire_end_time = new     Date("2024-07-12T12:00:00.000-03:00");
  
  const post_quesstionnaire_start_time = new  Date("2024-07-12T14:00:00.000-03:00");
  const post_quesstionnaire_end_time = new    Date("2024-07-20T00:00:00.000-03:00");

  const active_questionnaire_text = "Help Us with our research by answering a few questions"
  const inactive_questionnaire_text = "Not available at the moment"

  const ConsentAccepted = () => {
    setQueryUuid(uuid)
  }

  return (


    <section className="grid gap-5 w-full grid-cols-1 md:grid-cols-3">
      <ConsentDialog onConsentAccepted={ConsentAccepted} />
      <Link
        href={'/tutorials/git_intro'}
        className="group rounded-lg border px-5 py-4 transition-colors border-neutral-700 bg-amber-600 hover:bg-[#EBE540]/50 shadow-xl text-white hover:text-black"
        rel="noopener noreferrer"
      >
        <h2 className={`mb-3 text-3xl md:text-5xl font-the-hand`}>
          {"Tutorials "}
          <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
            -&gt;
          </span>
        </h2>
      </Link>
      <LinkCard href={pre_q_href} title={"Pre-Questionnaire"} startTime={pre_quesstionnaire_start_time} endTime={pre_quesstionnaire_end_time} active_description={active_questionnaire_text} inactive_description={inactive_questionnaire_text} />
      <LinkCard href={post_q_href} title={"Post-Questionnaire"} startTime={post_quesstionnaire_start_time} endTime={post_quesstionnaire_end_time} active_description={active_questionnaire_text} inactive_description={inactive_questionnaire_text} />
    </section>

  )
}

export default Links
