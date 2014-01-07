/**
 * server
 * Copyright (c) 2013, guanglin.an (lucky315.an@gmail.com)
 */

"use strict";


/**
 * Global Module dependencies.
 */
var express = require('express');

/**
 * local dependencies.
 */
var logger = require('./util/logger');

var app = express();

app.set('port', process.env.PORT || 3000);
app.use(express.favicon());
app.use(express.logger('dev'));

app.get('/', function(req, res, next){
  return res.send('hello world!');
});

app.listen(app.get('port'), function(){
  logger.log('Wechat server is listening on port ' + app.get('port'));
});