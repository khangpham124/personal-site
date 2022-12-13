import HttpClient from '../../../utils/axios/instance';

class Auth extends HttpClient {
  refreshToken = async (token: string) => {
    const response = await this.instance.post('', { token });
    return response.data;
  };
}

const AuthInstance = new Auth();
export default AuthInstance;
