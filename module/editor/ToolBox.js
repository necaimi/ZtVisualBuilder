define(function(require, exports, module){
    "use strict";
    
    var Command = ext.getModule("module/command/Commands"),
        CommandManager = ext.getModule("module/command/CommandManager");
    
    var $dom_toolbox = null, domtree = {"Editor_Tool":null, "Module_Tool":null, "Sku_Tool":null};
    
    
    var ToolBoxList = {
        "EDIT_BOX":"edit-box",
        "MODULE_BOX":"module-box",
        "SKU_BOX":"sku-box"
    };
    
    
    // toolbox;
    
    var toolBoxMap = {}, toolItemMap = {};
    
    function _getToolItem(id){
        return toolItemMap[id];
    };
    
    function _getHTMLToolItem(id){
        return $("#" + id).get(0);
    };
    
    function ToolBox(id)
    {
        this.id = id;
    };
    
    ToolBox.prototype._getToolItemID = function(commandID){
        return (this.id + "-" +commandID);
    };
    
    ToolBox.prototype._getToolItemByCommand = function(command){
        if(!command){
            return null;
        }
        
        var _getItem = toolItemMap[this._getToolItemID(command.getID())];
        
        if(!_getItem){
            return null;
        }
        
        return $(_getHTMLToolItem(_getItem.id));
    };
    
    ToolBox.prototype.addToolItem = function(command, keybinds, icon){
       var itemID = this.id, commandID, $toolitem, name;
           
        if(!command){
            return null;
        } 
        
        if(command !== "string"){
        commandID   = command.getID();
        name        = command.getName();
        }
        
         // dom id;
        var id = this._getToolItemID(commandID);      
        
        // had it;
        if(toolItemMap[id]){
            return null;                               
        }
        
        var n_item = new ToolBoxItem(id, command);
        toolItemMap[id] = n_item;
        
        // create menuitem dom;
        $toolitem = $("<li class='u-fcg-el' title='"+ name +"'><img src='"+ icon +"' /></li>");
        $toolitem.on("click", function(){
            n_item._command.execute();
        });
        
        //keybinds 
        
        _getHTMLToolBox(this.id).append($toolitem);
        
        return n_item;
    };
    
    
    function ToolBoxItem(id, command){
        this.id                  = id;
        this._command            = command;
        
        this._enabledChanged     = this._enabledChanged;
        this._checkedChanged     = this._checkedChanged;
        this._nameChanged        = this._nameChanged;
        this._keyBindingAdded    = this._keyBindingAdded;
        this._keyBindingRemoved  = this._keyBindingRemoved;
        
        $(this._command).on("enabledStateChange", this._enabledChanged)
                .on("checkedStateChange", this._checkedChanged)
                .on("nameChange", this._nameChanged)
                .on("keyBindingAdded", this._keyBindingAdded)
                .on("keyBindingRemoved", this._keyBindingRemoved);
    };
    
    
    function SetToolBoxOrin(pori){
            return $dom_toolbox = $(pori);
        };
    
    function getToolBox(id){
        return toolBoxMap[id];
    };
    
    function _getHTMLToolBox(id){
        return $("#" + id + "-tool");
    }
    
    function AddToolBox(name, id)
    {
        if(!name || !id){
            console.error("no param");
            return null;
        }
        
        if(toolBoxMap[id]){
            console.error("this id has registed");
            return null;
        }
        
        var n_toolbox = new ToolBox(id);
        toolBoxMap[id] = n_toolbox;
        
        //create dom;
        var $n_toolbox = $("<div class='g-fcg'><strong class='u-title'>"+ name +"</strong><ul class='g-li f-cb' id='"+id+"-tool'></ul></div>");
        $dom_toolbox.append($n_toolbox);
        return n_toolbox;
    };
    
    function RemoveToolBox(id, name)
    {
        var cur_toolbox = null;
        if(!(cur_toolbox = toolBoxMap[id])){
            console.log("this toolbox is not exist");
            return null;
        }
        
       // delete cur_toolbox;
        
    };
    
    function GetToolBox(id){
        return toolBoxMap[id];
    }
    
    exports.ToolBoxList         =       ToolBoxList;
    exports.SetToolBoxOrin      =       SetToolBoxOrin;
    exports.AddToolBox          =       AddToolBox;
    exports.RemoveToolBox       =       RemoveToolBox;
    exports.GetToolBox          =       GetToolBox;
    exports.ToolBox             =       ToolBox;
    
});