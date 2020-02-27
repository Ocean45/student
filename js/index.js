$(function(){
    $("#mpanel1").codeVerify({
        type:1,
        width:"80px",
        height:"30px",
        fontSize:"14px",
        codeLength:4,
        btnId:"login",
        ready:function(){

        },
        success:function(){
            alert("验证匹配！");
            var get_input_user_name=$(".textBorder")[0].value;
            var get_input_user_pwd=$(".textBorder")[1].value;
            if(get_input_user_name== ""||get_input_user_pwd==""){
                alert("用户名或密码不能为空");
                return;
            }
            var uid = $('.textBorder')[0].value;
            var upass = 'admin';
            //保存到本地
            save_value_to_storage('USERID', uid);
            // 跳转指定页面
            window.location.href = 'index.html';
    
        },
        error:function(){
            alert("验证码不匹配")
        }
    })

});