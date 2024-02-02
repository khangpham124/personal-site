import { Dialog } from '@headlessui/react';
import { useTranslations } from 'next-intl';
import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import Button from '../Buttons/Button';
import Input from '../Input/Input';

type Props = {
  onVerify: () => void;
  user: any;
  currentAccount: { username: string; password: string };
  successMsg?: string;
  errorMsg: string;
  setErrorMsg: React.Dispatch<React.SetStateAction<string>>;
  setSuccessMsg: React.Dispatch<React.SetStateAction<string>>;
};

const VerifyOtp: React.FC<Props> = ({
  onVerify,
  errorMsg,
  setErrorMsg,
  setSuccessMsg
}) => {
  const auth = useAuth();
  const [otp, setOtp] = useState('');
  const [phone, setPhone] = useState('');
  const [showInputOpt, setShowInputOpt] = useState(false);
  const t = useTranslations('LoginRegister');

  const handleSubmitPhone = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const activateResponse = await auth.verify!(phone);
    if (activateResponse.success) {
      setSuccessMsg(t('verify_successful'));
      setShowInputOpt(true)
    } else {
      setErrorMsg(t('verify_fail'));
    }
  };

  const handleSubmitOtp = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const activateResponse = await auth.checkOtp!(phone, otp);
    if (activateResponse.success) {
      setSuccessMsg(t('verify_successful'));
      onVerify();
        const verifyInfo = {
          phone : phone,
          otp: otp,
          username: phone
      }
      localStorage.removeItem('verifyInfo');
      localStorage.setItem('verifyInfo', JSON.stringify(verifyInfo));
    } else {
      setErrorMsg(t('verify_fail'));
    }
  };

  return (
    <>
      <Dialog.Title
        as="h3"
        className="text-[24px] text-[#333] uppercase text-center mb-24px font-medium leading-6 text-gray-900"
      >
        {t('verify')} OTP
      </Dialog.Title>
      <form onSubmit={handleSubmitPhone} className="mt-2">
        <div className="block my-[24px]">
          <label htmlFor="otp" className="text-base text-[#333]">
            Phone number
          </label>
          <Input
            placeholder="Phone number"
            name="phone"
            required
            extraClass="w-full rounded-[4px]"
            border="border-[1px] mt-[9px] border-[#66666659]"
            onChange={(e) => setPhone((e.target as HTMLInputElement).value)}
            value={phone}
          />
        </div>

        {errorMsg !== '' && (
          <div className="text-red text-sm mb-4 whitespace-nowrap">{t(errorMsg)}</div>
        )}

        <Button
          type="submit"
          value={t('send_otp')}
          extraClass="w-full rounded-[4px] bg-[#000] lg:py-[10px] py-[10px] text-center text-base  mb-0 capitalize text-[#fbfbfb]"
        />
      </form>

      {showInputOpt ? (
        <form onSubmit={handleSubmitOtp} className="mt-2">
        <div className="block my-[24px]">
          <label htmlFor="otp" className="text-base text-[#333]">
            OTP
          </label>
          <Input
            placeholder="OTP"
            name="otp"
            required
            extraClass="w-full rounded-[4px]"
            border="border-[1px] mt-[9px] border-[#66666659]"
            onChange={(e) => setOtp((e.target as HTMLInputElement).value)}
            value={otp}
          />
        </div>

        {errorMsg !== '' && (
          <div className="text-red text-sm mb-4 whitespace-nowrap">{t(errorMsg)}</div>
        )}

        <Button
          type="submit"
          value={t('verify')}
          extraClass="w-full rounded-[4px] bg-[#000] lg:py-[10px] py-[10px] text-center text-base  mb-0 capitalize text-[#fbfbfb]"
        />
{/* 
        {successMsg && (
          <div className="text-red text-sm mb-4 whitespace-nowrap">{t(successMsg)} <span className="text-blue cursor-pointer" onClick={onVerify}>{t('login')}</span></div>
        )} */}
      </form>
      ) : null
      }
      
    </>
  );
};

export default VerifyOtp;
