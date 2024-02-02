import {
  AuthCustomerServices,
  QueryObject,
  QueryCheckOtpObj,
  QueryRegisterObject,
  QueryActiveObj,
} from '@/interfaces/authCustomer-service';

import http from '@/lib/http';

const authCustomerServices: AuthCustomerServices = {
  login: (queryObject: QueryObject) => {
    return http.post('/auth/customer/login', {
    ...queryObject
    });
  },

  register: (queryObject: QueryRegisterObject) => {
    return http.post('/auth/customer/register', {
      ...queryObject,
    });
  },

  sendOtp: (phone: string) => {
    return http.post('/auth/customer/send-verify-phone-otp', {
      phone,
    });
  },

  checkOtp: (queryObject: QueryCheckOtpObj) => {
    return http.post('/auth/customer/check-otp', queryObject);
  },

  accountActivation: (queryObject: QueryActiveObj) => {
    return http.post('/auth/customer/account-activation', queryObject);
  },
};

export default authCustomerServices;
