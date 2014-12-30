
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
        require(["ext"]);
    
        require([ 
             "thirdlibs/codemirror/mode/css/css.js",
             "thirdlibs/codemirror/addon/hint/html-hint.js",
             "thirdlibs/codemirror/addon/hint/show-hint.js",
             "thirdlibs/codemirror/addon/hint/javascript-hint.js",
             "thirdlibs/codemirror/addon/hint/css-hint.js"
            ], function(){
            var _edit = document.getElementById("editor");
            CodeMirror.fromTextArea(_edit, {
            mode : "text/html", 
            indentUnit : 2,  
            smartIndent : true, 
            tabSize : 4,  
            readOnly : false,  
            showCursorWhenSelecting : true,
             lineNumbers : true   
            });
        });
    

    });