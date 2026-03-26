let price = 918647;

const priceValue = document.getElementById("price-value");
const minusBtn = document.getElementById("minus-btn");
const plusBtn = document.getElementById("plus-btn");

function updatePrice() {
  priceValue.textContent = "₩" + price.toLocaleString();
}

minusBtn.addEventListener("click", function () {
  if (price - 10000 >= 0) {
    price -= 10000;
    updatePrice();
  }
});

plusBtn.addEventListener("click", function () {
  price += 10000;
  updatePrice();
});
