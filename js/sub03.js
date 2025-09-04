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

/* tab */
document.addEventListener("DOMContentLoaded", function () {
  const tabBtns = document.querySelectorAll(".tabMenu .tab-btn");
  const playItems = document.querySelectorAll(".playList .allItem");
  const tabTitles = document.querySelectorAll(".tabList h4");

  tabBtns.forEach(btn => {
    btn.addEventListener("click", function (e) {
      e.preventDefault();
      const target = this.dataset.target;

      // 탭버튼 활성화
      tabBtns.forEach(b => b.classList.remove("active"));
      this.classList.add("active");

      // 리스트 필터링
      playItems.forEach(item => {
        if (target === "all" || item.dataset.group === target) {
          item.style.display = "block";
        } else {
          item.style.display = "none";
        }
      });

      // h4 제목 전환
      tabTitles.forEach(title => {
        if (title.dataset.target === target) {
          title.classList.add("active");
        } else {
          title.classList.remove("active");
        }
      });
    });
  });
});

/* 탭리스트 더 보기 */
document.addEventListener("DOMContentLoaded", () => {
  const wrapper = document.querySelector(".list-wrapper");
  const btnMore = document.querySelector(".btn-more");
  const btnText = btnMore.querySelector("span");
  const items = wrapper.querySelectorAll(".playList > li");

  const rowsPerClick = 4; // 버튼 클릭 시 추가/접기 되는 줄 수
  const rowHeight = 400;  // li 세로 사이즈 고정
  const rowGap = 20;      // CSS gap과 맞춰주세요
  let currentRows = 4;    // 시작은 4줄
  let itemsPerRow = 1;    // 한 줄에 몇 개 배치되는지 계산용

  // ✅ 한 줄에 몇 개 들어가는지 계산
  const calcItemsPerRow = () => {
    if (items.length < 2) return 1;
    const firstTop = items[0].offsetTop;
    for (let i = 1; i < items.length; i++) {
      if (items[i].offsetTop !== firstTop) {
        return i; // 같은 줄이 끝난 순간 = 한 줄의 아이템 개수
      }
    }
    return items.length;
  };

  // ✅ wrapper 높이 조절 (400px * rows + gap 반영)
  const setHeight = (rows) => {
    itemsPerRow = calcItemsPerRow();
    const totalRows = Math.ceil(items.length / itemsPerRow);

    if (rows >= totalRows) {
      // 전체 펼침
      wrapper.style.maxHeight = (totalRows * rowHeight + (totalRows - 1) * rowGap) + "px";
      btnText.textContent = "접기";
    } else {
      // 일부만 표시
      wrapper.style.maxHeight = (rows * rowHeight + (rows - 1) * rowGap) + "px";
      btnText.textContent = "더 보기";
    }
  };

  // ✅ 초기 4줄 설정
  window.addEventListener("load", () => setHeight(currentRows));
  window.addEventListener("resize", () => setHeight(currentRows));

  // ✅ 버튼 클릭 이벤트
  btnMore.addEventListener("click", () => {
    itemsPerRow = calcItemsPerRow();
    const totalRows = Math.ceil(items.length / itemsPerRow);

    if (btnText.textContent === "더 보기") {
      currentRows += rowsPerClick;
      if (currentRows >= totalRows) {
        currentRows = totalRows;
      }
    } else {
      // 접기 눌렀을 때 다시 4줄
      currentRows = 4;
    }

    setHeight(currentRows);
  });
});

/* flex swiper */
var swiper = new Swiper(".flexSwiper", {
  slidesPerView: 3.5,
  spaceBetween: 20,
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      }
});
// hover 시 멈추기
const swiperEl = document.querySelector(".flexSwiper");

swiperEl.addEventListener("mouseenter", () => {
  swiper.autoplay.stop();
});

swiperEl.addEventListener("mouseleave", () => {
  swiper.autoplay.start();
});

/* 검색창 */
document.addEventListener("DOMContentLoaded", () => {
  const searchForm = document.querySelector(".inputBox");
  const searchInput = searchForm.querySelector("input[type='search']");
  const playItems = document.querySelectorAll(".playList .allItem");

  // 폼 제출 시 실행
  searchForm.addEventListener("submit", function (e) {
    e.preventDefault(); // 새로고침 방지

    const keyword = searchInput.value.toLowerCase(); // 입력된 검색어

    playItems.forEach(item => {
      const title = item.querySelector(".playTitle").innerText.toLowerCase(); // 제목만 검색
      if (title.includes(keyword)) {
        item.style.display = "block"; // 검색어 포함 시 보여줌
      } else {
        item.style.display = "none"; // 아니면 숨김
      }
    });
  });
});

/* AOS */
AOS.init();