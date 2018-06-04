$(function(){
   $('.showPassword').on('touchstart',function(){
       $(this).parents('.form').find('input').attr('type','text');
   })
   $('.showPassword').on('touchend',function(){
        $(this).parents('.form').find('input[show="1"]').attr('type','password');
    })
    $('.js-mask').on('click',function(){
        $(".js-mask").addClass('hidden');
    })
})
function getRequest(){
    var hash = location.search,
        argObj = {};
    if (hash.indexOf('?') != -1) {
        hash = hash.substring(hash.indexOf('?') + 1);
        var list = hash.split('&');
        for(var i=0;i<list.length;i++){
            var prams = list[i].split('='),
                _attr = decodeURIComponent(prams[0]),
                _data = decodeURIComponent(prams[1]);
            argObj[_attr] = _data;
        }
    }
    return argObj;
}
function back(){
    history.go(-1);
}
function isPoneAvailable($poneInput) {  
    var myreg=/^[1][3,4,5,7,8][0-9]{9}$/;  
    if (!myreg.test($poneInput.val())) {  
        return false;  
    } else {  
        return true;  
    }  
} 
//獲取驗證碼
function getCode(val){

}
//驗證驗證碼是否正確
function isTrueCode(tel,code){
    return true;
}
//获取支付信息
function getPayInfo(val,callback){
    callback('success');
}
//修改密码并登录
function changePassword(password,callback){
    callback();
}
//保存密碼並登錄
function savePassword(password,callback){
    callback();
}