
require.config({
        paths:{
            domReady:"thirdlibs/domReady",
            text:"thirdlibs/text",
            mustache:"thirdlibs/mustache"
        }
    
    });

define(["domReady!", "require"], function(domReady,require){
    "use strict";
    
    //init form size;

    var winWidth, winHeight;
    var $mainDialog = $("div#main-dialog");
    var $navbox = $("[com-type='navBox']"), $toolArea = $("div.g-fleft"), $editArea = $("div.g-fright");
    
    function InitForm()
    {
        
    if(document.documentElement)
    {
        var clientWidth = document.documentElement.clientWidth;
        var clientHeight = document.documentElement.clientHeight;
       
     
        $mainDialog.height(clientHeight);
       // $mainDialog.width(clientWidth); 
   
    }
        
    };
    
    InitForm();
    
    $(window).bind("resize", function(){
    InitForm();
    });
        
    var _edit = document.getElementById("mainedit");
    var editor = CodeMirror.fromTextArea(_edit, {
    lineNumbers: true,
        height:600
     });
        require(["ext"]);
   



    });