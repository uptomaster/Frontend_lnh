const price = document.querySelector("#seoul-price strong");
const plus = document.querySelector("#plus");
const minus = document.querySelector("#minus");

let firstPrice = 552101;

plus.addEventListener('click', ()=> {
    firstPrice += 10000;
    price.textContent = '₩' + firstPrice.toLocaleString();
})

minus.addEventListener('click', ()=> {
    firstPrice -= 10000;
    price.textContent = '₩' + firstPrice.toLocaleString();
})
