$(function(){
    $('.out').on('click',function(){
        var val = $('.pay-t input').val();
        if(val){
            //获取支付信息
            getPayInfo(val,function(data){
                if(data){
                    $('.pay .car-info-list').removeClass('hidden');
                }
            })
        }
    });
})