
require.config({
    baseUrl:"./thirdlibs",
        paths:{
            jquery:"jquery-1.11.1.min",
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
      
        require(["../extensions/ext"]);
   



    });