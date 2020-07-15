(function(window){
	var byeSpeaker={};
	byeSpeaker.speakword="Good Bye";
	byeSpeaker.speak=function(name) {
		console.log(byeSpeaker.speakword + " "+ name);
	}
	window.byeSpeaker= byeSpeaker;
})(window);



