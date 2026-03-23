const stringPrice = document.querySelectorAll(".price");
const plus = document.getElementById("addBtn");
const minus = document.getElementById("subBtn");

//전체 숙소에 대한 가격 변동
function updatePrice(amount) {
  stringPrice.forEach((price) => {
    let currentPrice = Number(price.innerText.replace(/[^\d]/g, ""));
    let newPrice = currentPrice + amount;

    if (newPrice < 0) newPrice = 0;

    price.innerText = `₩${newPrice.toLocaleString()}`;
  });
}

plus.addEventListener("click", () => updatePrice(10000));
minus.addEventListener("click", () => updatePrice(-10000));
