define(function(require, exports, module){
    "use strict";
    
    
    var dialog_msg = {
        "DIALOG_BTN_OK":"ok",
        "DIALOG_BTN_CANCEL":"cancel",
        "DIALOG_BTN_MINSIZE":"minsize"
    };
    
    var z_index = 1000;    
    
    function Dialog($dlg){
        this._$dlg = $dlg;
    };
    
    Dialog.prototype.getDlgObject(){
        return this._$dlg;
    };
    
    
    
    function ShowDialog(template){
        if(!template){
            console.error("no template");
            return null;
        }
        
        $("body").append("<div class='dlg-frame'><div class='dlg-inner'></div></div>");
        
        var $dlg = $(template)
                   .addClass("initlized")
                   .appendTo(".dlg-inner:last");
        
        
        return (new Dialog($dlg));
    };
    
    exports.ShowDialog = ShowDialog;
});