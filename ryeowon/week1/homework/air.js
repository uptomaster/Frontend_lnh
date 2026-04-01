let price = 918647; // 초기 가격 설정

const priceElement = document.getElementById("price1"); //html에 쓴 id랑 똑같게 
const minus = document.getElementById("minus");
const plus = document.getElementById("plus");

function Price() {
    priceElement.textContent = `₩${price.toLocaleString()}`; // 가격을 쉼표로 구분해서 표시
}

minus.addEventListener("click", () => {
    if (price > 0) { // 가격이 0보다 클때만 감소
        price -= 10000; // 10,000원 감소
        Price(); // textContent로 수정시켜주기
    }      
});

plus.addEventListener("click", () => {
    price += 10000; 
    Price(); 
});