let video;

//Step 1: Page Load
window.addEventListener("load", function() {
	console.log("Good job opening the window, step 1 page load");
	video = document.querySelector("player1");
	video.autoplay = false;
	console.log('auto play is set to ' + video.autoplay);
	video.loop = false;
	console.log('loop is set to ' + video.loop);

});

//Step 2: Play Button
document.getElementById("play").addEventListener("click", function () {
	console.log("Play Video");
	video = document.getElementById("player1");
	video.play();
})

//Step 3: Pause Button
document.getElementById("pause").addEventListener("click", function() {
	console.log("Pause Video");
	video = document.getElementById("player1");
	video.pause();
})

//Step 4: Slow Down
document.getElementById("slower").addEventListener("click", function() {
	console.log("Slow Down Video");
	video = document.getElementById("player1");
	

})


//Step 5: Speed Up
document.getElementById("faster").addEventListener("click", function() {
	console.log("Speed Up Video");
	video = document.getElementById("player1");

})

//Step 6: Skip Ahead
document.getElementById("skip").addEventListener("click", function() {
	console.log("Skip Ahead Video");
	video = document.getElementById("player1");

})

//Step 7: Mute
document.getElementById("mute").addEventListener("click", function() {
	console.log("Mute Video");
	video = document.getElementById("player1");

})

//Step 8: Volume Slider
window.addEventListener("slider", function() {
	console.log("Good job opening the window, step 8 volume slider");
	
})

//Step 9: Styled
window.addEventListener("vintage", function() {
	console.log("Good job opening the window, step 9 vintage style");
	
})

//Step 10: Original
window.addEventListener("orig", function() {
	
})

// document.querySelector("#play").addEventListener("click", function() {
// 	console.log("Play Video");
// });

