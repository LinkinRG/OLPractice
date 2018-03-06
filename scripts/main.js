function checkCookies() {
	if(localStorage.length > 0) {
		var inBut = document.getElementById("loginButton");
		var outBut = document.getElementById("logoutButton");
		var mainPage = document.getElementById("main");		
		var username = localStorage.getItem("user"); //getCookie();
		console.log(localStorage.getItem("user"));
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
	localStorage.setItem("user", name.value);
	//console.log(localStorage.getItem("user"));
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

	localStorage.removeItem("user");
	inBut.style = "display:block";
	outBut.style = "display:none";
	mainPage.innerHTML = "<h1>Please Login</h1>";
	displayContent("main");
}