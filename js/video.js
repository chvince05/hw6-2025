var video;

//Step 1: Page Load
window.addEventListener("load", function() { //done
	console.log("Good job opening the window");
	video = document.querySelector("#player1");
	video.autoplay = false;
	console.log('Auto play is set to ' + video.autoplay);
	video.loop = false;
	console.log('Loop is set to ' + video.loop);
});

//Step 2: Play Button

document.getElementById("play").addEventListener("click", function () {
	console.log("Play Video");
	video = document.getElementById("player1");
	video.volume = 1; //done
	video.play();
});

//Step 3: Pause Button
document.getElementById("pause").addEventListener("click", function() {
	console.log("Pause Video"); //done
	video = document.getElementById("player1");
	video.pause();
	
});

//Step 4: Slow Down
document.getElementById("slower").addEventListener("click", function() {
	console.log("Slow down video"); //done
	video = document.getElementById("player1");
	video.playbackRate = video.playbackRate * 0.9;
	console.log("Speed is " + video.playbackRate);
});


//Step 5: Speed Up
document.getElementById("faster").addEventListener("click", function() {
	console.log("Speed up Video");
	video = document.getElementById("player1");
	video.playbackRate = video.playbackRate * ((1)/(0.9));
	console.log("Speed is " + video.playbackRate);
});

//Step 6: Skip Ahead
document.getElementById("skip").addEventListener("click", function() {
	console.log("Skip ahead");
	video = document.getElementById("player1");
	video.currentTime = video.currentTime + 10;
	if (video.currentTime > video.duration){
		video.currentTime = 0;
	}
	console.log("Video current time is " + video.currentTime);

});

//Step 7: Mute
document.getElementById("mute").addEventListener("click", function() {
	console.log("Mute"); //done
	video = document.getElementById("player1");
	let mutebox = document.getElementById("mute");
	if(video.muted == true){
		video.muted = false;
		mutebox.textContent = "Unmute";
	}
	else{
		video.muted = true;
		mutebox.textContent = "Mute";
	}
});

//Step 8: Volume Slider
document.getElementById("slider").addEventListener("click", function() {
	video = document.getElementById("player1");
	let volumeslider = document.getElementById("slider").value / 100;
	video.volume = volumeslider;
	console.log("The current volume is " + volumeslider);
	let volslidertext = document.getElementById("volume");
	volslidertext.textContent = (volumeslider * 100) + "%";
});

//Step 9: Styled
document.getElementById("vintage").addEventListener("click", function() {
	document.getElementById("player1").classList.add("oldSchool");
});

//Step 10: Original
document.getElementById("orig").addEventListener("click", function() {
	document.getElementById("player1").classList.remove("oldSchool");
});

// document.querySelector("#play").addEventListener("click", function() {
// 	console.log("Play Video");
// });

