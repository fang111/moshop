/**
 * Created by apple1 on 2017/8/17.
 */
$(function(){



    // 登录
   $('#login').click(function () {
        var open = $(this);
        openLayer(open,350,315);
        closeLayer();
        jump();

        // 点击提交
        $('#login-button').click(function () {
            var username = $('#username').val();
            var password = $('#password').val();
            var trueTelephone = /^1[358][0123456789]\d{8}$/;
            var trueEmail = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/;
            var truePassword = /^[^\s]{6,16}$/;
            if(username.match(trueTelephone)==null&&username.match(trueEmail)==null){
                $('#username-hint').show();
            }else{
                $('#username-hint').hide();
            }
            if(password.match(truePassword)==null){
                $('#password-hint').show();
            }else{
                $('#password-hint').hide();
            }
        });
    });

    // 注册
    $('#rege').click(function () {
        var open = $(this);
        openLayer(open,350,295);
        closeLayer();
        jump();

        // 点击提交
        $('#rege-button').click(function () {
            var username = $('#username').val();
            var verify = $('#verify').val();
            var trueTelephone = /^1[358][0123456789]\d{8}$/;
            var trueEmail = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/;
            if(username.match(trueTelephone)==null&&username.match(trueEmail)==null){
                $('#username-hint').show();
            }else{
                $('#username-hint').hide();
            }
            if(verify!='gyyd'){
                $('#verify-hint').show();
            }else{
                $('#verify-hint').hide();
            }
        });
    });

    // 点击跳转按钮事件
    function jump() {
        // 点击登录跳转
        $('#login-jump').click(function () {
            $('#login').click();
        });
        // 点击注册跳转
        $('#rege-jump').click(function () {
            $('#rege').click();
        });

    }

    // top-right鼠标悬浮显现
    for(var i=0; i<$('.top-right-t').length;i++){
        $('.top-right-t').eq(i).attr('data-index1',i);
        $('.top-right-t').eq(i).mouseover(function () {
            var index1 = $(this).attr('data-index1');
            $('.top-right-d').eq(index1).css('display','inline-block');
        });
        $('.top-right-t').eq(i).mouseout(function () {
            var index1 = $(this).attr('data-index1');
            $('.top-right-d').eq(index1).css('display','none');
            $('.top-right-d').eq(index1).mouseover(function () {
               $(this).css('display','inline-block');
               $('.top-right-t').eq(index1).css('background','white');
            });
            $('.top-right-d').eq(index1).mouseout(function () {
                $(this).css('display','none');
                $('.top-right-t').eq(index1).css('background','');
            });
        });
    }


    // 打开遮挡层
    function openLayer(open,width,height) {
        var content;
        if(open.attr('id')=='login'){
            content=$('#login-html').html();
        }
        if(open.attr('id')=='rege'){
            content=$('#rege-html').html();
        }

        $('#layer-mask').show();
        $('#layer-pop').show();
        // 设置宽高
        $('#layer-pop').css({
           width:width,
            height:height
        });
        $('#layer-content').html(content);
    }
    // 关闭遮挡层
    function closeLayer() {
        $('#layer-close').click(function () {
            $('#layer-mask').hide();
            $('#layer-pop').hide();
        })
    }

    // 鼠标移到购物车上时图片改变并且出现购物车信息
    $('.shopping-car').mouseover(function () {
        $(".car-img").attr ("src", "../素材/icon/25.png");
        $(".more-img").attr ("src", "../素材/icon/24.png");
        $(this).css(
            {
                'background':'white',
                'color':'red'
            });
        $('.shopping-car-list').show();
    });
    $('.shopping-car').mouseout(function () {
        $('.shopping-car-list').hide();
        $(".car-img").attr("src", "../素材/icon/26.png");
        $(".more-img").attr("src", "../素材/icon/23.png");
        $('.shopping-car').css(
            {
                'background': 'red',
                'color': 'white'
            });
        $('.shopping-car-list').mouseover(function () {
            $(this).show();
            $(".car-img").attr("src", "../素材/icon/25.png");
            $(".more-img").attr("src", "../素材/icon/24.png");
            $('.shopping-car').css(
                {
                    'background': 'white',
                    'color': 'red'
                });
        });
        $('.shopping-car-list').mouseout(function () {
            $(this).hide();
            $(".car-img").attr("src", "../素材/icon/26.png");
            $(".more-img").attr("src", "../素材/icon/23.png");
            $('.shopping-car').css(
                {
                    'background': 'red',
                    'color': 'white'
                });
        });
    });

    // 菜单显现
    var menuNumber = $('.menu-bottom ').children('div').length;
    for(var i=0; i<menuNumber; i++){
        $('.menu-bottom div').eq(i).attr('id',i);
        // 鼠标悬浮在菜单栏上时
        $('.menu-bottom div').eq(i).mouseover(function () {
           var index2 = $(this).attr('id');
           $('.menu-bottom div').eq(index2).css({
               'background':'white',
               'color':'red'
           });
           $('.submenu-container').eq(index2).show();
        });
        // 鼠标移出菜单栏上时
        $('.menu-bottom div').eq(i).mouseout(function () {
           var index2 = $(this).attr('id');
           $('.menu-bottom div').eq(index2).css({
               'background':'#F12B2B',
               'color':'white'
           });
            $('.submenu-container').eq(index2).hide();
            // 鼠标如果移进菜单内容时
            $('.submenu-container').eq(index2).mouseover(function () {
                $('.menu-bottom div').eq(index2).css({
                    'background':'white',
                    'color':'red'
                });
                $('.submenu-container').eq(index2).show();
            });
            $('.submenu-container').eq(index2).mouseout(function () {
                $('.menu-bottom div').eq(index2).css({
                    'background':'#F12B2B',
                    'color':'white'
                });
                $('.submenu-container').eq(index2).hide();
            });



        });

    }

// +6
    // 各楼层内容切换
    for(var i=0; i<15; i++){
        (function(i) {$('.floor-total').eq(i).mouseover(function () {
            $('.floor1').eq(i).parent().children('.floor1').hide();
            $('.floor1').eq(i).show();
            // 楼层横线突起
            if(i==0){
                $('.floor-triangle').removeClass('triangle-2 triangle-3');
            }if(i==1){
                $('.floor-triangle').removeClass('triangle-3').addClass('triangle-2');
            }if(i==2){
                $('.floor-triangle').removeClass('triangle-2').addClass('triangle-3');
            }if(i==3){
                $('.floor-triangle2').removeClass('triangle2-2 triangle2-3');
            }if(i==4){
                $('.floor-triangle2').removeClass('triangle2-3').addClass('triangle2-2');
            }if(i==5){
                $('.floor-triangle2').removeClass('triangle2-2').addClass('triangle2-3');
            }if(i==6){
                $('.floor-triangle3').removeClass('triangle3-2 triangle3-3');
            }if(i==7){
                $('.floor-triangle3').removeClass('triangle3-3').addClass('triangle3-2');
            }if(i==8){
                $('.floor-triangle3').removeClass('triangle3-2').addClass('triangle3-3');
            }if(i==9){
                $('.floor-triangle4').removeClass('triangle4-2 triangle4-3');
            }if(i==10){
                $('.floor-triangle4').removeClass('triangle4-3').addClass('triangle4-2');
            }if(i==11){
                $('.floor-triangle4').removeClass('triangle4-2').addClass('triangle4-3');
            }if(i==12){
                $('.floor-triangle5').removeClass('triangle5-2 triangle5-3');
            }if(i==13){
                $('.floor-triangle5').removeClass('triangle5-3').addClass('triangle5-2');
            }if(i==14){
                $('.floor-triangle5').removeClass('triangle5-2').addClass('triangle5-3');
            }
        });
        })(i);
    }

    $('body').find('*').click(function () {
            // console.log($(this).offset().top);
            // console.log($(window).scrollTop());
        // console.log($(window).height());
        });



    $('.floor-nav a').eq(0).click(function () {
        $(window).scrollTop($('.floor-number').eq(0).offset().top-10);
    });
    $('.floor-nav a').eq(1).click(function () {
        $(window).scrollTop($('.floor-number').eq(1).offset().top-10);
    });
    $('.floor-nav a').eq(2).click(function () {
        $(window).scrollTop($('.floor-number').eq(2).offset().top-10);
    });
    $('.floor-nav a').eq(3).click(function () {
        $(window).scrollTop($('.floor-number').eq(3).offset().top-10);
    });
    $('.floor-nav a').eq(4).click(function () {
        $(window).scrollTop($('.floor-number').eq(4).offset().top-10);
    });

   // 判断是否到达某楼层
    function half(i) {
        if(  ($('.floor-number').eq(i).offset().top-$(window).scrollTop())*2<$(window).height() && ($('.floor-number').eq(i+1).offset().top-$(window).scrollTop())*2>$(window).height() ){
            return true;
        }
    }

    var para1 = new Array('服饰','美妆','手机','家电','数码');
    var para2 = new Array('F1','F2','F3','F4','F5');

    for(var i=0; i<5; i++){
        (function(i){$('.floor-nav a').eq(i).mouseover(function () {
            $('.floor-nav a').eq(i).text(para1[i]).css(
                {
                    'color':'red',
                    'font-weight':'bold'
                });
        });})(i);

        (function(i){
            $('.floor-nav a').eq(i).mouseout(function () {
                if(  ($('.floor-number').eq(i).offset().top-$(window).scrollTop())*2>$(window).height() || ($('.floor-number').eq(i+1).offset().top-$(window).scrollTop())*2<$(window).height() ){
                    $('.floor-nav a').eq(i).text(para2[i]).css(
                        {
                            'color':'#8A8E93',
                            'font-weight':'normal'
                        });
                }
            });
        })(i);
    }

// 界面滚动时左侧导航显现
    $(window).scroll(function () {
        if(($('.floor-number').eq(1).offset().top-$(window).scrollTop())<$(window).height()){
            $('.floor-nav').show();
        }else{
            $('.floor-nav').hide();
        }


        if(half(0)==true)
        {
            $('.floor-nav a').eq(0).text('服饰').css(
                {
                    'color':'red',
                    'font-weight':'bold'
                });

        }else{
            $('.floor-nav a').eq(0).text('F1').css(
                {
                    'color':'#8A8E93',
                    'font-weight':'normal'
                });
        }

        if(half(1)==true)
        {
            $('.floor-nav a').eq(1).text('美妆').css(
                {
                    'color':'red',
                    'font-weight':'bold'
                });
        }else{
            $('.floor-nav a').eq(1).text('F2').css(
                {
                    'color':'#8A8E93',
                    'font-weight':'normal'
                });
        }

        if(half(2)==true)
        {
            $('.floor-nav a').eq(2).text('手机').css(
                {
                    'color':'red',
                    'font-weight':'bold'
                });
        }else{
            $('.floor-nav a').eq(2).text('F3').css(
                {
                    'color':'#8A8E93',
                    'font-weight':'normal'
                });
        }

        if(half(3)==true)
        {
            $('.floor-nav a').eq(3).text('家电').css(
                {
                    'color':'red',
                    'font-weight':'bold'
                });
        }else{
            $('.floor-nav a').eq(3).text('F4').css(
                {
                    'color':'#8A8E93',
                    'font-weight':'normal'
                });
        }

        if(  ($('.floor-number').eq(4).offset().top-$(window).scrollTop())*2<$(window).height())
        {
            $('.floor-nav a').eq(4).text('数码').css(
                {
                    'color':'red',
                    'font-weight':'bold'
                });
        }else{
            $('.floor-nav a').eq(4).text('F5').css(
                {
                    'color':'#8A8E93',
                    'font-weight':'normal'
                });
        }
    });

// 右侧导航
    for(var i=0; i<5; i++){
        (function(i){$('.right-nav .right-nav-content').eq(i).mouseenter(function () {
            $('.right-nav-desc').eq(i).show().css({
                // 'display':'inline-block',
                'background':'#72767D'
            }).animate({
                'width':'55px',
                'left':'-55px'
            },400);

            $('.right-nav .right-nav-content').eq(i).css('background','#72767D');
        });})(i);
        (function (i){$('.right-nav .right-nav-content').eq(i).mouseleave(function () {
            $('.right-nav-desc').eq(i).animate({
                'width':'0',
                'left':'0'
            },300,function () {
                $('.right-nav-desc').eq(i).hide();
            });
            $('.right-nav .right-nav-content').eq(i).css('background','#B9BBBD');
        });})(i);
    }
    // 点击返回顶部
    $('.right-nav-content').eq(4).click(function () {
       $(window).scrollTop('0');
    });

   // 轮播图
    var index = 0;
    var timer=null;
    var len = $('.banner-img img').length;

    // 开始轮播的函数
    function begin() {
        timer = setInterval(function () {
            changImg();
            index++;
            if(index==len){
                index=0;
            }
        },1000);
    };

    //鼠标移出图片时开始轮播
    $('.banner-img img').mouseout(begin);

    //当鼠标停留在图片和箭头上时停止轮播
    $('.banner-img img,.banner .arrow-left,.banner .arrow-right').mouseover(function () {
        if(timer){
            clearInterval(timer);
        }
    });

    //点击圆点时切换图片
    $('.banner .dot').click(function () {
       index = $(this).index();
       changImg();
    });

    //点击左箭头时
    $('.banner .arrow-left').click(function () {
        index--;
        if(index<0){
            index=4;
        }
        changImg();
    });

    //点击右箭头时
    $('.banner .arrow-right').click(function () {
        index++;
        if(index>4){
            index=0;
        }
        changImg();
    });

    //切换图片
    function changImg() {
        $('.banner-img img').eq(index).show().siblings().hide();
        $('.banner .dot').eq(index).addClass('dot-selected').siblings().removeClass('dot-selected');
    }

    begin();


});
