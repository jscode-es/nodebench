import Head from 'next/head'
import { useEffect } from 'react'
import ws from '../src/class/socket'
import db from '../src/class/database'
import Main from '../src/components/main'

export default function Home() {

  useEffect(() => {

    db()

    let socket = ws()

    return () => socket.close()

  }, [])



  return (
    <>
      <Head>
        <title>Nodebench</title>
        <meta name="description" content="Nodebench" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main />
    </>
  )
}
