define(function(require, exports, module){
    "use strict";
    
    var Command = ext.getModule("module/command/Commands");
    var dom_toolbox = null, domtree = {"Editor_Tool":null, "Module_Tool":null, "Sku_Tool":null};
    
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
    
    function AddItem(pori, type)
    {
        switch(type){
                case "Editor_Tool":
                domtree.Editor_Tool.find(".function-group").appendChild(pori);
                break;
                case "Module_Tool":
                domtree.Module_Tool.find(".function-group").appendChild(pori);
                break;
                case "Sku_Tool":
                domtree.Sku_Tool.find(".function-group").appendChild(pori);
                break;
        }
        
        $(exports).triggerHandler(Command.TOOLBOX_ADDITEM, [pori, type]);
    };
    
    function RemoveItem(pori, type)
    {
        
        switch(type){
                case "Editor_Tool":
                domtree.Editor_Tool.find(".function-group").removeChild(pori);
                break;
                case "Module_Tool":
                domtree.Module_Tool.find(".function-group").removeChild(pori);
                break;
                case "Sku_Tool":
                domtree.Sku_Tool.find(".function-group").removeChild(pori);
                break;
        }
        
        $(exports).triggerHandler(Command.TOOLBOX_REMOVEITEM, [pori, type]);
        
    };
    
    exports.SetToolBoxOrin      =       SetToolBoxOrin;
    exports.AddItem             =       AddItem;
    exports.RemoveItem          =       RemoveItem;
    
});