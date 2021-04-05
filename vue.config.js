'use strict';

const path = require('path');

module.exports = {
  pages: {
    index: {
      entry: path.join(__dirname, 'client/main.js')
    }
  },
  configureWebpack: ({
    devServer: {
      proxy: {
        '/api': {
          target: process.env.VUE_APP_API_HOST,
          secure: process.env.NODE_ENV === 'production'
        }
      }
    }
  })
};
