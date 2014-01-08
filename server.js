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
var config = require('./config');

var app = express();

app.set('port', process.env.PORT || 3000);
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.query());


app.get('/', function(req, res, next){
  var token = config.TOKEN;
  
  return res.send(token);
});

app.listen(app.get('port'), function(){
  logger.log('Wechat server is listening on port ' + app.get('port'));
});