import Link from 'next/link';
import { useTranslations } from 'next-intl';
import FacebookLogo from '@/public/assets/icons/FacebookLogo';
import InstagramLogo from '@/public/assets/icons/InstagramLogo';
import Button from '../Buttons/Button';
import Input from '../Input/Input';
import styles from './Footer.module.css';
import Image from 'next/image';
import LOGO from '@/public/assets/logo-footer.png';
import Payment_1 from '@/public/assets/icons/payment.png';
import TiktokIcon from '@/public/assets/icons/TiktokIcon';
import classNames from 'classnames';
import { useRouter } from 'next/router';
import { HOME } from '@/constants/routes';

export default function Footer() {
  const t = useTranslations('Navigation');
  const { route } = useRouter();

  return (
    <>
      <div
        className={`${styles.footerContainer} ${
          route !== HOME ? 'border-t-[1px] border-[#e6e6e6]' : 'border-0'
        } `}
      >
        <div
          className={`lg:px-40px px-20px sm:px-8 md:px-12 ${styles.footerContents} flex flex-wrap`}
        >
          <div className="lg:w-1/3 md:w-1/2 w-full">
            <h3 className={styles.footerHead}>
              <div className="flex-1 flex justify-start cursor-pointer">
                <div className="w-[201px] mb-[12px]">
                  <Link href="/">
                    <a className="w-full">
                      <Image
                        className="justify-center"
                        src={LOGO}
                        alt="Ju Clothing"
                        width={182}
                        height={58}
                        layout="responsive"
                      />
                    </a>
                  </Link>
                </div>
              </div>
            </h3>
            <div className={styles.column}>
              <div className="flex">
                <h4 className="text-base text-[#414042] p-[0px] font-normal">
                  {t('open_store')}:
                </h4>
                <span className="text-base mb-[14px] text-[#414042] p-[0px] font-normal ml-[4px]">
                  9AM - 10PM
                </span>
              </div>
              <div className="flex">
                <h4 className="text-base text-[#414042] p-[0px] font-normal">{t('support')}:</h4>
                <Link href="tel:0909904433">
                  <a className="cursor-pointer mb-[14px] text-base text-[#414042] p-[0px] font-normal ml-[4px]">
                    090 990 4433
                  </a>
                </Link>
              </div>
              <div className="flex">
                <h4 className="text-base text-[#414042] p-[0px]">Email:</h4>
                <Link href="mailto:support@juclothing.vn">
                  <a className="cursor-pointer mb-[14px] text-base text-[#414042] p-[0px] font-normal ml-[4px]">
                    support@juclothing.vn
                  </a>
                </Link>
              </div>
              <div className="flex">
                <h4 className="text-base text-[#414042] p-[0px] font-normal whitespace-nowrap">
                  {t('address')}:
                </h4>
                <Link href={'#'}>
                  <a className="cursor-pointer text-base text-[#414042] p-[0px] font-normal ml-[4px]">
                    22 Nguyễn Trãi, P. Bến Thành, Q.1, Tp.HCM
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 md:w-1/2 w-full lg:my-0 my-24px">
            <h4 className="text-[20px] mb-4 text-gray700 uppercase font-PlusJakartaSansSemiBold">
              {t('our_policy')}
            </h4>
            <div className={styles.column}>
              <Link href={'#'}>
                <a className="cursor-pointer mb-14px text-base text-[#414042] p-[0px] font-normal">
                  {t('faqs')}
                </a>
              </Link>
              <Link href={'#'}>
                <a className="cursor-pointer mb-14px text-base text-[#414042] p-[0px] font-normal">
                  {t('membership_program')}
                </a>
              </Link>
              <Link href={'#'}>
                <a className="cursor-pointer mb-14px text-base text-[#414042] p-[0px] font-normal">
                  {t('return_program')}
                </a>
              </Link>
              <Link href={'#'}>
                <a className="cursor-pointer mb-14px text-base text-[#414042] p-[0px] font-normal">
                  {t('our_policy_shipping')}
                </a>
              </Link>
            </div>
            <div className={`flex`}>
              <div>
                <Image
                  className="justify-center"
                  src={Payment_1}
                  alt="payment"
                  width={400}
                  height={45}
                />
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 md:w-1/2 w-full">
            <h4 className="text-[20px] mb-4 text-gray700 uppercase font-PlusJakartaSansSemiBold">
              {t('register')}
            </h4>
            <span className="text-center  text-base">{t('newsletter_desc')}</span>
            <div className="mt-16px flex w-full sm:w-auto sm:flex-row">
              <Input
                placeholder={t('email_of_you')}
                name="email"
                type="email"
                extraClass={`${styles.inputEmail} sm:w-auto border-[#e7e7e7] border-[1px]`}
              />
              <Button
                size="lg"
                value={t('register')}
                extraClass={classNames(
                  'bg-[#000] px-4 whitespace-nowrap w-[106px] h-[48px] p-0 h-[46px] ml-0 mt-4 sm:mt-0 tracking-widest sm:tracking-normal sm:mt-0 w-auto w-full sm:w-auto text-white',
                  [`${styles.btnRegister}`]
                )}
              />
            </div>
            <div className="flex items-center mt-16px">
              <Link href={'#'}>
                <a className={styles.socialItem}>
                  <FacebookLogo />
                </a>
              </Link>
              <Link href={'#'}>
                <a className={`${styles.socialItem} mx-8px`}>
                  <InstagramLogo />
                </a>
              </Link>
              <Link href={'#'}>
                <a className={styles.socialItem}>
                  <TiktokIcon />
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.bottomFooter}>
        <span className="text-[14px] font-PlusJakartaSansMedium text-[#000000]">
          &copy; {t('all_rights_reserved')}
        </span>
      </div>
    </>
  );
}
