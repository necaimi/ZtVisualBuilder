
define(function(require, exports, module){
    "use strict";
    
    var _commands    =    {};
    
    function Command(name, id, commandfn)
    {
        this._name          = name;
        this._id            = id;
        this._commandfn     = commandfn;
        this._enabled       = true;
        this._checked       = null;
        
    };
    
    Command.prototype = {
        
        execute:function(){
            var ret = this._commandfn.apply(this, arguments);
            if(ret)
                return ret;
            else
                return (new $.Deferred()).resolve().promise();
        },
        
        getID:function(){
            return this._id;
        },
        
        setName:function(name){
            var b_changed = this._name !== name;
            this._name = name;
            
            if(b_changed)
                $(this).triggerHandler("nameChanged");
            
        },
        
        getName:function(){
            return this._name;
        },
        
        setChecked:function(checked){
            var b_changed = this._checked !== checked;
            
            this._checked = checked;
            
            if(b_changed)
                $(this).triggerHandler("checkedStateChanged");
        },
        
        getChecked:function(){
            return this._checked;
        }
        
    };
    
    
    function register(name, id, commandfn)
    {
        if(_commands[id])
        {
            return null;
        }
        
        if(!name || !id || commandfn)
        {
            return null;
        }
        
        var command = new Command(name, id, commandfn);
        
        _commands[id] = command;
        
        $(exports).triggerHandler("registerCompleted", [command]);
        
        return command;
    }
    
    function get(id){
        return _commands[id];
    }
    
    function execute(id){
        var command = _commands[id];
        
        if(command){
            return command.execute.apply(command, Array.prototype.slice.call(arguments, 1));
        }else{
            return (new $.Deferred()).resolve().promise();
        }
    }
    
    exports.register = register;
    exports.get      = get;
    exports.execute  = execute;
    
});