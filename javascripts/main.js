
require.config({
    
        baseUrl:"javascripts",
        paths:{
            jQuery:"jquery-1.11.1.min",
        }
    
    });

define(["domReady!", "jQuery"], function(domReady, $, require){
    
    //init form size;
    var winWidth, winHeight;
    console.debug($);
    
   // var $navbox = $("[com-type='navBox']"), $toolbox = $("[com-type='toolBox']"), $editbox = $("[com-type='editBox']");
    
    function InitForm()
    {
        
    if(document.documentElement)
    {
        winWidth = document.documentElement.clientWidth;
        winHeight = document.documentElement.clientHeight;
        
       // $editbox.height = $toolbox.height = winHeight - $navbox.height;
    }
        
    };
    
        InitForm();
    
    });