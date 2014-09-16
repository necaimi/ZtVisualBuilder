define(function(require, exports, module){
    "use strict";
    
    var dom_toolbox = null, domtree = {"Editor_Tool":null, "Module_Tool":null, "Sku_Tool":null};
    
    function Initilize()
    {
        if(!dom_toolbox)
        {
            domtree.Editor_Tool = dom_toolbox.find("#editor_tool"), 
            domtree.Module_Tool = dom_toolbox.find("#module_tool"), 
            domtree.Sku_Tool    = dom_toolbox.find("#sku_tool");
            
            BindEvent();
        }
    };
    
    function SetToolBoxOrin(pori)
    {
        dom_toolbox = pori;
        Initilize();
    };
    
    function AddItem(pori, type)
    {
        dom_toolbox.appendChild(pori);
    };
    
    function RemoveItem(pori)
    {
        dom_toolbox.removeChild(pori);
    };
    
    exports.SetToolBoxOrin      =       SetToolBoxOrin;
    exports.AddItem             =       AddItem;
    exports.RemoveItem          =       RemoveItem;
});