function changeColor() {
	document.getElementById("main").style.backgroundColor = "black";
}
function clearColor() {
	document.getElementById("main").style.backgroundColor = "white";
}
function show_normal() {
	document.getElementById("container_hide").style.display = "none";
	document.getElementById("container_normal").style.display = "block";
}
function show_hide() {
	document.getElementById("container_hide").style.display = "block";
	document.getElementById("container_normal").style.display = "none";
}