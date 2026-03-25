const Price = document.querySelector(".price");

const handleclickplus = document.querySelector(".plus");
const handleclickminus = document.querySelector(".minus");

handleclickplus.addEventListener('click', function() {
  let currentPrice = Price.textContent;
  let EraseCommaPrice = currentPrice.replaceAll(",","");
  //.repaceAll(a,b) : a를 b로 바꿔줌(b=""일땐 삭제)

  let currentnum = (Number(EraseCommaPrice)+10000).toLocaleString();
  //Number(문자) : 숫자로 바꿔줌
  //.toLocaleString : 현지 언어 규칙에 맞는 문자열로 변환시켜주는 내장 메서드
  Price.textContent = currentnum;
  console.log("플러스 실행 잘됨")
});

handleclickminus.addEventListener('click', function() {
  let currentPrice = Price.textContent;
  let EraseCommaPrice = currentPrice.replaceAll(",","");
  //.repaceAll(a,b) : a를 b로 바꿔줌(b=""일땐 삭제)

  let currentnum = (Number(EraseCommaPrice)-10000).toLocaleString();
  //Number(문자) : 숫자로 바꿔줌
  //.toLocaleString : 현지 언어 규칙에 맞는 문자열로 변환시켜주는 내장 메서드
  Price.textContent = currentnum;
  console.log("마이너스 실행 잘됨")
});
