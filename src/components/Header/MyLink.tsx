import Link from 'next/link';

type LinkProps = {
  href: string;
  locale: 'en' | 'vi';
  active: boolean;
};

export const MyLink: React.FC<LinkProps> = ({ href, locale, children, active, ...rest }) => {
  return (
    <Link href={href} locale={locale}>
      <a
        className={`py-2 px-4 text-center ${
          active ? 'bg-gray200 text-gray500' : 'bg-white text-gray500'
        }`}
        {...rest}
      >
        {children}
      </a>
    </Link>
  );
};
