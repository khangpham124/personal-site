import cookies from 'js-cookie';

export const getUserTokenFromCookie = async () => {
  return new Promise((resolve, reject) => {
    const hasRememberToken = cookies.get(
      process.env.REACT_APP_SESSION_COOKIE_NAME
        ? process.env.REACT_APP_SESSION_COOKIE_NAME
        : ''
    );
    if (!hasRememberToken) reject(null);

    resolve(hasRememberToken);
  });
};

export const getUserFromCookie = () => {
  const cookie = cookies.get('auth');
  if (!cookie) {
    return;
  }
  return JSON.parse(cookie);
};

export const setUserCookie = (user) => {
  cookies.set('auth', user, {
    // firebase id tokens expire in one hour
    // set cookie expiry to match
    expires: 1 / 24
  });
};

export const removeUserCookie = () => cookies.remove('auth');
