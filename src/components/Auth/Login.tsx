import EyesHide from '@/public/assets/icons/EyesHide';
import EyesShow from '@/public/assets/icons/EyesShow';
import { Dialog } from '@headlessui/react';
import { useTranslations } from 'next-intl';
import React, { useState, useEffect } from 'react';
import { Else, If, Then } from 'react-if';
import { useAuth } from '../../context/AuthContext';
import Button from '../Buttons/Button';
import Input from '../Input/Input';
import FooterForm from './components/FooterForm';
import { ERROR_CODE } from '@/constants/common';

type Props = {
  onRegister: () => void;
  onForgotPassword: () => void;
  onVerify: () => void;
  errorMsg: string;
  setErrorMsg: React.Dispatch<React.SetStateAction<string>>;
  setSuccessMsg: React.Dispatch<React.SetStateAction<string>>;
  setCurrentAccount: Function;
};

const Login: React.FC<Props> = ({
  onRegister,
  onVerify,
  errorMsg,
  setErrorMsg,
  setSuccessMsg,
  setCurrentAccount,
}) => {
  const auth = useAuth();
  const [email, setEmail] = useState('');
  const [displayPass, setDisplayPass] = useState<boolean>(false);
  const [password, setPassword] = useState<string>('');
  const t = useTranslations('LoginRegister');

  useEffect(() => {
    return () => {
      setErrorMsg('');
      setSuccessMsg('');
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const loginResponse = await auth.login!(email, password);
    if (loginResponse.success) {
      setSuccessMsg('login_successful');
    } else {
      switch (loginResponse.errorCode) {
        case ERROR_CODE.ACCOUNT_IS_NOT_ACTIVATED:
          setErrorMsg('account_not_active');
          break;
        case ERROR_CODE.PHONE_IS_EXISTED_WITHOUT_CREDENTIAL:
          setErrorMsg('phone_without_credential');
          break;
        default:
          setErrorMsg('incorrect_email_password');
          break;
      }
    }
    setCurrentAccount((prev: any) => ({ ...prev, username: email, password }));
  };

  return (
    <>
      <Dialog.Title
        as="h3"
        className="text-[24px] text-[#333] uppercase text-center mb-24px font-medium leading-6 text-gray-900"
      >
        {t('login')}
      </Dialog.Title>
      <form onSubmit={handleSubmit} className="mt-2">
        <div className="block">
          <label htmlFor="email" className="text-base text-[#333]">
            Account
          </label>
          <Input
            placeholder={`${t('email_address')}`}
            name="email"
            required
            extraClass="w-full rounded-[4px]"
            border="border-[1px] mt-[9px] border-[#66666659]"
            onChange={(e) => setEmail((e.target as HTMLInputElement).value)}
            value={email}
          />
        </div>
        <div className="block my-[24px]">
          <div className="flex items-center justify-between mb-[9px]">
            <label htmlFor="password" className="text-base text-[#333]">
              {t('password')}
            </label>
            <div
              className="flex items-center cursor-pointer"
              onClick={() => setDisplayPass(!displayPass)}
            >
              <If condition={!displayPass}>
                <Then>
                  <EyesShow />
                  <span className="ml-[4px] text-[#666666cc] md:text-[14px] text-[14px]">
                    {' '}
                    {t('show')}
                  </span>
                </Then>
                <Else>
                  <EyesHide />
                  <span className="ml-[4px] text-[#666666cc] md:text-[14px] text-[14px]">
                    {' '}
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
          <div className="flex items-center justify-between mb-4">
            <div className="text-red text-sm whitespace-nowrap">{t(errorMsg)}</div>
            <div className="text-blue text-sm whitespace-nowrap cursor-pointer" onClick={onVerify}>
              {t('activate')}
            </div>
          </div>
        )}
        <Button
          type="submit"
          value={t('login')}
          extraClass="w-full rounded-[4px] bg-[#000] lg:py-[10px] py-[10px] text-center text-base  mb-0 capitalize text-[#fbfbfb]"
        />

        <FooterForm onRegister={onRegister} />
      </form>
    </>
  );
};

export default Login;
