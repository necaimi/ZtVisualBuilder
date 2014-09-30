define(function(require, exports, module){
    "use strict";
    
    
    var dialog_msg = {
        "DIALOG_BTN_OK":"ok",
        "DIALOG_BTN_CANCEL":"cancel",
        "DIALOG_BTN_MINSIZE":"minsize"
    };
    
    var z_index = 1000;    
    
    function Dialog($dlg, b_modal){
        this._$dlg = $dlg,
        this._candrag = b_modal,
        this._titleBar = null,
        this._srcWidth = $dlg.width,
        this._srcHeight = $dlg.height;
    };
    
    Dialog.prototype.GetDlgObject(){
        return this._$dlg;
    };
    
    Dialog.prototype.SetMaxSize(){
        var max_width = $("body").width,
            max_height= $("body").height;
        
        this._$dlg.stop(false, true).animate({"width":max_width, "height":max_height}, 300);
        
    };
    
    Dialog.prototype.SetNormalSize(){
          this._$dlg.stop(false, true).animate({"width":this._srcWidth, "height":this._srcHeight}, 300);
    };
    
    
    Dialog.prototype.SetMinSize(){
        if(!this._titleBar){
            return null;
        }
        
        var t_bar_width = this._titleBar.width,
            t_bar_height = this._titleBar.height;
        
        
    };
    
    Dialog.prototype.Close(){
        
    };
    
    function TitleBar(){
        this._candrag = true;
    };
    
    TitleBar.prototype.DragEnabled(b){
        this._candrag = b;
    };
    
    function ShowDialog(template, b_modal){
        if(!template){
            console.error("no template");
            return null;
        }
        
        $("body").append("<div class='dlg-frame'><div class='dlg-inner'></div></div>");
        
        var $dlg = $(template)
                   .addClass("initlized")
                   .appendTo(".dlg-inner:last");
        
        
        return (new Dialog($dlg, b_modal));
    };
    
    exports.ShowDialog = ShowDialog;
});