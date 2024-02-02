import Button from '@/components/Buttons/Button';
import FacebookIcon from '@/public/assets/icons/FacebookIcon';
import GoogleIcon from '@/public/assets/icons/GoogleIcon';
import { useTranslations } from 'next-intl';
import React from 'react';

type Props = {
  onRegister?: () => void;
};

const FooterForm = ({ onRegister }: Props) => {
  const t = useTranslations('LoginRegister');

  return (
    <div>
      <div className={'relative flex border-[1px] border-[#66666640] my-[25px]'}>
        <span className="text-[14px] text-[#666] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-white px-20px">
          {t('or')}
        </span>
      </div>
      {onRegister && (
        <div className="text-center text-gray400 mb-20px text-[14px]">
          {t('not_member')}{' '}
          <span
            onClick={onRegister}
            className="text-gray500 underline focus:outline-none focus:underline cursor-pointer"
          >
            {t('register')}
          </span>
        </div>
      )}

      <div className="md:flex w-full">
        <div className="md:w-1/2 w-full">
          <Button
            type="submit"
            value={t('google')}
            extraClass="pl-[42px] relative flex items-center justify-center w-full border-[#626262] border-[1px] rounded-[4px] bg-[#fff] lg:py-[10px] py-[10px] text-center text-base"
          >
            <p className="absolute left-0 top-[50%] translate-x-[50%] translate-y-[-50%]">
              <GoogleIcon />
            </p>
          </Button>
        </div>
        <div className="md:w-1/2 w-full">
          <Button
            type="submit"
            value={t('facebook')}
            extraClass="pl-[42px] relative flex items-center justify-center w-full border-[#626262] border-[1px] rounded-[4px] bg-[#fff] lg:py-[10px] py-[10px] text-center text-base md:ml-[18px] md:mt-[0] mt-[20px]"
          >
            <p className="absolute left-0 top-[50%] translate-x-[50%] translate-y-[-50%]">
              <FacebookIcon />
            </p>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FooterForm;
