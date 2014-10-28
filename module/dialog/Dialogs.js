define(function(require, exports, module){
    "use strict";
    
    
    var dialog_msg = {
        "DIALOG_BTN_OK":"ok",
        "DIALOG_BTN_CANCEL":"cancel",
        "DIALOG_BTN_MINSIZE":"minsize",
        "DIALOG_BTN_MAXSIZE":"maxsize"
    };
    
    var z_index = 1000;    
    
    function Dialog($dlg, b_modal){
        this._$dlg = $dlg,
        this._candrag = b_modal,
        this._titleBar = null,
        this._srcWidth = $dlg.width,
        this._srcHeight = $dlg.height;
        
        
    };
    
    Dialog.prototype._getDlgObject = function(){
        return this._$dlg;
    };
    
    Dialog.prototype._setMaxSize = function(){
         
        var max_width = $("body").width(),
            max_height= $("body").height();
        
        this._$dlg.find("#dialog").css({"width":max_width, "height":max_height - 20, "top":0, "left":0});
        
    };
    
    Dialog.prototype._setNormalSize = function(){
          this._$dlg.find("#dialog").css({"width":this._srcWidth, "height":this._srcHeight});
    };
    
    
    Dialog.prototype._setMinSize = function(){
        if(!this._titleBar){
            return null;
        }
        
        var t_bar_width = this._titleBar.width,
            t_bar_height = this._titleBar.height;
        
        
        
    };
    
    Dialog.prototype._close = function(){
        this._$dlg.remove();
    };
    
    function TitleBar(){
        this._candrag = true;
    };
    
    TitleBar.prototype.DragEnabled = function(b){
        this._candrag = b;
    };
    
    function ShowDialog(template, b_modal){
        if(!template){
            console.error("no template");
            return null;
        }
        
        var $dlg = $(template)
                   .addClass("initlized")
                   .appendTo(".dlg-inner:last");
        
        return (new Dialog($dlg, b_modal));
    };
    
    exports.ShowDialog = ShowDialog;
});