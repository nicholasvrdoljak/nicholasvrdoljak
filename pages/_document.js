import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document'
import { ServerStyleSheets } from '@material-ui/core/styles';
import theme from '../src/theme';

export default class MyDocument extends Document {
	render () {
		return (
			<Html style={{scrollBehavior: 'smooth'}}>
				<Head>
					<meta charSet="UTF-8" />
					<meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
					<meta name="theme-color" content={theme.palette.primary.main} />
				</Head>
				<body style={{margin:0}}>
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}

// `getInitialProps` belongs to `_document` (instead of `_app`),
// it's compatible with server-side generation (SSG).
MyDocument.getInitialProps = async (ctx) => {

	// Render app and page and get the context of the page with collected side effects.
	const sheets = new ServerStyleSheets();
	const originalRenderPage = ctx.renderPage;
  
	ctx.renderPage = () => originalRenderPage({
	  enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
	});
  
	const initialProps = await Document.getInitialProps(ctx);
  
	return {
	  ...initialProps,
	  // Styles fragment is rendered after the app and page rendering finish.
	  styles: [...React.Children.toArray(initialProps.styles), sheets.getStyleElement()],
	};
  };