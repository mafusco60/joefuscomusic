const musicContainer = document.getElementById('music-container');
const playBtn = document.getElementById('play');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

const audio = document.getElementById('audio');
const progress = document.getElementById('progress');
const progressContainer = document.getElementById('progress-container');
const title = document.getElementById('title');
const cover = document.getElementById('cover');
const currTime = document.querySelector('#currTime');
const durTime = document.querySelector('#durTime');
//const label = document.querySelectorAll('.lbl');
//const body = document.querySelectorAll('body');
//const heading = document.querySelector('.header');

// Song titles 

const songs = ['Strings', 'Get Out of My Space', 'Bone Dry Arizona' ,'AERO' ,  'Quartechno',  'A Softer Machine',  'Positively Negative', 'Dream Number 7 Sampler'];

/*function checkSong(){
	console.log (songIndex);
}*/

/*class PlaylistButton {
	constructor  (buttonIndex, songTitle, songDuration, category ){
	this.songTitle = songTitle;
	this.songDuration = songDuration;
	this.category = category;
	this.buttonIndex = buttonIndex;
}

}*/


/*var playlistInfo = new  PlaylistButton();
playlistInfo[0]

function fillPlaylist (playlistInfo){
	let i = 0;
	while (i < songs.length){
	playlistInfo[i].buttonIndex.push (i);
	playlistInfo[i].songTitle.push(songs[i]);
	i++;
} return playlistInfo;
	}
playlistInfo =  fillPlaylist(playlistInfo);
console.log(playlistInfo);*/


// Keep track of song
let songIndex = 0;



// Song durations - use later
//const songDurations = ['3:24', '3:51', '3:27', '3:10', '2:57', '3:50', '1:00', '9:07' ];

	

//Create labels, Name playlist
const playlist = new Array(songs.length-1);
function createLbls (){
let i=0;
while (i < songs.length){
	
	playlist[i] = document.createElement('LABEL');
	//playlist[i].type =('button');
	playlist[i].classList.add('lbl');
	playlist[i].id = (i);
	playlist[i].for = (`${songs[i]}`);
	
	//playlist[i].index = (i);
	playlist[i].textContent = (`${songs[i]}`);
	//document.'playlist-container'.appendChild(playlist[i]);
	document.body.appendChild(playlist[i]);
	console.log( playlist[i]);
	
 i++} 
	}
createLbls();


// Update song details
function loadSong(song) {
  title.innerText = song;
  audio.src = `music/${song}.mp3`;
  cover.src = `images/Strings.jpg`;
}


// Play song
function playSong() {
  musicContainer.classList.add('play');
  playBtn.querySelector('i.fas').classList.remove('fa-play');
  playBtn.querySelector('i.fas').classList.add('fa-pause');
  removeHeading();
  audio.play();
}

// Pause song
function pauseSong() {
  musicContainer.classList.remove('play');
  playBtn.querySelector('i.fas').classList.add('fa-play');
  playBtn.querySelector('i.fas').classList.remove('fa-pause');
  
  //replaceHeading();
  audio.pause();
}
function removeHeading(){
	var header = document.querySelector('header');
	//header.remove();
	header.innerHTML = ' ';
}
/*function replaceHeading(){
	//var header = document.createElement('header');
	//document.body.appendChild(header);
	const newHeader = document.createTextNode('Music Player');
	newHeader.appendChild('Music Player');
	const currentHeader = document.querySelector('#header1');
	document.body.insertBefore (newHeader, currentHeader);
	//header.innerHTML = `<header><h2><Music Player></h2></header>`;
	
}  */

// Previous song
function prevSong() {
  songIndex--;

  if (songIndex < 0) {
    songIndex = songs.length - 1;
  }

  loadSong(songs[songIndex]);

  playSong();
}
//Clicked Song from playlist
function chosenSong(index){
	songIndex = index;
	loadSong(songs[songIndex]);
	playSong();
}

// Next song
function nextSong() {
  songIndex++;

  if (songIndex > songs.length - 1) {
    songIndex = 0;
  }

  loadSong(songs[songIndex]);

  playSong();
}

// Update progress bar
function updateProgress(e) {
  const { duration, currentTime } = e.target;
  const progressPercent = (currentTime / duration) * 100;
  progress.style.width = `${progressPercent}%`;
}

// Set progress bar
function setProgress(e) {
  const width = this.clientWidth;
  const clickX = e.offsetX;
  const duration = audio.duration;
//console.log(duration);
  audio.currentTime = (clickX / width) * duration;
}

//get duration & currentTime for Time of song
function DurTime (e, min_d, sec_d) {
	const {duration,currentTime} = e.target;
	var sec;
	//var sec_d;

	// define minutes currentTime
	let min = (currentTime==null)? 0:
	Math.floor(currentTime/60);
	min = min <10 ? '0'+min:min;

	// define seconds currentTime
	function get_sec (x) {
		if(Math.floor(x) >= 60){
			
			for (var i = 1; i<=60; i++){
				if(Math.floor(x)>=(60*i) && Math.floor(x)<(60*(i+1))) {
					sec = Math.floor(x) - (60*i);
					sec = sec <10 ? '0'+sec:sec;
				}
			}
		}else{
		sec = Math.floor(x);
		sec = sec <10 ? '0'+sec:sec;
		}
	} 

	get_sec (currentTime,sec);
	
	// change currentTime DOM
	
	currTime.innerHTML = `<p>${min}:${sec}</p>`;

	// define minutes duration
	min_d = (isNaN(duration) === true)? '0':
		Math.floor(duration/60);
	min_d = min_d <10 ? '0'+min_d:min_d;


	function get_sec_d (x) {
		if(Math.floor(x) >= 60){
			
			for (var i = 1; i<=60; i++){
				if(Math.floor(x)>=(60*i) && Math.floor(x)<(60*(i+1))) {
					sec_d = Math.floor(x) - (60*i);
					sec_d = sec_d <10 ? '0'+sec_d:sec_d;
				
				}
							}
		}else{
		sec_d = (isNaN(duration) === true)? '0':
		Math.floor(x);
		
		sec_d = sec_d <10 ? '0'+sec_d:sec_d;
		}
	} 

	// define seconds duration
	
	get_sec_d (duration);

	// change duration DOM

	durTime.innerHTML = `<p>${min_d}:${sec_d}</p>`;
}


// Event listeners
playBtn.addEventListener('click', () => {
  const isPlaying = musicContainer.classList.contains('play');

  if (isPlaying) {
    pauseSong();
	
  } else {
    playSong();

  }
});

/*label.addEventListener('click', () => {
  const isSong = label.classList.contains('lbl');

  if (isSong) {
    pauseSong();
  }
});*/


// Initially load song details into DOM
loadSong(songs[songIndex]);

/*

//Not Working - assign click to playlist Titles - need this
playlist.addEventListener('click', () => { 
	chosenSong(playlist.textContent, playlist.id)
	console.log(playlist.textContent, playlist.id, element)
});*/
/*playlist.addEventListener('click', () => { 
	var isChosen = body.classList.contains('lbl');
	if (isChosen != null){
	songIndex = isChosen.id;
	chosenSong();}}*/

//);
// Change song
prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);
//playlist.addEventListener('click', checkSong);


// Time/song update
audio.addEventListener('timeupdate', updateProgress);

// Click on progress bar
progressContainer.addEventListener('click', setProgress);

// Song ends
audio.addEventListener('ended', nextSong);

// Time of song
audio.addEventListener('timeupdate',DurTime);



playlist[5].addEventListener('click', () => {
	chosenSong(5);
	});

