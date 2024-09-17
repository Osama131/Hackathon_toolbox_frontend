import { createCatchAllMeta } from 'nextra/catch-all'
// import json from './filepaths.json' assert { type: 'json' }
//fetch json file from database and use it to create catch all meta
const fetchTutorialsMeta = async () => {

    //fetch from "/hack-participant-kit/api/events/" 
    const response = await fetch('http://localhost:3000/hack-participant-kit/api/events/')
    const json = await response.json()

    // @todo I only consider the first elemnt in a returned array for now, need to fix the API later ro only return one element corresponding the correct event.
    const tutorials = json.events[0].tutorials


    const paths = tutorials.map((tutorial: {id: string, title: string}) => tutorial.id+".mdx")
    const meta = tutorials.reduce((acc: Record<string, string>, tutorial: {id: string, title: string}) => {
        acc[tutorial.id] = tutorial.title;
        return acc;
    }, {});
   
    // return meta
    // return createCatchAllMeta(paths, meta)
    return createCatchAllMeta(paths, meta)
    // return createCatchAllMeta([])

}

export default fetchTutorialsMeta
