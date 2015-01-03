
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
            modt:"text/html",
            autoCloseTags: true,
            lineNumbers : true,
            matchBrackets: true,
            autoCloseBrackets: true
            
            });
                
                
        require(["ext"]);

      
    

    });