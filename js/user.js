const firstCard = document.querySelector("#first-card");
const secondCard = document.querySelector("#second-card");

const loginForm = document.querySelector('#login-form');
const loginInput = document.querySelector("#login-input");
const firstGreeting = document.querySelector("#first-card #greeting");
const secondGreeting = document.querySelector("#second-card div #greeting");

const USERNAME_KEY = "username";
const HIDDEN_CLASS_NAME = "d-none";


// 메뉴 추천받기 버튼을 눌렀을 때 실행
function onMenuButtonClick(event) {
  event.preventDefault();
  firstCard.classList.add(HIDDEN_CLASS_NAME);
  secondCard.classList.remove(HIDDEN_CLASS_NAME);
  if (userName === null){
    userName = loginInput.value;                                // 사용자가 작성한 이름 userName 변수에 저장
    localStorage.setItem(USERNAME_KEY, userName);               // localStorage에 username 저장
  }
  secondGreeting.innerText = `안녕하세요! ${userName}님!`;       // 안녕하세요 @@@님 보이게 하기
}


let userName = localStorage.getItem(USERNAME_KEY);              //localStorage에 저장된 사용자 이름 저장
if (userName === null) {
  loginForm.addEventListener("submit", onMenuButtonClick);
} else {
  loginInput.classList.add(HIDDEN_CLASS_NAME);                  // 이름 입력칸 지우기
  firstGreeting.classList.remove(HIDDEN_CLASS_NAME);            // 안녕하세요 @@@님 보이게 하기
  firstGreeting.innerText = `안녕하세요! ${userName}님`;        // 안녕하세요 @@@님 입력
  loginForm.addEventListener("submit", onMenuButtonClick);      // 메뉴 추천받기 클릭
}