let button_logup = document.querySelector(".nav__logup");
let button_login = document.querySelector(".nav__login");
let reg_line = document.querySelector(".reg__event-line");
let login = document.querySelector("._event-login");
let logup = document.querySelector("._event-logup");
const apple_login = document.querySelector(".reg__login-apple");
button_login.style.opacity = "70%";
apple_login.style.visibility = "hidden";

button_login.addEventListener('click', function log_in(){
	reg_line.style.transform = "translateX(-50%)";
	login.style.visibility = "visible";
	logup.style.visibility = "hidden";
	button_login.style.opacity = "100%";
	button_login.style.order = "2";
	button_logup.style.order = "3";
	button_logup.style.opacity = "70%";
	apple_login.style.visibility = "visible";
	apple_login.style.opacity = "70%";
});



button_logup.addEventListener('click', function log_up(){
	reg_line.style.transform = "translateX(0)";
	login.style.visibility = "hidden";
	logup.style.visibility = "visible";
	button_login.style.opacity = "70%";
	button_login.style.order = "3";
	button_logup.style.opacity = "100%";
	apple_login.style.visibility = "hidden";
	apple_login.style.opacity = "0";
});


