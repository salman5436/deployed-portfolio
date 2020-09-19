import '../styles/globals.css'
import Head from 'next/head'



function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" />
        <link href='https://fonts.googleapis.com/css?family=Droid+Sans:400,700' rel='stylesheet' type='text/css' />
      </Head>
    
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
