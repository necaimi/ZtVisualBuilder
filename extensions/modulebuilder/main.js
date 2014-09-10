define(function(require, exports, module){
    "use strict";
    
    console.debug("module builder init");
    
    var ToolDialogHTML = require("text!extensions/modulebuilder/htmlmodule/tooldialog.html");
    
    var UiText = {"Title":"模板生成工具"};
    
    console.debug(Mustache.render);
    
    var ToolDialogTemplate = Mustache.render(ToolDialogTemplate, "{UI:UiText}");
    
    
    
    $("#main-dialog").append($(ToolDialogTemplate));
});