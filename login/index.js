$(function(){
    //修改密碼頁面
    $('.editPassword .next-run').on('click',function(){
        if(!$('.editPassword #msg').val()){
            alert('請輸入驗證碼！')
        }else{
            var tel = $('')
            //匹配驗證碼
            if(isTrueCode()){
                location.href = './editPassword2.html';
            }else{
                alert('請輸入正確的驗證碼');
            }
        }
    })
    //修改密碼頁面2
    $('.editPassword2 .login').on('click',function(){
        var passwrod1 = $('.editPassword2 #password1').val();
        var passwrod2 = $('.editPassword2 #password2').val();
        if(!passwrod1 || !passwrod2){
            alert('請輸入密码！');
            return ;
        }
        if(passwrod1 !== passwrod2){
            alert('請輸入相同的密码！');
            return ;
        }
        //修改密码并登陆
        changePassword(passwrod1,function(){
            location.href = '../index.html';
        })
    })
    //註冊頁面
    $('.register .getMsg').on('click',function(){
        var tel = $('.register #telphone').val();
        if(isPoneAvailable($('.register #telphone'))){
            getCode(tel);

        }else{
            alert('請輸入正確的手機號')
        }
    })
    $('.register .next-step').on('click',function(){
        if(!$('.register #code').val()){
            alert('請輸入驗證碼！')
        }else{
            //匹配驗證碼
            if(true){
                location.href = './register2.html';
            }
        }
    })
    $('.register2 .next-step').on('click',function(){
        var passwrod1 = $('.register2 #password1').val();
        var passwrod2 = $('.register2 #password2').val();
        if(!passwrod1 || !passwrod2){
            alert('請輸入密码！');
            return ;
        }
        if(passwrod1 !== passwrod2){
            alert('請輸入相同的密码！');
            return ;
        }
        //保存密码并登陆
        savePassword(passwrod1,function(){
            location.href = '../index.html';
        })
    })
    //登陸頁面
    $('.forget').on('click',function(){
        location.href = './editPassword.html'
    })


    //添加車輛
    $('.addCar .box-i').on('input',function(){
        var next = parseInt($(this).attr('index'))+1;
        if($(this).val()!='' &&next!=6){
            $('.addCar .box-i').eq(next).focus();
        }
    })
    $('.addCar .bind').on('click',function(){
        var rs = '';
        var flag = false;
        $('.addCar .box-i').each(function(i,item){
            if(!$(item).val()){
                flag = true;
            }else{
                rs += $(item).val();
            }
        })
        if(!flag){
            //綁定車輛
            $('.js-car-mask').removeClass('hidden');
            window.localStorage.setItem('carNum',rs);
        }else{
            alert('請輸入車牌號！');
        }
    })
    $('.js-car-mask').on('click',function(){
        //前往綁卡支付
        console.log(window.localStorage.getItem('carNum'));
    });
})
