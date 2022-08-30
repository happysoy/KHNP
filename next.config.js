module.exports = {
  swcMinify: false,
  trailingSlash: true,
  env: {
    // HOST
    HOST_API_KEY: process.env.API_URL,

    AWS_COGNITO_USER_POOL_ID: process.env.AWS_COGNITO_USER_POOL_ID,
    AWS_COGNITO_CLIENT_ID: process.env.AWS_COGNITO_CLIENT_ID,
  },
};
