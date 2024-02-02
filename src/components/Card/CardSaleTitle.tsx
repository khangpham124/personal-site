import ArrowRight from '@/public/assets/icons/ArrowRight';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import React from 'react';
import Image, { StaticImageData } from 'next/image';
// import Countdown from '../Countdown';
import Countdown from 'react-countdown';
// import { Moment } from 'moment';
// import moment from 'moment';

interface Props {
  title: string;
  description: string;
  image_src: string | StaticImageData;
  date_end: any;
}

// interface PropsCount {
//   hours: any;
//   minutes: any;
//   completed: any;
//   seconds: any;
// }

const CardSaleTitle = ({ title, description, image_src, date_end }: Props) => {
  const t = useTranslations('Index');
  const Completionist = () => <span>Đã kết thúc</span>;
  const endMoment = new Date(date_end);
  
  const milisecondsEnd = endMoment.getTime();

  // console.log('abc', milisecondsEnd)
 
  return (
    <div className="flex md:flex-row flex-col justify-between items-center lg:px-24px p-12px lg:py-[28px] bg-[#F09696] lg:mb-24px mb-16px">
      <div className="flex md:flex-row flex-col items-center heading-6">
        <Image src={image_src} alt={title} className="w-full" width={40} height={40} />
        <h3 className="lg:text-[24px] text-[20px] font-bold text-[#030303] pr-[16px] ml-12px font-PlusJakartaSansSemiBold">
          {title}
        </h3>
        <h4 className="lg:text-[16px] text-[12px] font-PlusJakartaSansSemiBold text-[#000] border-l-0 md:border-l-[1px] uppercase lg:px-[16px] px-8px md:my-0 my-[4px]">
          {description}
        </h4>
        <div>
          {milisecondsEnd > 0 ? (
            <Countdown 
            date={milisecondsEnd} 
            // renderer={rendererCount}
            >
            <Completionist />
            </Countdown>
          ) : null }
        </div>
        
      </div>
      <Link href={'#'}>
        <a
          className={
            'btn-view-all md:mt-0 mt-20px bg-[unset] lg:text-[16px] text-[14px] font-PlusJakartaSansMedium text-[#000] uppercase flex hover:text-[#fff] hover:duration-300 hover-white'
          }
        >
          {t('view_all')}
          <div className="ml-12px">
            <ArrowRight />
          </div>
        </a>
      </Link>
    </div>
  );
};

export default CardSaleTitle;
