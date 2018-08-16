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

// document.body.style.backgroundImage = "url('C:/Users/Administrator/Desktop/马金燕/pomo/images/website/a1f2037e8a4c8488742e7d052b939b951.jpg')";
// 自动更换背景图片
var curIndex = 0;
//时间间隔(单位毫秒)，每秒钟显示一张，数组共有3张图片放在img文件夹下
var timeInterval = 10000;

//定义一个存放照片位置的数组，可以放任意个，在这里放3个
var arr = new Array();
arr[0] = "C:/Users/Administrator/Desktop/马金燕/pomo/images/website/1.jpg";
arr[1] = "C:/Users/Administrator/Desktop/马金燕/pomo/images/website/2.jpg";
arr[2] = "C:/Users/Administrator/Desktop/马金燕/pomo/images/website/3.jpg";
arr[3] = "C:/Users/Administrator/Desktop/马金燕/pomo/images/website/4.jpg";
arr[4] = "C:/Users/Administrator/Desktop/马金燕/pomo/images/website/5.jpg";
arr[5] = "C:/Users/Administrator/Desktop/马金燕/pomo/images/website/6.jpg";
arr[6] = "C:/Users/Administrator/Desktop/马金燕/pomo/images/website/7.jpg";

setInterval(changeImg, timeInterval);
function changeImg() {
if (curIndex == arr.length - 1) {
curIndex = 0;
} else {
curIndex += 1;
}
// 设置body的背景图片
// document.body.style.backgroundImage = "url('C:/Users/Administrator/Desktop/马金燕/pomo/images/website/6.jpg')";
// document.body.style.backgroundImage = "URL('../images/website/de9e960ea3f0a80faf667b4eabe3162c.jpg')";  //显示对应的图片
document.body.style.backgroundImage = "URL("+arr[curIndex]+")";  //显示对应的图片
}