// nrobj.js  
// 2015/1/3, author : umbrella
// models obj support amd and cmd 


(function(m){
    if(typeof exports == "object" && typeof module  == "object"){
        module.exports = m();
    }else if(typeof define == "function" && define.amd){
        return define([], m);
    }else{
         
        var _global = (new Function("return this"))();
        _global.NRObject = m();
    }
})(function(){
    "use strict";
    
    function sendMessage(target, msg, wparam){
        
    };
    
    function NRObject(className){
        this._clasName = className;
        this.receiveMessage = function(msg, wparam){
            return true;
        };
        
        
    }
    
    NRObject.version = "1.0.0.1";
    return NRObject;
    
});