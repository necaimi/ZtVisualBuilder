
require.config({
    
        paths:{
            jquery:"jquery-1.11.1.min",
        }
    
    });

define(["domReady!", "jquery", "require"], function(domReady, $, require){
    
    //init form size;
    var winWidth, winHeight;
    var $mainDialog = $("body#main-dialog");
    var $navbox = $("[com-type='navBox']"), $toolbox = $("[com-type='toolBox']"), $editbox = $("[com-type='editBox']");
    
    function InitForm()
    {
        
    if(document.documentElement)
    {
        winWidth = document.documentElement.clientWidth;
        winHeight = document.documentElement.clientHeight;
        
        //var t_height = winHeight - $navbox.height();
        $mainDialog.height(t_height),
        $mainDialog.width(winWidth); 
        
   
    }
        
    };
    
    InitForm();
    
    $(window).bind("resize", function(){
        InitForm();
    });
        

    });