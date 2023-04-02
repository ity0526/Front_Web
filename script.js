const loginForm = document.querySelector("#login-form");
const logoutForm = document.querySelector("#logout-form");
const loginInput = document.querySelector("#login-input");
const sayHello = document.querySelector("#hello");

function paintName(userName) {
  sayHello.innerText = `Hello ${userName}!`
  logoutForm.className = "";
} //인사 출력

function logIn(event) {
  event.preventDefault();
  const userName = loginInput.value;
  loginForm.className = "hidden";                 //로그인시 입력 창 소거
  paintName(userName);
  localStorage.setItem("User", userName);         //로그인 정보를 저장
} //로그인 submit

function logOut(event) {
  localStorage.removeItem("User");
}

if(localStorage.getItem("User") !== null){
  const userName = localStorage.getItem("User");
  loginForm.className= "hidden";
  sayHello.innerText = `Hello ${userName}!`
}//LocalStorage에 저장되어 있으면 바로 인사를 출력


loginForm.addEventListener("submit", logIn);
logoutForm.addEventListener("submit", logOut);

