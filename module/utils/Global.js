

define(function(require, exports, module){
    
    "use strict";
    
    /* the trick to get global object*/
    
    var Fn = Function, global = (new Fn("return this"))();
    
    if(!global.ext)
        global.ext = {};
    
    global.ext.librequire = global.require;
    
    global.ext.getModule = require;
    
    exports.global = global;
    
    
    
});