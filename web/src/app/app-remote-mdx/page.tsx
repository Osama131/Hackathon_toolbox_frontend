import { MDXRemote } from 'next-mdx-remote/rsc'
// import fs from 'fs'
// import path from 'path'

export default async function RemoteMdxPage() {
  // MDX text - can be from a local file, database, CMS, fetch, anywhere...
  const res = await fetch('http://localhost:8000/mdx')
  const markdown = await res.text()
  // const filePath = path.join(__dirname, '../../../../src/pages/test.mdx')
  // const markdown = fs.readFileSync(filePath, 'utf-8')
  return <MDXRemote source={markdown} />
  // return <div > {markdown}</div>
}

// "use client"
// import { createContext, useState, useEffect } from 'react'

// // Create a context
// export const MdxContext = createContext(null)

// function MyApp({ Component, pageProps }) {
//   const [mdxSource, setMdxSource] = useState(null)

//   // Fetch the data when the component mounts
//   useEffect(() => {
//     fetch('http://localhost:8000/mdx')
//       .then(res => res.text())
//       .then(markdown => serialize(markdown))
//       .then(mdxSource => setMdxSource(mdxSource))
//   }, [])

//   // Provide the data to the rest of your app
//   return (
//     <MdxContext.Provider value={mdxSource}>
//       <Component {...pageProps} />
//     </MdxContext.Provider>
//   )
// }

// export default MyApp
