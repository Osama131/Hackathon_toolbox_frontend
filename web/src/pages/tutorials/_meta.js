import { create } from 'domain'
import { createCatchAllMeta } from 'nextra/catch-all'

const fetchTutorialsMeta = async () => {



        //fetch from "/hack-participant-kit/api/events/" 
        const response = await fetch('http://localhost:3000/hack-participant-kit/api/events/')
        const json = await response.json()
        //json format
        // {
        //     "events": [
        //         {
        //             "_id": "6692977cac9b8754d39f5f41",
        //             "name": "JTELSS",
        //             "owner": "Osama",
        //             "startDate": "Today",
        //             "endDate": "Tomorrow",
        //             "lastModified": "2024-07-13T15:04:27.937Z",
        //             "tutorials": [
        //                 {
        //                     "id": "git_intro",
        //                     "title": "Introduction to Git"
        //                 },
        //                 {
        //                     "id": "md_intro",
        //                     "title": "Introduction to Markdown"
        //                 }
        //             ]
        //         }
        //     ]
        // }


        let paths = []
        let meta = {}

        for (let event of json.events) {
                meta[event.name] = { type: "folder", items: {} }
                for (let tutorial of event.tutorials) {
                        paths.push(`/${event.name}/${tutorial.id}`)
                        meta[event.name].items[tutorial.id] = tutorial.title
                }
        }
        const ret = createCatchAllMeta(paths, meta)
        return ret
}

export default fetchTutorialsMeta
