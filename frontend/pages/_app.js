import Head from 'next/head'
import '../styles/globals.css'
import Footer from '../components/Footer.js'

function MyApp({ Component, pageProps }) {
  return <>
      <Head>
        <title>One Stop Scholar</title>
        <meta name="One Stop Scholar" content="Scholarship Portal for higher studies" />
        <link rel="icon" href="/logo.png" />
        <link href='https://fonts.googleapis.com/css?family=Nunito' rel='stylesheet' />
      </Head>
      <Component {...pageProps} />
      <Footer/>
  </>
}

export default MyApp
