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

    /*namespace, base_object*/
    function _nrobject(){
        this.width = 0,
        this.height= 0;
        this.clientX = 0;
        this.clientY = 0;
    };
    
    var nro_target = {}, _len = 0;
    function NRO(obj){
            
        if(nro_target[obj] != null){
           
            return nro_target[obj];
        }
        
        var _obj = new _nrobject();
        nro_target[obj] = _obj;
        return _obj;
    };
    
    NRO.nr = _nrobject.prototype;
    NRO.version = "1.0.0.1";
    return NRO;
    
});

/*msg*/

(function(NRO){
    "use strict";
    if(!NRO){
        return null;
    }
    
    NRO.MSG = {
        "inited":"initlized",
        "cbd":"checkboundary",
        "drag":"drag",
        "move":"move"
    };
    

    NRO.nr.bind = function(type, cfn){
        NRO.Msgqueue[type] = {target:this, callfn:cfn};
    };
    
    NRO.nr.unbind = function(type, cfn){
        
    };
    
    NRO.MsgManager = function(){
        this.Msgqueue = {};
        
        this.trigger = function(type){
            
        };
    };
   
})(NRO);

function initedhandler(){
    console.log("get inited");
};
    var nro = new NRO(".ooa");
    nro.bind(NRO.MSG.inited, initedhandler);



