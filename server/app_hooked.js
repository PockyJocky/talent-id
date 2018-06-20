// ./express-server/app_hooked.js
require('babel-register')({
    presets: [
      "env",
      "es2015"
    ],
    plugins: [
      "transform-class-properties",
      "transform-object-rest-spread"
    ]
});
require('./app.js');