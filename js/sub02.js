AOS.init({
  duration: 800,
  once: false // 스크롤 올렸다 내리면 다시 애니메이션 실행
});

/* sub title effect */
$(function () {
    //.delay() - 실행이 되기전 지연시간 / 1s(seconds) = 1000ms
    $('.sub_bg_text > h2').delay(500).animate({
        opacity: 1
    }, 800, function () {
        $('.sub_bg_text > p').delay(300).animate({
            opacity: 0.7
        }, 800)
    })
    

})




/* 배너 */
$(function () {
    const $wrap = $(".tabListJeju");  
    const $visual = $wrap.find(".visual > div");
    const $text = $wrap.find(".text_box > div");
    const totalNum = $visual.length;
    let currentNum = 1;

    function showBanner(index) {
        $visual.removeClass('active');
        $text.removeClass('active');

        $visual.eq(index - 1).addClass('active');
        $text.eq(index - 1).addClass('active');

        $wrap.find('.pageNum .current').text(index);
    }

    $wrap.find('.btnNext').on('click', function () {
        currentNum++;
        if (currentNum > totalNum) currentNum = 1;
        showBanner(currentNum);
    });

    $wrap.find('.btnPrev').on('click', function () {
        currentNum--;
        if (currentNum < 1) currentNum = totalNum;
        showBanner(currentNum);
    });
});

$(function () {
    const $wrap = $(".tabListSeogwipo");  // 서귀포 배너 전체 감싸는 div
    const $visual = $wrap.find(".visual02 > div");
    const $text = $wrap.find(".text_box02 > div");
    const totalNum = $visual.length;
    let currentNum = 1;

    function showBanner(index) {
        $visual.removeClass('active02');
        $text.removeClass('active02');

        $visual.eq(index - 1).addClass('active02');
        $text.eq(index - 1).addClass('active02');

        $wrap.find('.pageNum02 .current').text(index);
    }

    $wrap.find('.btnNext').on('click', function () {
        currentNum++;
        if (currentNum > totalNum) currentNum = 1;
        showBanner(currentNum);
    });

    $wrap.find('.btnPrev').on('click', function () {
        currentNum--;
        if (currentNum < 1) currentNum = totalNum;
        showBanner(currentNum);
    });
});




