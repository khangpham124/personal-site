import React, { createContext, useContext, useEffect, useState } from 'react';
import { User, authType } from '@/interfaces/auth-context';
import { getCookie, removeCookies, setCookies } from 'cookies-next';
import authCustomerServices from '@/services/authCustomerServices';

const initialAuth: authType = {
  user: null,
};

const authContext = createContext<authType>(initialAuth);

// Provider component that wraps your app and makes auth object ...
// ... available to any child component that calls useAuth().
export function ProvideAuth({ children }: { children: React.ReactNode }) {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}
// Hook for child components to get the auth object ...
// ... and re-render when it changes.
export const useAuth = () => {
  return useContext(authContext);
};

// Provider hook that creates auth object and handles state
function useProvideAuth() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const initialAuth = getCookie('user');
    if (initialAuth) {
      const initUser = JSON.parse(initialAuth as string);
      setUser(initUser);
    }
  }, []);

  useEffect(() => {
    setCookies('user', user);
    setCookies('token', user?.token);
  }, [user]);

  const register = async (
    email: string,
    fullname: string,
    password: string,
    phone: string
  ) => {
    try {
      await authCustomerServices.register({
        username: fullname,
        password: password,
        email,
        phone,
        role: 0,
      });

      return {
        success: true,
        message: 'register_successful',
      };
    } catch (err: any) {
      return {
        success: false,
        errorCode: (err.response?.data?.errorCode && err.response.data.errorCode) || '',
        message: (err.response?.data?.message && err.response.data.message) || 'alreadyExists',
      };
    }
  };

  const login = async (username: string, password: string) => {
    try {
      const response = await authCustomerServices.login({ username, password });

      const user: any = {
        id: response.data.uuid,
        email: response.data.email,
        fullname: response.data.fullName,
        phone: response.data.phone,
        shippingAddress: response.data.address,
        token: response.data.accessToken,
      };

      setUser(user);

      return {
        success: true,
        message: 'login_successful',
      };
    } catch (err: any) {
      return {
        success: false,
        errorCode: (err.response?.data?.errorCode && err.response.data.errorCode) || '',
        message: (err.response?.data?.message && err.response.data.message) || 'incorrect',
      };
    }
  };

  const verify = async (phone: string) => {
    let isSuccess = true;
    const isActivated = true;
    if (isActivated) {
      try {
        const isSendOtpCode = await authCustomerServices.sendOtp(phone);
        if (isSendOtpCode) isSuccess = true;
      } catch (error) {
        isSuccess = false;
      }
    }

    return {
      success: isSuccess,
      message: isSuccess ? 'verify_successful' : 'verify_failed',
    };
  };


  const checkOtp = async (
    phone: string,
    otpCode: any
  ) => {
    let isSuccess = true;
    try {
      await authCustomerServices.checkOtp({
        phone: phone,
        otpCode: otpCode
      });
    } catch (error) {
      isSuccess = false;
    }

    return {
      success: isSuccess,
      message: isSuccess ? 'OTP valid' : 'OPT invalid , please check',
    };
  };


  const activate = async (
    user: { phone: string; username: string; password: string },
    otpCode: string
  ) => {
    let isSuccess = true;
    await authCustomerServices.accountActivation({
      phone: user.phone,
      otpCode,
      username: user.username,
      password: user.password,
    });

    return {
      success: isSuccess,
      message: isSuccess ? 'activate_successful' : 'activate_failed',
    };
  };

  const forgotPassword = async () => {
    try {
      // const response = await axios.post(
      //   `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/auth/forgot-password`,
      //   {
      //     email,
      //   }
      // );
      const response = {
        data: {
          success: true,
        },
      };
      const forgotPasswordResponse = response.data;
      setUser(user);
      return {
        success: forgotPasswordResponse.success,
        message: 'reset_email_sent',
      };
    } catch (err) {
      console.log(err);
      return {
        success: false,
        message: 'something_went_wrong',
      };
    }
  };

  const logout = () => {
    setUser(null);
    removeCookies('user');
  };

  // Return the user object and auth methods
  return {
    user,
    setUser,
    register,
    login,
    verify,
    activate,
    forgotPassword,
    logout,
    checkOtp
  };
}
