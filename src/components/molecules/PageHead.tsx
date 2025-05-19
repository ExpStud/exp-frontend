import Head from "next/head";
import { FC } from "react";
import Script from "next/script";

interface Props {
  title: string;
  description: string;
  url: string;
  twitter: string;
}

const PageHead: FC<Props> = (props: Props) => {
  const { title, description, url, twitter } = props;

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
        {/* twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content={`@${twitter}`} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={`${url}/meta.jpg`} />
        <meta property="twitter:url" content={url} />
        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={url} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={`/meta.jpg`} />
      </Head>
      {/* Google Ads Script */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=AW-17079595054"
        strategy="afterInteractive"
      />
      <Script
        id="google-ads-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
         window.dataLayer = window.dataLayer || [];
         function gtag(){dataLayer.push(arguments);}
         gtag('js', new Date());
         gtag('config', 'AW-17079595054');
       `,
        }}
      />
    </>
  );
};

export default PageHead;
