$(function(){
    //每个固定的时间移动图片
    var timer = setInterval(picLoop,2000);
    var index = 0;
    function picLoop(){
        index++;
        if (index==4) {index=0;}
        $(".content").animate({"left":-448*index},300);
        $("li").eq(index).css("background-color","rgba(255,255,255,1)")
               .siblings().css("background-color","rgba(255,255,255,0.4)");
    }

    //定时器的控制
    $(".pic").hover(function(){
        clearInterval(timer);
        $(".left").show();
        $(".right").show();
    },function(){
        timer = setInterval(picLoop,2000);
        $(".left").hide();
        $(".right").hide();
    })

    $("li").mouseover(function(){
        $(this).css("background-color","rgba(255,255,255,1)")
               .siblings().css("background-color","rgba(255,255,255,0.4)");
        index = $(this).index();
        $(".content").animate({"left":-448*index},300);

    })
})