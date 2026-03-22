const contactDisplay = document.querySelector("#contacts");
const infoDisplay = document.querySelector("#info-display");

const aboutBtn = document.querySelector("#menu-about");
const contactBtn = document.querySelector("#menu-contact");
const profileBtn = document.querySelector("#menu-profile");

contactDisplay.addEventListener("click", () => {
  contactDisplay.textContent = "010-9916-2561";
});

aboutBtn.addEventListener("click", () => {
  infoDisplay.style.display = "block";
  infoDisplay.innerHTML = "<h3>About</h3><p>영상·애니메이션과 컴퓨터공학을 함께 전공하고 있습니다. 영상미와 기술력을 모두 갖춘 개발자가 되고 싶어용</p>";
});

contactBtn.addEventListener("click", () => {
  infoDisplay.style.display = "block";
  infoDisplay.innerHTML = "<h3>Contact</h3><p>인스타그램 맞팔하고 친해져요 ~ 하단 버튼 누르면 주소 나옵니다</p>";
});

profileBtn.addEventListener("click", () => {
  infoDisplay.style.display = "block";
  infoDisplay.innerHTML = "<h3>Profile</h3><p>• 멋쟁이사자처럼 14기 프론트엔드<br>• 편집관련 툴(파이널컷,큐베이스 등)가능<br>• 개발은 완전 초보지만.. 인터랙티브한 웹 UI 구현에 관심 많아요</p>";
});