const resolve = (dir) => require('path').join(__dirname, dir);

module.exports = {
  resolve: {
    alias: {
      'diy-hooks': resolve('src'),
    },
  },
};
