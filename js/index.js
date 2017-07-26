/**
 * Created by Administrator on 2017/5/8.
 */


$(function () {
    /*
    * 1.监听鼠标点击
    * 1.1给当前的li添加cur，并清除其他li的cur
    * 1.2让每一个页面进行切换
    *
    * 2.监听屏幕的滚动
    * */



    //9.动态控制标签显示或隐藏
    $('.small-logo').hide();

    //1.监听鼠标的点击
    var index = 0;
    var timer = null;
    $('.gps').on('click','li',function () {
        //2.获取每一个li对应的index
        index = $(this).index();
        //console.log(index);

        //3.切换cur
        $(this).addClass('cur').siblings().removeClass('cur');

        //4.切换section
        $('section').eq(index).show().siblings('section').hide();


        //10.动态控制标签显示或隐藏
        showOrHide(index);



        //12.当进入页面时，添加一个从天而降的动画
        //移除current
        setTimeout(function () {
            $('section').eq(index).removeClass('current').siblings('section').addClass('current');
        },500);

    });


    //5.监听滚动
    $(window).on('mousewheel',function (e,d) {

        //8.定时器函数节流
        clearTimeout(timer);
        timer = setTimeout(function () {
            //console.log(d);
            //5.1.获取每一屏对应的索引值
            index -= d;
            //5.2判断index的越界问题
            if(index >= $('.gps li').length - 1){
                index = $('.gps li').length - 1
            }else if(index <= 0 ){
                index = 0;
            }
            console.log(index);

            //6.切换cur
            $('.gps li').eq(index).addClass('cur').siblings().removeClass('cur');

            //7.切换section
            $('section').eq(index).show().siblings('section').hide();

            //11.动态控制标签显示或隐藏
            showOrHide(index);

            //13.当进入页面时，添加一个从天而降的动画
            //移除current
            setTimeout(function () {
                $('section').eq(index).removeClass('current').siblings('section').addClass('current');
            },500);



        },500);


    });





    /*$(window).on('mousewheel',function (event) {
        console.log(event.deltaY);
    });*/
});


/*****显示或者隐藏logo或者scroll*****/
function showOrHide(index) {
    //1.判断是否是第一屏
    if (index == 0){
        $('.small-logo').hide();
        $('.p1-bottom-img').show();
    }else{
        $('.small-logo').show();
        $('.p1-bottom-img').hide();
    }
}

