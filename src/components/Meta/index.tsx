import Head from "next/head";
import { useRouter } from "next/router";
import { NextSeo } from "next-seo";
import { AppConfig } from "@/constants/config";

type IMetaProps = {
  title: string;
  description: string;
  canonical?: string;
};

const Meta = (props: IMetaProps) => {
  const router = useRouter();

  return (
    <>
      <Head>
        <meta charSet="UTF-8" key="charset" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1"
          key="viewport"
        />
        <link rel="apple-touch-icon" href={`/assets/favicon.png`} key="apple" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href={`/assets/favicon.png`}
          key="icon32"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href={`/assets/favicon.png`}
          key="icon16"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Play:400,700&amp;subset=vietnamese"
          rel="stylesheet"
        ></link>
        <link rel="icon" href={`/assets/favicon.png`} key="favicon" />
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
        />
      </Head>
      <NextSeo
        title={props.title}
        description={props.description}
        canonical={props.canonical || router.basePath}
        openGraph={{
          title: props.title,
          description: props.description,
          url: props.canonical,
          locale: AppConfig.locale,
          site_name: AppConfig.site_name,
        }}
      />
    </>
  );
};

export { Meta };
