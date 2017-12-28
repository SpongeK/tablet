$(function(){
        var timer = null;
        var index = 0;
        var left = -500;
        timer=setInterval(function(){
            left = -500 * (index+1);
            $('.content').animate({left:left+"px"},3000,"linear",function(){
                index ++;
                $('.active').removeClass('active');
                $('.imgIndex span').eq(index).addClass('active');
                if(index == 3){
                    index = 0;
                    $('.content').css('left','0');
                }
            });
            
        },3000)
        
    
    
})