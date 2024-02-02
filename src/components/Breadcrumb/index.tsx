import classNames from 'classnames';
import Link from 'next/link';
import React from 'react';
import { Else, If, Then } from 'react-if';

type Breadcrumb = {
  title: string;
  url?: string | undefined;
};
type Props = {
  breadcrumbs: Array<Breadcrumb> | [];
  border?: boolean;
};

function Breadcrumb({ breadcrumbs, border }: Props) {
  return (
    <nav
      className={classNames(
        'w-full lg:mt-0 mt-20px',
        {
          'flex mx-auto w-[calc(100%-80px)] border-t-[1px] border-[#c3c3c3] pt-24px md:pb-[32px] md:px-[40px] px-[20px]':
            border,
        },
        {
          'mb-16px': !border,
        }
      )}
      aria-label="Breadcrumb"
    >
      <ol className="inline-flex flex-wrap items-center">
        {breadcrumbs.map((breadcrumb: Breadcrumb, i) => (
          <If key={`breadcrumbs-item-` + i} condition={!!breadcrumb?.url}>
            <Then>
              <li className="inline-flex items-center ml-0">
                <Link href={breadcrumb.url as string}>
                  <a className="text-[14px] text-[#949494] hover:text-[#cecece] capitalize">
                    {breadcrumb.title}
                  </a>
                </Link>
                <span className="text-[14px] text-[#949494] mx-8px">/</span>
              </li>
            </Then>
            <Else>
              <li aria-current="page" className="ml-0">
                <div className="flex items-center">
                  <span className="text-[#333333] text-[14px] font-PlusJakartaSansMedium capitalize">
                    {breadcrumb.title}
                  </span>
                </div>
              </li>
            </Else>
          </If>
        ))}
      </ol>
    </nav>
  );
}

export default Breadcrumb;
