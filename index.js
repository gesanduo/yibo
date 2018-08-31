$(function(){
    $('.footer li').on('click',function(){
        var index = parseInt($(this).attr('index'));
        $('.index .h-content').addClass('hidden').eq(index).removeClass('hidden');
        $('.index .main').addClass('hidden').eq(index).removeClass('hidden');
        $(this).addClass('current').siblings().removeClass('current');
        localStorage.setItem('yiboIndex',index);
    })
    $(".main .swiper-container").swiper({
        autoplay:3000
    });
    $(".js-mask-phone").on('click',function(){
        if(!$(this).hasClass('submit')){
            $(".js-mask-phone").addClass('hidden');
        }
    })
    $('#makephone').on('click',function(){
        $('.js-mask-phone').removeClass('hidden');
    })
    if(localStorage.getItem('yiboIndex')==1){
        var index =  parseInt(localStorage.getItem('yiboIndex'));
        $('.index .h-content').addClass('hidden').eq(index).removeClass('hidden');
        $('.index .main').addClass('hidden').eq(index).removeClass('hidden');
        $('.footer li').eq(index).addClass('current').siblings().removeClass('current');
        $('.yibo').removeClass('hidden');
    }else{
        var index = 0;
        $('.index .h-content').addClass('hidden').eq(index).removeClass('hidden');
        $('.index .main').addClass('hidden').eq(index).removeClass('hidden');
        $('.footer li').eq(index).addClass('current').siblings().removeClass('current');
        $('.yibo').removeClass('hidden');
    }
    $('.bind_bank').on('click',function(){
         $('.js-car-mask').removeClass('hidden');
    })
    $('.js-car-mask').on('click',function(){
        //前往綁卡支付
    });
})