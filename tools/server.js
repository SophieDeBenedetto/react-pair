import express from 'express';  
import webpack from 'webpack';  
import path from 'path';  
import config from '../webpack.config.dev';  
import open from 'open';  
import favicon from 'serve-favicon';


/* eslint-disable no-console */

const port = 3000;  
const app = express();  
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {  
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));  

app.get('*', function(req, res) {  
  res.sendFile(path.join( __dirname, '../src/index.html'));
});

const server = app.listen(port, function(err) {  
  if (err) {
    console.log(err);
  } else {
    open(`http://localhost:${port}`);
  }
});

const io = require('socket.io')(server);


io.on('connection', (socket) => {
  console.log('a user connected');
 
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
  socket.on('coding event', function(coords) {
    console.log('in EXPRESS coding event')
    socket.broadcast.emit('receive code', coords)
  })
});