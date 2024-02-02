import { AppConfig } from '@/constants/config';
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang={AppConfig.locale}>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
