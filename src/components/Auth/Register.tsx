import EyesHide from '@/public/assets/icons/EyesHide';
import EyesShow from '@/public/assets/icons/EyesShow';
import { Dialog } from '@headlessui/react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { If, Then, Else } from 'react-if';
import { useAuth } from '../../context/AuthContext';
import Button from '../Buttons/Button';
import Input from '../Input/Input';
import FooterForm from './components/FooterForm';
import { ERROR_CODE } from '@/constants/common';

type Props = {
  onRegister: () => void;
  errorMsg: string;
  setErrorMsg: React.Dispatch<React.SetStateAction<string>>;
  setSuccessMsg: React.Dispatch<React.SetStateAction<string>>;
  currentPage: string;
  showButtonActive: boolean;
};

const Register: React.FC<Props> = ({ onRegister, errorMsg, setErrorMsg, setSuccessMsg, showButtonActive }) => {
  const auth = useAuth();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [displayPass, setDisplayPass] = useState<boolean>(false);
  const [phone, setPhone] = useState('');
  // const [address, setAddress] = useState('');
  const [isAcceptPolicy, setAcceptPolicy] = useState(false);
  const t = useTranslations('LoginRegister');

  useEffect(() => {
    return () => {
      setErrorMsg('');
      setSuccessMsg('');
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const regResponse = await auth.register!(email, name, password, phone);
    if (regResponse.success) {
      setSuccessMsg('register_successful');
      onRegister();
    } else {
      switch (regResponse.errorCode) {
        case ERROR_CODE.USERNAME_IS_EXISTED:
          setErrorMsg('username_existed');
          break;
        case ERROR_CODE.EMAIL_IS_EXISTED:
          setErrorMsg('email_existed');
          break;
        case ERROR_CODE.PHONE_IS_EXISTED:
          setErrorMsg('phone_existed');
          break;
        default:
          setErrorMsg('error_occurs');
          break;
      }
    }
  };

  // auth.user ? console.log(auth.user) : console.log('No User');

  return (
    <>
      <Dialog.Title
        as="h3"
        className="md:text-[32px] text-[24px] text-[#333] uppercase text-center mb-24px font-medium leading-6 text-gray-900"
      >
        {t('register')}
      </Dialog.Title>
      <form onSubmit={handleSubmit} className="mt-2">
        <div className="block">
          <label htmlFor="name" className="text-[16px] text-[#333]">
            {t('name')}
          </label>
          <Input
            type="name"
            placeholder={`${t('name')}`}
            name="name"
            required
            extraClass="w-full rounded-[4px]"
            border="border-[1px] mt-[9px] border-[#66666659]"
            onChange={(e) => setName((e.target as HTMLInputElement).value)}
            value={name}
          />
        </div>

        <div className="block my-[16px] lg:my-[24px]">
          <label htmlFor="email" className="text-[16px] text-[#333]">
            Email
          </label>
          <Input
            type="email"
            placeholder={`${t('email_address')}`}
            name="email"
            required
            extraClass="w-full rounded-[4px]"
            border="border-[1px] mt-[9px] border-[#66666659]"
            onChange={(e) => setEmail((e.target as HTMLInputElement).value)}
            value={email}
          />
        </div>

        <div className="block">
          <label htmlFor="phone" className="text-[16px] text-[#333]">
            {t('phone')}
          </label>
          <Input
            type="text"
            placeholder={`${t('phone')}`}
            name="phone"
            required
            extraClass="w-full rounded-[4px]"
            border="border-[1px] mt-[9px] border-[#66666659]"
            onChange={(e) => setPhone((e.target as HTMLInputElement).value)}
            value={phone}
          />
        </div>
        <div className="block my-[16px] lg:my-[24px]">
          <div className="flex items-center justify-between">
            <label htmlFor="password" className="text-[16px] text-[#333]">
              {t('password')}
            </label>
            <div
              className="flex items-center cursor-pointer"
              onClick={() => setDisplayPass(!displayPass)}
            >
              <If condition={!displayPass}>
                <Then>
                  <EyesShow />
                  <span className="ml-[4px] text-[#666666cc] md:text-[18px] text-[14px]">
                    {t('show')}
                  </span>
                </Then>
                <Else>
                  <EyesHide />
                  <span className="ml-[4px] text-[#666666cc] md:text-[18px] text-[14px]">
                    {t('hide')}
                  </span>
                </Else>
              </If>
            </div>
          </div>

          <Input
            type={!displayPass ? 'password' : 'text'}
            placeholder={`${t('password')}`}
            name="password"
            required
            extraClass="w-full rounded-[4px] mt-0"
            border="border-[1px] mt-[9px] border-[#66666659]"
            onChange={(e) => setPassword((e.target as HTMLInputElement).value)}
            value={password}
          />
        </div>

        {errorMsg !== '' && (
          <div className="text-red text-sm mb-2 whitespace-nowrap">{t(errorMsg)}</div>
        )}
      {!showButtonActive ? (
        <div>
          <div className="flex items-start justify-between mb-4">
            <div className="checkbox_policy flex items-start">
              <input
                type="checkbox"
                className="checkbox__input"
                onClick={(e: any) => setAcceptPolicy(e.target.checked)}
              />
              <span className="checkbox__inner"></span>
              <span className="ml-8px">
                {t('accept_policy_desc')}
                <Link href={'#'}>
                  <a className="underline leading-[21px] text-[14px] text-[#333] ml-[4px]">
                    {t('accept_policy_desc_link')}
                  </a>
                </Link>
              </span>
            </div>
          </div>
          <Button
            disabled={!isAcceptPolicy}
            type="submit"
            value={t('register')}
            extraClass="w-full rounded-[4px] bg-[#000] lg:py-[14px] py-[10px] text-center text-[16px] capitalize text-[#fbfbfb]"
          />
          <FooterForm />
        </div>
        ) : null}
        
        
        
      </form>
    </>
  );
};

export default Register;
