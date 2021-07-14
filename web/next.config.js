const path = require('path');

module.exports = {
  pageExtensions: ['page.jsx', 'api.js'],
  sassOptions: {
    includePaths: [path.join(__dirname, 'src/styles')],
  },
  reactStrictMode: true,
};
