// 이름표
const priceElement = document.getElementById('price-value');
const plusBtn = document.getElementById('plus-btn');
const minusBtn = document.getElementById('minus-btn');

// 현재 가격 숫자로 저장 (콤마 제외한 숫자만)
let currentPrice = 918647;

// 더하기 기능
plusBtn.addEventListener('click', () => {
    currentPrice += 10000; // 10,000 더하기
    priceElement.innerText = currentPrice.toLocaleString(); // 숫자에 콤마 찍어서 보여주기
});

// 빼기 기능
minusBtn.addEventListener('click', () => {
    currentPrice -= 10000; // 10,000 빼기
    priceElement.innerText = currentPrice.toLocaleString();
});