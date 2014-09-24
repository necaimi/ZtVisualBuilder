define(function(require, exports, module){
    "use strict";
    
    var Command = ext.getModule("module/command/Commands"),
        CommandManager = ext.getModule("module/command/CommandManager");
    
    var dom_toolbox = null, domtree = {"Editor_Tool":null, "Module_Tool":null, "Sku_Tool":null};
    
    
    var ToolBoxType = {
        "EDIT_BOX":"edit-box",
        "MODULE_BOX":"module-box",
        "SKU_BOX":"sku-box"
    };
    
    
    // toolbox;
    
    var toolBoxMap = {}, toolItemMap = {};
    
    function _getToolItem(id){
        
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
           name;
           
        if(!command){
            return null;
        } 
        
        if(command !== "string"){
        commandID   = command.getID();
        name        = command.getName();
        }
        var id = this._getToolItemID(commandID);       // dom id;
        
        if(toolItemMap[id]){
            return null;                               // had it;
        }
        
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
    
    
    function Initilize()
    {
        if(!dom_toolbox)
        {
            domtree.Editor_Tool = dom_toolbox.find("#editor_tool"), 
            domtree.Module_Tool = dom_toolbox.find("#module_tool"), 
            domtree.Sku_Tool    = dom_toolbox.find("#sku_tool");
        }
    };
    
    function SetToolBoxOrin(pori)
    {
        if(dom_toolbox)
            return;
        
        dom_toolbox = pori;
        Initilize();
    };
    
    function AddItem(type)
    {
      $(exports).triggerHandler(Command.TOOLBOX_ADDITEM, [pori, type]);
    };
    
    function RemoveItem(pori, type)
    {
      $(exports).triggerHandler(Command.TOOLBOX_REMOVEITEM, [pori, type]);
    };
    
    exports.SetToolBoxOrin      =       SetToolBoxOrin;
    exports.AddItem             =       AddItem;
    exports.RemoveItem          =       RemoveItem;
    
});