const stringPrice = document.querySelectorAll(".price");
const plus = document.getElementById("addBtn");
const minus = document.getElementById("subBtn");

//전체 숙소에 대한 가격 변동
function updatePrice(amount) {
  stringPrice.forEach((price) => {
    // 태그 안의 가격을 number로 인식. 숫자와 관련없는 문자 제거
    let currentPrice = Number(price.innerText.replace(/[^\d]/g, ""));
    let newPrice = currentPrice + amount;

    // 숙소 가격이 음수가 될 수 없으므로 가격이 0보다 작아지면 0으로 출력
    if (newPrice < 0) newPrice = 0;

    price.innerText = `₩${newPrice.toLocaleString()}`;
  });
}

plus.addEventListener("click", () => updatePrice(10000));
minus.addEventListener("click", () => updatePrice(-10000));
