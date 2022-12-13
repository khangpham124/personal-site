module.exports = {
  env: {
    REACT_APP_API_SERVER: process.env.REACT_APP_API_SERVER,
    REACT_APP_AUTHENTICATE :process.env.REACT_APP_AUTHENTICATE,
    REACT_DOMAIN_URL :process.env.REACT_DOMAIN_URL,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  serverRuntimeConfig: {
    // Will only be available on the server side
    mySecret: 'secret',
    secondSecret: process.env.SECOND_SECRET, // Pass through env variables
  },
  // basePath: '/salus-admin',
};

