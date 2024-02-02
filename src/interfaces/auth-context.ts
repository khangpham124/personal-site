export type User = {
  id: number;
  email: string;
  fullname: string;
  shippingAddress?: string;
  phone?: string;
  token: string;
};

export type authType = {
  user: null | User;
  setUser?: Function;
  register?: (
    email: string,
    fullname: string,
    password: string,
    phone: string,
    address?: string
  ) => Promise<{
    success: boolean;
    message: string;
    errorCode?: string;
  }>;
  login?: (
    email: string,
    password: string
  ) => Promise<{
    success: boolean;
    message: string;
    errorCode?: string;
  }>;
  verify?: (phone: string) => Promise<{
    success: boolean;
    message: string;
  }>;
  checkOtp?: (phone: string, otp: string) => Promise<{
    success?: boolean;
    message?: string;
  }>;
  activate?: (
    user: { phone: string; username: string; password: string },
    otpCode: string
  ) => Promise<{
    success: boolean;
    message: string;
  }>;
  forgotPassword?: (email: string) => Promise<{
    success: boolean;
    message: string;
  }>;
  logout?: () => void;
};
