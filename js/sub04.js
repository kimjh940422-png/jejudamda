$(function () {
    //.delay() - 실행이 되기전 지연시간 / 1s(seconds) = 1000ms
    $('.sub_bg_text > h2').delay(500).animate({
        opacity: 1
    }, 800, function () {
        $('.sub_bg_text > p').delay(300).animate({
            opacity: 0.7
        }, 800)
    })

    $('.tag>li').on('click', function() {
        let i = $(this).index();
        console.log(i);

        $('.tag>li').removeClass('on');
        $('.tag>li').eq(i).addClass('on');

        $('.food_list').removeClass('on');
        $('.food_list').eq(i).addClass('on');
    })

})