import { Head, Html, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
  
        <Head>
         <link rel="preconnect" href="https://fonts.googleapis.com"/>
         <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='' />
         <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,500;0,700;1,400&display=swap" rel="stylesheet"/>
          <title>Auth</title>
        </Head>
        <body className='bg-background'>
          <Main />
           <NextScript />
        </body>
    </Html>
            )
}
