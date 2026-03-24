const linkPage = document.querySelector(".button_more");
const linkPage2 = document.querySelector(".image_box");

linkPage.addEventListener("click", () => {
  window.open("https://www.airbnb.co.kr/s/Seoul/homes?refinement_paths%5B%5D=%2Fhomes&amenities%5B%5D=8&room_types%5B%5D=Entire%20home%2Fapt&place_id=ChIJzzlcLQGifDURm_JbQKHsEX4", "_blank");
});

linkPage2.addEventListener("click", () => {
  window.open("https://www.airbnb.co.kr/s/homes?omni_page_id=36021&map_toggle=true&dynamic_product_ids%5B%5D=1320253931231134238&room_types%5B%5D=Entire+home%2Fapt&amenities%5B%5D=8&checkin=2026-04-26&checkout=2026-05-01&date_picker_type=calendar&lat=37.50094&lng=126.92766&place_id=ChIJzzlcLQGifDURm_JbQKHsEX4", "_blank");
});