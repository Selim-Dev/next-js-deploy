import { Seo } from "@/src/components";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/*This Component will Allow for dynamic page SEO for optimizing search engine optimization to rank on google searches amongst competitors*/}
        <Seo />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
