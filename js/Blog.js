function show_menu() {
	document.getElementById("side_bar").style.display = "block";
}
function hide_menu() {
	document.getElementById("side_bar").style.display = "none";
}
function explain() {
	x = document.getElementById("explain");
	if (x.style.display == "block") {
		x.style.display = "none";
	}
	else {
		x.style.display = "block";
	}
}