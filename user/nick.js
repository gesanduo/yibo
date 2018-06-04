$(function(){
    var obj = getRequest();
    var type = obj.type;
    var list = {
        nick:'個人暱稱',
        email:'郵箱'
    }
    $('.h-content').text(list[type]);
    $('input').prop('placeholder',list[type]);
    $('.save').on('click',function(){
        var value = $('input').val();
        //保存值

    })
})