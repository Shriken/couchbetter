var gotoFs = function() {
	var iframes = document.getElementsByTagName("iframe");
	window.location = iframes[1].src;
}

var onLoad = function() {
	gotoFs();

	var fullscreenButton = document.createElement("button");
}

var js = document.createElement("script");

js.type = "text/javascript";
js.src = "http://couchtuner.eu.com/2015/01/marvels-agent-carter-s1-e3-time-and-tide.html";
js.onreadystatechange = onLoad;
js.onload = onLoad;

document.getElementsByTagName('head')[0].appendChild(js);
