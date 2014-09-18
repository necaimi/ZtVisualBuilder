define(function(require, exports, module){
    "use strict";

       var ToolBox        =    ext.getModule("module/editor/ToolBox");
    
    function AddItem(pori, type)
    {
        
        ToolBox.call(ToolBox, Array.prototype.slice.call(arguments, 1));
        
    }
    
    exports.AddItem = AddItem;
});