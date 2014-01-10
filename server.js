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
var PORT = config.port;
var TOKEN = config.token;

var common = require('./util/common');
var encrypt_sha1 = common.encrypt_sha1;

var app = express();

app.set('port', PORT || process.env.PORT || 3000);
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.query());

app.get('/', function(req, res, next){

  if (!checkValidUrl(req)) {
    res.writeHead(401);
    return res.end('Invalid request');
  }

  var method = req.method;
  if (method === 'GET') {
    res.writeHead(200);
    return res.end(req.query.echostr);
  } else {
    //TODO: impls other http request...
    return res.end('not impls yet...');
  }
  
});

app.listen(app.get('port'), function(){
  logger.log('Wechat server is listening on port ' + app.get('port'));
});

function checkValidUrl(req){
  var query = req.query;
  var token = req.wechat_token || TOKEN;
  var signature = query.signature;
  var timestamp = query.timestamp;
  var nonce = query.nonce;

  //rules check the valid url defined by wechat,
  //more info: http://mp.weixin.qq.com/wiki/index.php?title=%E6%8E%A5%E5%85%A5%E6%8C%87%E5%8D%97
  return encrypt_sha1([token, timestamp, nonce].sort().join('')) === signature;
}