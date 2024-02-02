import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

import { GetStaticProps } from 'next';

import NOTFOUND from '@/public/assets/bg-img/404.svg';

const Custom404 = () => {
  const t = useTranslations('Others');
  return (
    <>
      <div className="flex flex-col h-screen justify-center items-center">
        <h1 className="text-2xl">{t('page_not_found')}</h1>
        <Image src={NOTFOUND} alt="404 Page Not Found" width={400} height={300} />
        <span className="text-gray400">
          {t('go_back_to')}{' '}
          <Link href="/">
            <a className="underline font-bold hover:text-gray500">{t('home_page')}</a>
          </Link>
          ?
        </span>
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      messages: (await import(`@/messages/common/${locale}.json`)).default,
    },
  };
};

export default Custom404;
