$(function(){
    //日期
    $('.car-index #date-s').datetimePicker({
        yearSplit:'',
        monthSplit:'',
        dateSplit:'',
        toolbarCloseText:'確定',
        cssClass:'datepicker',
        title:'',
        times:function(){
            return [];
        },
        onClose:function(val){
            //设置后的值
            console.log($('#date-s').val());
        }
    });
    //選擇日期
    // $('.date-s').on('click',function(){
    //     $('#date-s').datetimePicker('open');
    // })
    $('.car-index #car-s').picker({
        title:'&nbsp;',
        cssClass:'carpicker',
        cols: [
          {
            textAlign: 'center',
            values: ['黑車停車場01','黑車停車場02','黑車停車場03']
          }
    
        ],
        onClose:function(val){
            //设置后的值
            console.log($('#car-s').val());
            $('.car-s').removeClass('current');
        }
      });
    //选择停车场
    $('.car-s').on('click',function(){
        $(this).addClass('current');
    })
    $('.stauts-s').on('click',function(){
         $(".stauts-select").toggleClass('hidden');
         $(this).toggleClass('current');
    })
    $(".stauts-select").on('click',function(e){
        if($(e.target).hasClass('item')){
            setTimeout(function(){
                $(".stauts-select").addClass('hidden')
            },300)
        }
    })
    //選擇狀態
    $(".stauts-select li").on('click',function(){
        $(this).addClass('current').siblings().removeClass('current');
    })

})