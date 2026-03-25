const mainPrice = document.getElementById("main_price");
const plusBtn = document.getElementById("plus_btn");
const minusBtn = document.getElementById("minus_btn");

let priceValue = 918647;

function changePrice() {
    mainPrice.textContent = `₩${priceValue.toLocaleString("ko-KR")}`;
}

plusBtn.onclick = function () {
    priceValue = priceValue + 10000;
    changePrice();
};

minusBtn.onclick = function () {
    priceValue = priceValue - 10000;

    if (priceValue < 0) {
        priceValue = 0;
    }

    changePrice();
};