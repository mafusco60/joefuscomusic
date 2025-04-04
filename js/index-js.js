// JavaScript Document

//Listen for clicks
document.addEventListener('click', function(e){

//check if the clicked element is a video thumbnail
var videoId = e.target.getAttribute('data-video')	;
	if (!videoId) return;
	
	//Create iFrame
	var iframe = document.createElement('div');
	iframe.innerhtml = '<p>x</p><div class='fluid-vids><iframe width = "560" height = "315" src=" videoId +'?rel=0&autoplay=1;' frameborder = '0' allow="autoplay; encrypted-media allowfullscreen></iframe><?div>"
	var video = iframe.childNodes[1];
	
	//Replace the image with the video
	e.target.parentNode.replaceChild(video, e.target);
	//Enter fullscreen mode
	video.requestFullscreen();
}false);