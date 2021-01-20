import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {

	render () {
		return (
			<Html style={{scrollBehavior: 'smooth'}}>
				<Head>
					<meta charSet="UTF-8" />
					<meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
				</Head>
				<body style={{margin:0}}>
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}