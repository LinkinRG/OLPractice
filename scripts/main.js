function checkCookies() {
	var cookie = document.cookie;
	if(cookie.length > 0) {
		console.log(cookie);
		var inBut = document.getElementById("loginButton");
		var outBut = document.getElementById("logoutButton");
		var mainPage = document.getElementById("main");		
		var username = getCookie();

		inBut.style = "display:none";
		outBut.style = "display:block";
		mainPage.innerHTML = "<h1>Hello " + username + "</h1>";
	}
}

function displayContent(id) {
	var activeElem = document.getElementsByClassName("active")[0];	
	var content = document.getElementById(id);

	activeElem.className = activeElem.className.replace(" active", "");
	activeElem.style = "display:none";
	content.style = "display:block";
    content.className += " active";
}

function login() {
	var mainPage = document.getElementById("main");
	var name = document.getElementsByTagName("input")[0];
	var pass = document.getElementsByTagName("input")[1];
	var inBut = document.getElementById("loginButton");
	var outBut = document.getElementById("logoutButton");
	
	if(name.value.length < 6) {
		document.getElementsByClassName("username")[0].style = "color: red";
	} else {
		document.getElementsByClassName("username")[0].style = "color: black";
	}

	if(pass.value.length < 6) {
		document.getElementsByClassName("password")[0].style = "color: red";
	} else {		
		document.getElementsByClassName("password")[0].style = "color: black";
	}

	if(name.value.length < 6 || pass.value.length < 6) return;
	var d = new Date();
	d.setTime(d.getTime() + 24*60*60*1000);
	setCookie(name.value, d);
	console.log(document.cookie);
	mainPage.innerHTML = "<h1>Hello " + name.value + "</h1>";
	name.value = "";
	pass.value = "";
	inBut.style = "display:none";
	outBut.style = "display:block";
	displayContent("main");
}

function logout() {
	var inBut = document.getElementById("loginButton");
	var outBut = document.getElementById("logoutButton");
	var mainPage = document.getElementById("main");

	deleteCookie();
	console.log(document.cookie);
	inBut.style = "display:block";
	outBut.style = "display:none";
	mainPage.innerHTML = "<h1>Please Login</h1>";
	displayContent("main");
}

function setCookie(name, date) {
	document.cookie = "username=" + name + ";expires=" + date;
}

function getCookie() {
	var name = document.cookie.split(";")[0].split("=")[1];
	return name;
}

function deleteCookie() {
	document.cookie = "username=;expires=Thu, 01 Jan 1970 00:00:00 UTC";
}