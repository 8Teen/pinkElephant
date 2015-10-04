setInterval(function () {
	var seconds = new Date().getSeconds();
	var sdegree = seconds * 6 + 270;
	seconds = ("0" + seconds).slice(-2);

	var a = [
		"钱",
		"点",
		"点",
		"我",
		"错",
		"了"
	]
	var idx = seconds % a.length;

	$(".seconds").css({
		"transform": "rotate(" + sdegree + "deg) translate(160px) rotate(-" + sdegree + "deg)"
	}).text(a[idx]);

	var minutes = new Date().getMinutes();
	var mdegree = minutes * 6 + 270;
	minutes = ("0" + minutes).slice(-2);
	$(".minutes").css({
		"transform": "rotate(" + mdegree + "deg) translate(181px) rotate(-" + mdegree + "deg)"
	}).text(minutes);

	var hours = new Date().getHours();
	hours = ("0" + hours).slice(-2);
	$(".hours").text(hours);

}, 1000);