const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-input");
const sayHello = document.querySelector("#hello");

function paintName(userName) {
  sayHello.innerText = `Hello ${userName}!`
} //인사 출력

function logIn(event) {
  event.preventDefault();
  const userName = loginInput.value;
  loginForm.className = "hidden";                 //로그인시 입력 창 소거
  paintName(userName);
} //로그인 submit



loginForm.addEventListener("submit", logIn);