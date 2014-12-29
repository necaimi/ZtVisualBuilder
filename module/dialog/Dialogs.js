define(function(require, exports, module){
    "use strict";
    
    var dialog_msg = {
        "DIALOG_BTN_OK":"ok",
        "DIALOG_BTN_CANCEL":"cancel",
        "DIALOG_BTN_MINSIZE":"minsize",
        "DIALOG_BTN_MAXSIZE":"maxsize"
    };
    
    var z_index = 1000;    
    
    function Dialog($dlg, _titlebar){
        this._$dlg = $dlg,
        this._titleBar = _titlebar,
        this._srcWidth = $dlg.width(),
        this._srcHeight = $dlg.height();
        
    };
    
    Dialog.prototype._getDlgObject = function(){
        return this._$dlg;
    };
    
    Dialog.prototype._setMaxSize = function(){
        
        this._$dlg.css({"width":"100%", "height":"100%", "top":0, "left":0});
        this.DragEnbaled(false);
    };
    
    Dialog.prototype.DragEnbaled = function(b){
        this._titleBar.DragEnabled(b);
    };
    
    Dialog.prototype._setNormalSize = function(){
          this._$dlg.css({"width":this._srcWidth, "height":this._srcHeight});
          this.DragEnbaled(true);
    };
    
    
    Dialog.prototype._setMinSize = function(){
        if(!this._titleBar){
            return null;
        }
        
        this.DragEnbaled(false);
        var t_bar_width = this._titleBar.width(),
            t_bar_height = this._titleBar.height();
        
    };
    
    Dialog.prototype._close = function(){
        this._$dlg.remove();
    };
    
    function TitleBar($obj){
        this._$obj = $obj,
        this._$parent = null,
        this._candrag = true,
        this._isDrag = false;
    };
    
    function DragHandler(event, s, t){     
        
        if(s._isDrag){
               
        var cx = event.clientX - s.offsetx,
            cy = event.clientY - s.offsety;
            if(cx <= 0){
            cx = 0;
            }
                
            if(cy <= 0){
            cy = 0;
            }
            
            $(t).css({"left":cx, "top":cy});
    
            }
    }
    
    
    var src_point = {}, p_dialog = null;
    TitleBar.prototype.DragEnabled = function(b){
        this._candrag = b;
        var _this = this;
        
        if(b){
            
            _this._$obj.bind("mousedown", function(e){
                _this._isDrag = true;
                p_dialog = _this._$parent._$dlg;
                src_point._isDrag = _this._isDrag;
                src_point.offsetx = e.clientX - p_dialog.offset().left;
                src_point.offsety = e.clientY - p_dialog.offset().top;
                p_dialog.css({"opacity":0.8, "z-index":"1025"});
                $(document).bind("mousemove", function(e){
                    DragHandler(e, src_point, p_dialog);
                });
                
                return false;
        }).bind("mouseup", function(){
            _this._isDrag = false;
            $(document).unbind("mousemove");
            p_dialog.css({"opacity":1});
        })
        }else{
            _this._$obj.unbind("mousedown")
                       .unbind("mouseup");
             $(document).unbind("mousemove");
                      
        }
       
    };
    
    TitleBar.prototype._addParent = function(parent){
        this._$parent = parent;
    };
    
    function ShowDialog(template, b_modal){
        if(!template){
            console.error("no template");
            return null;
        }
        
        var $dlg = $(template)
                   .addClass("initlized")
                   .appendTo(".dlg-inner:last")
                   .find("[typeid='dialog']");
      
        var _$titlebar = $dlg.find("[typeid='titlebar']");
        
        var _titlebar = new TitleBar(_$titlebar);
        
        var _dialog = new Dialog($dlg, _titlebar);
             _titlebar._addParent(_dialog);
        
        b_modal ? _dialog.DragEnbaled(false) : _dialog.DragEnbaled(true);
        
        return _dialog;
    };
    
    exports.ShowDialog = ShowDialog;
});