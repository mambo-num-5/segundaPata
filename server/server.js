const nodemon = require('nodemon');
const path = require('path');

nodemon({
  execMap: {
    js: 'node'
  },
  script: path.join(_dirname, 'server/server'),
  ignore: [],
  watch: process.env.NODE_ENV != 'production' ? ['server/*'] : false,
  ext: 'js'
})
.on('restart', function(){
  console.log('Server restarted!');
})
.once('exit', function(){
  console.log('shutting down server');
  process.exit();
});
