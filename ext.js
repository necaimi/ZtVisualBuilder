

define(function(require, exports, module){
    "use strict";

    /*globle init*/
    
    var Global              = require("module/utils/Global"),
        Commands            = require("module/command/Commands"),
        CommandManager      = require("module/command/CommandManager"),
        ToolBox             = require("module/editor/ToolBox"),
        Dialog              = require("module/dialog/Dialogs"),
        AppInit             = require("module/utils/Init");
        
    ToolBox.SetToolBoxOrin("[com-type='toolBox']");
    
    ToolBox.AddToolBox("编辑工具", ToolBox.ToolBoxList.EDIT_BOX),
    ToolBox.AddToolBox("模块工具", ToolBox.ToolBoxList.MODULE_BOX),
    ToolBox.AddToolBox("SKU工具", ToolBox.ToolBoxList.SKU_BOX);
    
    
    var extList = JSON.parse(require("text!ext.json")), ext_array = extList.extensions, ext_len = ext_array.length, itr = 0;

    for(itr; itr < ext_len; itr++)
    {
        require(["extensions/" + ext_array[itr].name + "/main"]);
    }
    
    
    
    });