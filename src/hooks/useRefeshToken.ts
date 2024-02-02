import { User } from '@/interfaces/auth-context';
import http from '@/lib/http';
import { useAuth } from '@/context/AuthContext';

const useRefreshToken = () => {
  const { setUser } = useAuth();

  const refresh = async () => {
    const response = await http.post('/api/jusystem/auth/customer/refresh-token', {
      withCredentials: true,
    });

    setUser &&
      setUser((prev: User) => {
        console.log(JSON.stringify(prev));
        console.log(response.data);
        return {
          ...prev,
          token: response.data.accessToken,
        };
      });

    return response.data.accessToken;
  };

  return refresh;
};

export default useRefreshToken;
