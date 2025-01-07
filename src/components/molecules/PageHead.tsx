import Head from "next/head";
import { FC } from "react";

interface Props {
  title: string;
  description: string;
  url: string;
  twitter: string;
}

const PageHead: FC<Props> = (props: Props) => {
  const { title, description, url, twitter } = props;

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="icon" href="/favicon.ico" />
      {/* twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@sandbox_studio_" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content="https://expstud.io/meta.jpg" />
      <meta property="twitter:url" content={`https://expstud.io`} />
      {/* <!-- Open Graph / Facebook --> */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://expstud.io" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content="https://expstud.io/meta.jpg" />
    </Head>
  );
};

export default PageHead;
