import { AppProps } from 'next/app'
import Head from 'next/head'
import GlobalStyle from 'assets/styles/global'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>leaning nextjs</title>
        <meta name="theme-color" content="" />
        <meta
          name="description"
          content="A simple project starter to work with TypeScript, React, NextJS and Styled Components"
        />
      </Head>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  )
}

export default App
