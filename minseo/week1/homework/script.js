// script.js (파일 이름 확인!)

// 1. 초기값 설정 (사진 속 서울의 집 가격: 918,647)
let currentPrice = 918647;

// 2. HTML 요소 선택 (HTML의 id="target-price"와 이름을 맞췄습니다!)
const priceElement = document.getElementById('target-price');
const plusBtn = document.getElementById('plus-btn');
const minusBtn = document.getElementById('minus-btn');

// 3. 화면 업데이트 함수
function updatePrice() {
    // toLocaleString()으로 콤마(,) 자동 추가
    // innerText가 ₩를 포함하도록 수정
    priceElement.innerText = `₩${currentPrice.toLocaleString()}`;
}

// 4. 이벤트 리스너 등록 (+10,000원)
if (plusBtn) {
    plusBtn.addEventListener('click', () => {
        currentPrice += 10000;
        updatePrice();
        console.log("가격 증가:", currentPrice);
    });
}

// 5. 이벤트 리스너 등록 (-10,000원)
if (minusBtn) {
    minusBtn.addEventListener('click', () => {
        if (currentPrice >= 10000) {
            currentPrice -= 10000;
            updatePrice();
            console.log("가격 감소:", currentPrice);
        } else {
            alert("가격은 0원 이하로 내려갈 수 없습니다.");
        }
    });
}

// 초기 실행 (페이지 로드 시 가격 표시 확인)
updatePrice();