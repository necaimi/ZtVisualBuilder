

define(function(require, exports, module){
    "use strict";

    /*globle init*/
    
    var Global              = require("module/utils/Global"),
        Commands            = require("module/command/Commands"),
        CommandManager      = require("module/command/CommandManager"),
        ToolBox             = require("module/editor/ToolBox"),
        AppInit             = require("module/utils/Init");
        
    var extList = JSON.parse(require("text!ext.json")), ext_array = extList.extensions, ext_len = ext_array.length, itr = 0;

    for(itr; itr < ext_len; itr++)
    {
        require(["extensions/" + ext_array[itr].name + "/main"]);
    }
    
    
    
    });