import * as React from "react";
// next
import Document, { Html, Head, Main, NextScript } from "next/document";
// theme
import palette from "../theme/palette";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />

          <meta name="theme-color" content={palette.light.primary.main} />

          <link rel="manifest" href="/manifest.json" />

          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link
            href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap"
            rel="stylesheet"
          />

          <meta name="description" content="한국수력원자력" />

          <meta name="keywords" content="DEEP-AI" />

          <meta name="author" content="SY" />
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
