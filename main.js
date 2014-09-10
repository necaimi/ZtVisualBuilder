
require.config({
        paths:{
            jquery:"thirdlibs/jquery-1.11.1.min",
            domReady:"thirdlibs/domReady",
            text:"thirdlibs/text",
            mustache:"thirdlibs/mustache"
        }
    
    });

define(["domReady!", "jquery", "require"], function(domReady, $, require){
    "use strict";
    
    //init form size;
    
    window.$ = $;

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
    
    InitForm();
    
    $(window).bind("resize", function(){
        InitForm();
    });
      
        window.Mustache = require(["mustache"]);
    
        require(["ext"]);
   



    });