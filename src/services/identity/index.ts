import AuthorizedInstance from '../authorized-api';

export const baseUrl = process.env.REACT_APP_API_SERVER;

export const crmPlatform = `${process.env.REACT_APP_API_SERVER}/crm`;

export const authenticateURL = process.env.REACT_APP_AUTHENTICATE;

const IdentityService = AuthorizedInstance(baseUrl);

export default IdentityService;


export const USERS_API_URL = 'users'
export const PLATFORM_ACCESSES = 'platform-accesses'
export const INVITE_USER = 'users/invite'
export const CONFIRM_INVITE_USER = 'users/confirm-invite'
export const COMPANY_API_URL = 'companies'
export const LEAD_API_URL = 'leads'
export const CUSTOMER_API_URL = 'customers'
