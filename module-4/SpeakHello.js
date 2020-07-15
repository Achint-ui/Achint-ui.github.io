(function(window){
	var helloSpeaker={};
	helloSpeaker.speakword="Hello";
	helloSpeaker.speak= function(name){
		console.log(helloSpeaker.speakword+ " "+ name);
	}
	window.helloSpeaker= helloSpeaker;
})(window);


