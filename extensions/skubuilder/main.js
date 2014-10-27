
define(function(require, exports, module){
    "use strict";
    
    var Commands       =  ext.getModule("module/command/Commands"),
        CommandManager =  ext.getModule("module/command/CommandManager"),
        ToolBox        =  ext.getModule("module/editor/ToolBox"),
        Dialog         =  ext.getModule("module/dialog/Dialogs"),
        UiText         =  JSON.parse(require("text!extensions/skubuilder/uitext.json"));
       
    var COMMAND_NAME   =  "Sku Builder",
        COMMAND_ID     =  "Sku.Open";
    
    var ToolDialogHTML = require("text!extensions/skubuilder/htmlcontent/skuTemplate.html");
   
    function SkuBuilderOpenHandler()
    {
        var $ToolDialogHTML = $(Mustache.render(ToolDialogHTML, {"UI":UiText}));
        var cur = Dialog.ShowDialog($ToolDialogHTML, false);
        console.debug(cur);
        
    };
         
    var  command       =   CommandManager.register(COMMAND_NAME, COMMAND_ID, SkuBuilderOpenHandler);
    var  toolbox       =   ToolBox.GetToolBox(ToolBox.ToolBoxList.SKU_BOX);
         toolbox.addToolItem(command, "", "extensions/skubuilder/ui/settings.png");
    
});