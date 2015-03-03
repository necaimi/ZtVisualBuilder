// MetaObject interface;


(function(mod){
    if(mod){
        if(typeof exports === "Object" && typeof module === "Object"){
            module.exports = mod();
    }else if(typeof define === "function" && define.amd){
        define([], mod);
    }else{
        var _global = (new Function("return this"))();
        _global.ZtViual = mod();
    }
    }
})(function(){
    function ZtViual(key){
        if(!key){
            //check key;
            throw new Error("#error:  you don't have the Privilege!");
        }
        
        this._key = key;
        return ZtViual.core;
        
    };
    
    ZtViual.version = "1.0.01";
    ZtViual.core = ZtViual.prototype;
    return ZtViual;
    
});
    
    // metaType ;
    (function(mod){
        mod.core.metaType = {
            "Ui":0,
            "Other":1
        }
    })(ZtViual);


    // metaobject 
    (function(mod){
       if(mod){
           function MetaObject(type){
               //ui signal or others - not use now;
                "use strict";
               this._type = type || mod.core.metaType.Other;
               this._idx = 0;
           };
           
           MetaObject.prototype = {
               
               findIdx:function(signal){
                    return 0;
                },
               
               emit:function(signal){
                   return mod.core._signal._emit(this, signal);
               },
               
               connect:function(signal, receiver, slot){
                   return mod.core._signal._connect(this, signal, receiver, slot);
               }
           };
           
           mod.core.metaObject = function(type){
               return new MetaObject(type);
           };
           
       }else{
           throw new Error("#error(0x10): ZtViual is not exist;");
       }
        
    })(ZtViual);
    
    
    //signal slot manager;
    (function(mod){
        "use strict";
        if(mod){
            
            mod.core._signal = {
                signalMap:"",
                _connect:function(sender, signal, reciever, slot){
                    if(!sender || !signal || !reciever || !slot)
                        throw new Error("#error(0x11): pointer is null");
                    
                    var _idx = sender.findIdx(signal);
                    if(_idx){
                        
                    }else{
                        //append;
                        _this.signalMap = _idx;
                    }
                    
                },
                _emit:function(sender, signal){
                     var signal_idx = sender.findIdx(signal),
                        _slots = _this._getSlots(signal);
                     
                     //call;
                      
                    
                },
                
                _getSlots:function(slot){
                    //get slot with signal, type : array;
                    
                }
            };
            
            var _this = mod.core._signal;
        }else{
           throw new Error("#error: ZtViual is not exist;");
       }
    })(ZtViual);
    