
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
    
    var winHeight;
    var $mainview = $("[com-type='codepanel']"), $tabpanels = $("#paneltabs");
    var eH = 0;
    function InitForm()
    {
        
    if(document.documentElement)
    {
        var clientHeight = document.documentElement.clientHeight - $("#frame-header").height();
        $("#frame-view").height(clientHeight);
        var eH = clientHeight - 48;
        $tabpanels.height(eH);
    }
        
    };
    
    
    $(window).bind("resize", function(){
    InitForm();
    });
        
   
     InitForm();
    
    
            var _edit = document.getElementById("editor");
            CodeMirror.fromTextArea(_edit, {
            indentUnit : 2,  
            smartIndent : true, 
            tabSize : 4,
            showCursorWhenSelecting : true,
            lineNumbers : true,
            matchBrackets: true,
            extraKeys: {"Ctrl-Space": "autocomplete"},
            });
                
                
        require(["ext"]);

      
    

    });