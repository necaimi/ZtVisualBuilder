var prize = ["na","na夫斯基","鱼蛋", "麻雀", "刺猬"];


function GetPrizeListHtml()
{
    var p_len = prize.length;
    
    var $pul = $("ul#prizelist");
    var psr = "";
    
    for(var i = 0; i < p_len; i++)
    {
        
        psr += "<li>"+ prize[i] +"</li>\r\n";
        
    }
    
    $pul.html(psr);
    $pul.fadeTo(500, 1.0);
};
