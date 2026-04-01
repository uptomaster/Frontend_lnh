// 1. 초기 가격 설정
let currentPrice = 918647; // 서울의 집 초기 가격

// 2. HTML에서 조작할 요소들(가격 텍스트, -, + 버튼)을 가져오기
const priceDisplay = document.getElementById("pmprice");
const btnMinus = document.getElementById("btn-minus");
const btnPlus = document.getElementById("btn-plus");

// 3. 화면에 변경된 가격을 업데이트 해주는 함수 작성
function updatePrice() {
  priceDisplay.textContent = `₩${currentPrice.toLocaleString()}`;
}

// 4. -클릭 함수
btnMinus.addEventListener("click", () => {
  currentPrice -= 10000; // 10000원 빼기
  updatePrice(); // 변경된 가격 반영
});

// 5. +클릭 함수
btnPlus.addEventListener("click", () => {
  currentPrice += 10000;
  updatePrice();
});
