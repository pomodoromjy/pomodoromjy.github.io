// alert("hsfj");
function show_text(id) {
	document.getElementById("result").value += document.getElementById(id).value;
}
function reset() {
	document.getElementById("result").value = "";
	// alert("jk");test
}
function count() {
document.getElementById("result").value = eval(document.getElementById("result").value);//一个非常强大的函数
}
