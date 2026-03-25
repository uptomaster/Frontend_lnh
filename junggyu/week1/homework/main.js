const linkPage = document.querySelector(".button_more");
const linkPage2 = document.querySelectorAll(".image_box");

const price = document.querySelector(".price");
const plus = document.querySelector("#plus");
const minus = document.querySelector("#minus");

let totalPricePresent = 918647;
let totalPricePast = 0;

//더 살펴보기 누르면 에어비앤비 사이트로 이동
linkPage.addEventListener("click", () => {
  window.open("https://www.airbnb.co.kr/s/Seoul/homes?refinement_paths%5B%5D=%2Fhomes&amenities%5B%5D=8&room_types%5B%5D=Entire%20home%2Fapt&place_id=ChIJzzlcLQGifDURm_JbQKHsEX4", "_blank");
});

// 사진을 누르면 에어비앤비 사이트로 이동 (각각 따른 링크 연결하기 귀찮아서 통일 했습니다,,)
linkPage2.forEach((imageBox) => {
    imageBox.addEventListener("click", () => {
        window.open("https://www.airbnb.co.kr/s/homes?omni_page_id=36021&map_toggle=true&dynamic_product_ids%5B%5D=1320253931231134238&room_types%5B%5D=Entire+home%2Fapt&amenities%5B%5D=8&checkin=2026-04-26&checkout=2026-05-01&date_picker_type=calendar&lat=37.50094&lng=126.92766&place_id=ChIJzzlcLQGifDURm_JbQKHsEX4", "_blank");
    });
});


// 원래 금액은 회색으로 현재 금액을 검은색으로 표시
function updatePrice() {
    price.innerHTML = `
    <span class="past_price">₩${totalPricePast.toLocaleString()}</span> ₩${totalPricePresent.toLocaleString()}`;
}

// + 일때, 가격 변동
plus.addEventListener("click", () => {
    totalPricePast = totalPricePresent
    totalPricePresent += 10000;
    updatePrice();
});

// - 일때, 가격 변동
minus.addEventListener("click", () => {
    totalPricePast = totalPricePresent
    totalPricePresent -= 10000;
    updatePrice();
});