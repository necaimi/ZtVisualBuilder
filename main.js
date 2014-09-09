
require.config({
        paths:{
            jquery:"jquery-1.11.1.min",
        }
    
    });

define(["domReady!", "jquery", "require"], function(domReady, $, require){
    
    //init form size;
    var winWidth, winHeight;
    var $mainDialog = $("div#main-dialog");
    var $navbox = $("[com-type='navBox']"), $toolArea = $("div.leftArea"), $editArea = $("div.rightArea");
    
    function InitForm()
    {
        
    if(document.documentElement)
    {
        clientWidth = document.documentElement.clientWidth;
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
    
    
    function InitExtenstion()
    {
        
        var ajson = require("../extensions/ext");
        console.debug(ajson);
        
    };
    
    InitExtenstion();
    


    });