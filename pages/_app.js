// pages/_app.js
import React from 'react'
import Head from 'next/head'
import "../styles/global/globals.css";


function MyApp({ Component, pageProps }) {
	return (
		<>
		<Head>
			<title>Holly Goldgrabe</title>
			<meta content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0, shrink-to-fit=no' name='viewport' />
			{/* <link
				rel="preload"
				href="/fonts/Cherolina.ttf"
				as="font"
				crossOrigin=""
			/> */}
		</Head>
		<Component {...pageProps} />
		</>
	)
}

export default MyApp