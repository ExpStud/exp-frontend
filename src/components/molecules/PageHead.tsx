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
        <meta name="twitter:site" content="@sandbox_studio_" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content="https://sandboxstud.io/meta.jpg" />
        <meta property="twitter:url" content={`https://sandboxstud.io`} />
        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://sandboxstud.io" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content="https://sandboxstud.io/meta.jpg" />
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
