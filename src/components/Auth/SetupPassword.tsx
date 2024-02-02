import { useTranslations } from 'next-intl';
import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import Button from '../Buttons/Button';
import Input from '../Input/Input';

type Props = {
  onSetup: () => void;
  user: any;
  verifyInfo?: any;
  successMsg: string;
  errorMsg: string;
  setErrorMsg: React.Dispatch<React.SetStateAction<string>>;
  setSuccessMsg: React.Dispatch<React.SetStateAction<string>>;
  setCurrentAccount: Function;
};

const VerifyOtp: React.FC<Props> = ({
  onSetup,
  successMsg,
  errorMsg,
  setErrorMsg,
  setSuccessMsg,
  // verifyInfo
}) => {

  const auth = useAuth();
  const [newpassword, setNewpassword] = useState('');
  const t = useTranslations('LoginRegister');

  const handleSubmitOtp = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const info = JSON.parse(localStorage.getItem('verifyInfo') || '{}');
    const activateResponse = await auth.activate!(
      { phone : info?.phone , username: info.username, password: newpassword },
      info?.otp
    );
    if (activateResponse.success) {
      setSuccessMsg(t('active_successful'));
      localStorage.removeItem('verifyInfo');
    } else {
      setErrorMsg(t('verify_fail'));
    }
  };


  return (
    <>

        <form onSubmit={handleSubmitOtp} className="mt-2">
        <div className="block my-[24px]">
          <label htmlFor="otp" className="text-base text-[#333]">
            Setup your password test
          </label>
          <Input
            placeholder="password"
            name="password"
            required
            extraClass="w-full rounded-[4px]"
            border="border-[1px] mt-[9px] border-[#66666659]"
            onChange={(e) => setNewpassword((e.target as HTMLInputElement).value)}
            value={newpassword}
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

        {successMsg && (
          <div className="text-red text-sm mb-4 whitespace-nowrap">{t(successMsg)} <span className="text-blue cursor-pointer" onClick={onSetup}>{t('login')}</span></div>
        )}
      </form>
      
      
    </>
  );
};

export default VerifyOtp;
