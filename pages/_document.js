import Document, { Head, Main, NextScript } from 'next/document'
import flush from 'styled-jsx/server'

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const { html, head, errorHtml, chunks } = renderPage()
    const styles = flush()
    return { html, head, errorHtml, chunks, styles }
  }

  setGoogleTags() {
    return {
      __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments); }
            gtag('js', new Date());

            gtag('config', 'UA-107698580-1');
      `
    };
  }

  render() {
    return (
      <html>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="description" content="Electronics and Communications Engineer, Web Developer" />
          <meta name="keywords" content="Rohith,Balaji,rohith,balaji,developer,engineer,electronics,linux,srivijayaelectronics,zorcis,rohithcis" />
          <meta name="author" content="Rohith" />
          <title>Rohith Balaji</title>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.0/normalize.min.css" />
          <link rel='stylesheet' href='https://use.fontawesome.com/releases/v5.7.0/css/all.css' />
          <link href="https://fonts.googleapis.com/css?family=Major+Mono+Display|Comfortaa&display=swap" rel="stylesheet" />
        </Head>
        <body>
          {this.props.customValue}
          <Main />
          <NextScript />
          <>
            <script async src="https://www.googletagmanager.com/gtag/js?id=UA-107698580-1"></script>
            <script dangerouslySetInnerHTML={this.setGoogleTags()} />
          </>
        </body>
      </html>
    )
  }
}