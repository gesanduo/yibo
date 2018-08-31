$(function(){
    //设置生日
    $('#datetime-picker').datetimePicker({
        yearSplit:'年',
        monthSplit:'月',
        dateSplit:'日',
        toolbarCloseText:'確定',
        cssClass:'datepicker',
        title:'取消',
        times:function(){
            return [];
        },
        onClose:function(val){
            //设置后的值
            console.log($('#datetime-picker').val());
        }
    });
    $('html,body').on('click','.title',function(e){
        $('#datetime-picker').picker('close');
        $('#sex-picker').picker('close');
    })
    //设置性别
    $('#sex-picker').picker({
        title:'取消',
        cssClass:'sexpicker',
        cols: [
          {
            textAlign: 'center',
            values: ['男','女']
          }
    
        ],
        onClose:function(val){
            //设置后的值
            console.log($('#sex-picker').val());
        }
      });
    //设置邮箱昵称
    $('.jump').on('click',function(){
        var type = $(this).attr('type');
        location.href = './nick.html?type=' + type;
    });
    //跳去登錄頁面
    $('html,body').on('click','.js-mask .submit',function(){
        location.href = '../login/login.html';
    })
    //退出登录
    $('.unlogin').on('click',function(){
        $('.js-mask').removeClass('hidden');
    })
    $('.edit-head').on('click',function(){
        $('.js-image').removeClass('hidden');
    })
    //关闭相册mask
    $('.js-image').on("click",function(e){
        if($(e.target).hasClass('mask')){
            $(this).addClass('hidden');
        }
    })
    //关闭相册mask
    $('.mask-cancel').on("click",function(e){
        $('.js-image').addClass('hidden');
    })
    //选择相册跟拍照
    $("#image,#video").on('change',function(){
        alert($(this).val());
        //上传图片,保存头像
        if($(this).val()){

        }
    })
    var file = $('.imgInput');
    if (getIos()) {
        file.removeAttr("capture");
    }
    function getIos() {
        var ua=navigator.userAgent.toLowerCase();
        if (ua.match(/iPhone\sOS/i) == "iphone os") {
            return true;
        } else {
            return false;
        }
    }

})
