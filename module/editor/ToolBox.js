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
       var itemID = this.id,
           commandID,
           $toolitem,
           name;
           
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
        $toolitem = $("<li class='function-group-el' title='"+ name +"'><a href='javascript:;'><img src='"+ icon +"' /></a></li>");
        $toolitem.on("click", function(){
            n_item._command.execute();
        });
        
        return n_item;
    };
    
    
    function ToolBoxItem(id, command){
        this.id                  = id;
        this._command            = command;
        
        this._enabledChanged     = this._enabledChanged.bind(this);
        this._checkedChanged     = this._checkedChanged.bind(this);
        this._nameChanged        = this._nameChanged.bind(this);
        this._keyBindingAdded    = this._keyBindingAdded.bind(this);
        this._keyBindingRemoved  = this._keyBindingRemoved.bind(this);
        
        $(this._command).on("enabledStateChange", this._enabledChanged)
                .on("checkedStateChange", this._checkedChanged)
                .on("nameChange", this._nameChanged)
                .on("keyBindingAdded", this._keyBindingAdded)
                .on("keyBindingRemoved", this._keyBindingRemoved);
    };
    
    
    function SetToolBoxOrin(pori){
         if($dom_toolbox){
            return $dom_toolbox;
         }
        
        if(!pori){
            return null;
        }
        if(pori !== "object"){
             $dom_toolbox = $(pori);
            return $dom_toolbox;
        }
       
    };
    
    function getToolBox(id){
        return toolBoxMap[id];
    };
    
    function AddToolBox(name, id)
    {
        if(!name || !id){
            console.log("not the type");
            return null;
        }
        
        var n_toolbox = new ToolBox(id);
        toolBoxMap[id] = n_toolbox;
        
        //create dom;
        var $n_toolbox = $("<div class='function-group' id='"+id+"_tool'><p class='tool-text def-grey'>"+ name +"</p><ul class='function-group'></div>");
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