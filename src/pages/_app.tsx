import Head from 'next/head'
import { AppProps } from 'next/app'
import { useRouter } from 'next/router'

import '../styles/reset.css'

const MyApp = ({ Component, pageProps }: AppProps) => {
  const router = useRouter()

  return (
    <>
      <Head>
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link rel="icon" href="/favicon.ico" />
        <meta key="robots" name="robots" content="noindex,follow" />
      </Head>
      <Component {...pageProps} key={router.route} />
    </>
  )
}
export default MyApp
