import { SessionProvider } from "next-auth/react"

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session} basePath={process.env.BASE_PATH} >
      <Component {...pageProps} />
    </SessionProvider>
  )
}
