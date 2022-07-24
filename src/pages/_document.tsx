import React from "react";
import Document, {
  Html,
  Head,
  NextScript,
  Main,
  DocumentContext,
  DocumentInitialProps,
} from "next/document";
import { Favicon } from "../components/";

class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render(): JSX.Element {
    const title = "My Home";
    return (
      <Html lang="en">
        <Head>
          <title>{title}</title>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
          />
          <meta property="og:title" content={title} key="title" />
          <meta name="description" content={title} />
          <meta name="keywords" content="Keywords" />
          <link rel="manifest" href="/manifest.json" />
          <Favicon />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
