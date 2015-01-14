// nrobj.js  
// 2015/1/3, author : umbrella
// model is supported by amd and cmd 


/*bs*/
(function(m){
    if(typeof exports == "object" && typeof module  == "object"){
        module.exports = m();
    }else if(typeof define == "function" && define.amd){
        return define([], m);
    }else{
        var _global = (new Function("return this"))();
        _global.NRO = m();
    }
})(function(){
    "use strict";

    /*object, msg */
    function _object(){
        
    };
    
    function NRO(){
        this._childs = [];
    };

    NRO.version = "1.0.0.1";
    return NRO;
    
});

/*msg*/
(function(NR){
    if(!NR){
        return null;
    }
    NR.MSG = {
        "inited":"initlized",
        "cbd":"checkboundary",
        "drag":"drag",
        "move":"move"
    };
    
    function MsgManager(){
        this._msg = {};
    }
   
   
})(NRO);

(function(){
    function ss(){
    this._oop = "tst";
    return _oop;
    }
    return ss;
 });
console.log(NRO, NRO._childs);

