$(function(){
    var flag = true;
    $('#login').on('click',function(){
        if(flag){
            var str = '<div class="wrapper hide">\
                            <div class="title">\
                                <img src="./img/百度.png" />登录百度账号\
                                <a id="close" href="#">X</a>\
                            </div>\
                            <div class="main">\
                                <div class="content">\
                                    <input type="text" name="user" placeholder="手机/邮箱/用户名" />\
                                    <input type="password" name="password" placeholder="密码" />\
                                    <button type="submit" value="登录">登录</button>\
                                </div>\
                            </div>\
                        </div>';
            $('.screen').before(str).removeClass('hide');
            flag = false;
        }
        $('.screen').removeClass('hide');
        $('.wrapper').removeClass('hide');
        $('#close').one('click',function(){
            $('.wrapper').addClass('hide');
            $('.screen').addClass('hide');
        });
    })
})