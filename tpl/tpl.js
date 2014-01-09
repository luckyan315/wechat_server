
var ejs = require('ejs');

/**
 * deal with template data
 *  xml data via ejs
 */

var Tpl = function(){
  
};

(function(){
      
}).call(Tpl.prototype);

var compile = function(skel){
  return ejs.compile(skel);
};

module.exports = Tpl;
module.exports.compile = compile;