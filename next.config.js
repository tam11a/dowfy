const withPWA = require("next-pwa");

module.exports = withPWA({
  // reactStrictMode: true,
  pwa: {
    dest: "public",
    register: true,
    skipWaiting: true,
    mode: "production",
    disable: process.env.NODE_ENV === 'development',
  },
});
