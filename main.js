
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
    var $navbox = $("[com-type='navBox']"), $toolArea = $("div.leftArea"), $editArea = $("div.rightArea");
    
    function InitForm()
    {
        
    if(document.documentElement)
    {
        var clientWidth = document.documentElement.clientWidth,
            clientHeight = document.documentElement.clientHeight;
       
     
        $mainDialog.height(clientHeight),
        $mainDialog.width(clientWidth); 
        
        $editArea.width(clientWidth - $toolArea.width() - 30);
   
    }
        
    };
    
   // InitForm();
    
    $(window).bind("resize", function(){
        InitForm();
    });
        
      //  var _edit = document.getElementById("mainedit");
      //  var editor = CodeMirror.fromTextArea(_edit, {
   // lineNumbers: true
    //    });
        require(["ext"]);
   



    });