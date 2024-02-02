import { Fragment, useState, FC } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { useTranslations } from 'next-intl';

import { useAuth } from '../../context/AuthContext';
import Button from '../Buttons/Button';
import Login from './Login';
import Register from './Register';
import VerifyOtp from './VerifyOtp';
import ForgotPassword from './ForgotPassword';
import SetupPassword from './SetupPassword';

type CurrentPage = 'login' | 'register' | 'forgot-password' | 'verify' | 'setup-pass';

type Props = {
  extraClass?: string;
  children: any;
};

const LoginForm: FC<Props> = ({ extraClass, children }) => {
  const verifyInfo = JSON.parse(localStorage.getItem('verifyInfo') || '{}');
  const auth = useAuth();
  const showButtonActive = false
  const [currentPage, setCurrentPage] = useState<CurrentPage>('login');
  const [open, setOpen] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');
  const [currentAccount, setCurrentAccount] = useState({ username: verifyInfo.phone, password: '' });
  let modalBox: JSX.Element;
  if (auth.user) {
    modalBox = <SuccessModal successMsg={successMsg} setSuccessMsg={setSuccessMsg} />;
  } else {
    if (currentPage === 'login') {
      modalBox = (
        <Login
          onRegister={() => setCurrentPage('register')}
          onForgotPassword={() => setCurrentPage('forgot-password')}
          onVerify={() => setCurrentPage('verify')}
          errorMsg={errorMsg}
          setErrorMsg={setErrorMsg}
          setSuccessMsg={setSuccessMsg}
          setCurrentAccount={setCurrentAccount}
        />
      );
    } else if (currentPage === 'register') {
        modalBox = (
          <div>
          <Register
            onRegister={() => setCurrentPage('verify')}
            errorMsg={errorMsg}
            setErrorMsg={setErrorMsg}
            setSuccessMsg={setSuccessMsg}
            showButtonActive={errorMsg === 'username_existed' ||  errorMsg === 'phone_existed'  ? !showButtonActive : showButtonActive}
            currentPage={errorMsg === 'username_existed' ? 'verify' : ''}
          />
          {errorMsg === 'username_existed' ||  errorMsg === 'phone_existed' ? (
            <Button
            onClick={() => setCurrentPage('verify')}
            value={'Active account'}
            extraClass="w-full rounded-[4px] bg-[#000] lg:py-[14px] py-[10px] text-center text-[16px] capitalize text-[#fbfbfb]" />
          )
          : null }
          </div>
        );
      
    } else if (currentPage === 'verify') {
      modalBox = (
        <VerifyOtp
          onVerify={() => setCurrentPage('setup-pass')}
          user={null}
          successMsg={successMsg}
          errorMsg={errorMsg}
          setErrorMsg={setErrorMsg}
          setSuccessMsg={setSuccessMsg}
          currentAccount={currentAccount}
        />
      );
    } else if (currentPage === 'setup-pass') {
      modalBox = (
        <SetupPassword
          onSetup={() => setCurrentPage('login')}
          user={null}
          successMsg={successMsg}
          errorMsg={errorMsg}
          setErrorMsg={setErrorMsg}
          setSuccessMsg={setSuccessMsg}
          setCurrentAccount={setCurrentAccount}
        />
      );
    } else {
      modalBox = (
        <ForgotPassword
          onLogin={() => setCurrentPage('login')}
          errorMsg={errorMsg}
          setErrorMsg={setErrorMsg}
          setSuccessMsg={setSuccessMsg}
        />
      );
    }
  }

  function closeModal() {
    setOpen(false);
    setErrorMsg('');
    setTimeout(() => {
      setSuccessMsg('profile');
    }, 100);
    setCurrentAccount({ username: '', password: '' });
  }

  function openModal() {
    setOpen(true);
    setCurrentPage('login');
  }

  return (
    <>
      <div className={`${extraClass} line-heigh-1`}>
        <button type="button" onClick={openModal} aria-label="Account" className={`${extraClass}`}>
          {children}
        </button>
      </div>
      <Transition show={open} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          style={{ zIndex: 99999 }}
          static
          open={open}
          onClose={closeModal}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-gray500 opacity-50" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span className="inline-block h-screen align-middle" aria-hidden="true">
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="relative inline-block w-full max-w-xl md:p-40px p-20px overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl">
                <button
                  type="button"
                  className="absolute right-5 top-2 outline-none focus:outline-none text-[#666666] md:text-[32px] text-[24px]"
                  onClick={closeModal}
                >
                  &#10005;
                </button>
                {modalBox}
                {/* {auth.user ? (
                  <SuccessModal
                    successMsg={successMsg}
                    setSuccessMsg={setSuccessMsg}
                  />
                ) : (if (currentPage === "login") {(
                  <Login
                    onRegister={() => setCurrentPage("login")}
                    errorMsg={errorMsg}
                    setErrorMsg={setErrorMsg}
                    setSuccessMsg={setSuccessMsg}
                  />
                )} else if (currentPage === "register") {(
                  <Register
                    onLogin={() => setCurrentPage("register")}
                    errorMsg={errorMsg}
                    setErrorMsg={setErrorMsg}
                    setSuccessMsg={setSuccessMsg}
                  />
                )} else {(
                  <ForgotPassword onRegister={() => setCurrentPage("login")}
                  errorMsg={errorMsg}
                  setErrorMsg={setErrorMsg}
                  setSuccessMsg={setSuccessMsg} />
                )})} */}
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

const SuccessModal = ({
  successMsg,
  setSuccessMsg,
}: {
  successMsg: string;
  setSuccessMsg: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const t = useTranslations('LoginRegister');
  const auth = useAuth();

  const handleLogout = () => {
    auth.logout!();
    setSuccessMsg('');
  };
  return (
    <>
      <Dialog.Title
        as="h3"
        className="lg:text-[24px] whitespace-nowrap text-center my-8 font-medium leading-6 text-gray-900"
      >
        {/* {t("login_successful")} */}
        {/* {t("register_successful")} */}
        {successMsg !== '' ? t(successMsg) : t('profile')}
      </Dialog.Title>
      <div className="mb-12">
        <div>
          {t('name')} - {auth.user?.fullname}
        </div>
        <div>
          {t('email_address')} - {auth.user?.email}
        </div>
        <div>
          {t('phone')} - {auth.user?.phone && auth.user?.phone}
        </div>
        <div>
          {t('shipping_address')} - {auth.user?.shippingAddress && auth.user?.shippingAddress}
        </div>
      </div>
      <div className="flex justify-center items-center">
        <Button value={t('logout')} onClick={handleLogout} />
      </div>
    </>
  );
};

export default LoginForm;
