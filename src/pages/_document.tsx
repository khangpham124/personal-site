import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta name="theme-color" content="#000000" />
          <link rel="shortcut icon" href="/favicon.ico" />

          <link href="/css/slick.css" rel="stylesheet" />
        </Head>

        <body>
          <Main />
          <NextScript />
          {/* <script src="/theme/node_modules/jquery/jquery-3.2.1.min.js" /> */}
        </body>
      </Html>
    );
  }
}
export default MyDocument;
