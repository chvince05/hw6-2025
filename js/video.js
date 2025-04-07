var video;

//Step 1: Page Load
window.addEventListener("load", function() { //done
	console.log("Good job opening the window, step 1 page load");
	video.autoplay = false;
	console.log('auto play is set to ' + video.autoplay);
	video.loop = false;
	video = document.getElementById("player1");
	console.log('loop is set to ' + video.loop);
});

//Step 2: Play Button

document.getElementById("play").addEventListener("click", function () {
	console.log("Play Video");
	video.volume = 1; //done
	video.play();
})

//Step 3: Pause Button
document.getElementById("pause").addEventListener("click", function() {
	console.log("Pause Video"); //done
	video.pause();
	
})

//Step 4: Slow Down
document.getElementById("slower").addEventListener("click", function() {
	console.log("Slow down video"); //done
	video.playbackRate = video.playbackRate * 0.9;
	console.log("Speed is " + video.playbackRate);
})


//Step 5: Speed Up
document.getElementById("faster").addEventListener("click", function() {
	console.log("Speed up Video");
	video.playbackRate = video.playbackRate * 1.1;
	console.log("Speed is " + video.playbackRate);

})

//Step 6: Skip Ahead
document.getElementById("skip").addEventListener("click", function() {
	console.log("Skip ahead");
	video.currentTime = video.currentTime + 10;
	if (video.currentTime > video.duration){
		video.currentTime = 0;
	}
	console.log("Video current time is " + video.currentTime);

})

//Step 7: Mute
document.getElementById("mute").addEventListener("click", function() {
	console.log("Mute"); //done
	let mutebox = document.getElementById("mute");
	if(video.muted == true){
		video.muted = false;
		mutebox.textContent = "Unmute"
	}
	else if (video.muted == false){
		video.muted = true;
		mutebox.textContent = "Mute"
	}
})

//Step 8: Volume Slider
document.getElementById("mute").addEventListener("click", function() {
	document.getElementById("player1").classList.add("oldSchool");
})

//Step 9: Styled
document.getElementById("vintage").addEventListener("click", function() {
	document.getElementById("player1").classList.add("oldSchool");
})

//Step 10: Original
document.getElementById("orig").addEventListener("click", function() {
	document.getElementById("player1").classList.remove("oldSchool");
})

// document.querySelector("#play").addEventListener("click", function() {
// 	console.log("Play Video");
// });

