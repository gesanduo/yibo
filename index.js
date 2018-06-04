$(function(){
    $('.footer li').on('click',function(){
        var index = parseInt($(this).attr('index'));
        $('.index .h-content').addClass('hidden').eq(index).removeClass('hidden');
        $('.index .main').addClass('hidden').eq(index).removeClass('hidden');
        $(this).addClass('current').siblings().removeClass('current');
    })
    $(".main .swiper-container").swiper({
        autoplay:3000
    });
})