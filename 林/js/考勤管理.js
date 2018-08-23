window.onload = function(){
var check = document.getElementById('tab-left').getElementsByClassName('check');
var dif = document.getElementsByClassName('dif');
var nav = document.getElementById('nav');

dif[0].onclick = function(){
	if(nav.style.display == "none")
		nav.style.display = "block";
	else nav.style.display = "none";
};


var nav_lis = nav.getElementsByTagName("li");
var tab_right = document.getElementById('tab-right');
var clockin_divs = tab_right.getElementsByClassName('clockin');
for (var i = 0; i < nav_lis.length; i++) {
	nav_lis[i].id = i;
	nav_lis[i].onclick = function(){
		for(var j = 0; j<nav_lis.length; j++){
			nav_lis[j].className = "";
			clockin_divs[j].style.display = "none";
		}
		this.className = "active";
		clockin_divs[this.id].style.display = "block";
	}
}

var tab_lis = document.getElementById('tab-left').getElementsByClassName('leave');
var leaveins = document.getElementsByClassName('leavein');
var checkin = document.getElementById('checkin');
for(var i = 0; i < tab_lis.length; i++){
	tab_lis[i].id = i;
	tab_lis[i].onclick = function(){
		for(var j = 0; j < leaveins.length; j++){
			leaveins[j].style.display = "none";
		}
		checkin.style.display = "none";
		leaveins[this.id].style.display = "block";
	}
}




}



