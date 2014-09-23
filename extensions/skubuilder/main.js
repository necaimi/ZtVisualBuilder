
define(function(require, exports, module){
    "use strict";
    
    var ToolBoxManager =  ext.getModule("module/editor/ToolBoxManager"),
        Commands       =  ext.getModule("module/command/Commands"),
        CommandManager =  ext.getModule("module/command/CommandManager"),
        UiText         =  JSON.parse(require("text!extensions/skubuilder/uitext.json"));
        
    var COMMAND_NAME   =  "Sku Builder",
        COMMAND_ID     =  "Sku.Open";
    
    
    function SkuBuilderOpenHandler()
    {
        console.debug("Sku Builder Open");
    };
         
    CommandManager.register(COMMAND_NAME, COMMAND_ID, SkuBuilderOpenHandler);

       // ToolBoxManager.AddItem();
    
});