import Head from 'next/head'

function Layout({children}) {
  return (
    <>
      <Head>
        <title>CHATBOX INNOCEAN MÉXICO</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" type="image/png" href="favicon.png" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;400;900&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdn.linearicons.com/free/1.0.0/icon-font.min.css"></link>
      </Head>
      
      {children}

      <style jsx global>{`
        body {
          margin: 0;
          padding: 0;
          font-family: 'Montserrat', sans-serif;
        }
      `}</style>
    </>
  )
}

export default Layout