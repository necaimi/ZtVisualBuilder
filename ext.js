

define(function(require, exports, module){
    "use strict";

    /*globle inite*/
    
    var Global = require("module/utils/Gloabl");
    
    console.debug(Global);
    
    var extList = JSON.parse(require("text!ext.json")), ext_array = extList.extensions, ext_len = ext_array.length, itr = 0;

    for(itr; itr < ext_len; itr++)
    {
        require(["extensions/" + ext_array[itr].name + "/main"]);
    }
    
    
    
    });