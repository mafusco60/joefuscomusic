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
//maf
const playlistBtns =
document.querySelector('#choices').children;

//const playlistBtns1 = document.querySelector('#choices-1').children;
//const playlistBtns2 = document.querySelector('#choices-2').children;
// Song titles - vary this so that it fills up the proper menu-card
const songs = ['Strings', 'Get Out of My Space', 'Bone Dry Arizona','AERO', 'Quartechno', 'A Softer Machine', 'Positively Negative', 'Dream Number 7 Sampler'];

// Display Playlist  and times - maf
function playlist(){
var	i=0;
while (i < songs.length)
{	
	var playlistTimes = getPlaylistTimes(songs[i]);
	const onemin = 60;
	const min = Math.floor(playlistTimes/onemin);
	//min = Math.trunc(min)
	const sec = Math.trunc (playlistTimes % onemin);
	console.log (min + ':' + sec);
	const playlistTimeString = toString(`${min} + ':' + ${sec}`);
	console.log (`${playlistTimeString}`);
	// `music/${songs[i]}.mp3`.duration;
	//const playlistTimes = 
	//getPlaylistTimes(songs[i]);
	playlistBtns[i].innerHTML = `<h4>${songs[i]}</h4>`;
// + ${playlistTimes[i]})</h4>`;		

	
	i++;	
}
}
function getPlaylistTimes(playlistSong){	
var au = document.createElement('audio');
	au.src = `music/${playlistSong}.mp3`;
	//au.addEventListener('loadedmetadata', au.duration, false);
	return au.duration
	
}
//Initially list all songs
playlist();

// Keep track of song
let songIndex = 2;









// Initially load song details into DOM
loadSong(songs[songIndex]);



// Update song details
function loadSong(song) {
  title.innerText = song;
  audio.src = `music/${song}.mp3`;
  cover.src = `images/${song}.jpg`;
}


// Play song
function playSong() {
  musicContainer.classList.add('play');
  playBtn.querySelector('i.fas').classList.remove('fa-play');
  playBtn.querySelector('i.fas').classList.add('fa-pause');

  audio.play();
}

// Pause song
function pauseSong() {
  musicContainer.classList.remove('play');
  playBtn.querySelector('i.fas').classList.add('fa-play');
  playBtn.querySelector('i.fas').classList.remove('fa-pause');

  audio.pause();
}

// Previous song
function prevSong() {
  songIndex--;

  if (songIndex < 0) {
    songIndex = songs.length - 1;
  }

  loadSong(songs[songIndex]);

  playSong();
}
//Me
//function chosenSong(choiceIndex){
	
//	songIndex = choiceIndex;
//	loadSong(songs[songIndex]);
//	playSong();
//}

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
  const { duration, currentTime } = e.srcElement;
  const progressPercent = (currentTime / duration) * 100;
  progress.style.width = `${progressPercent}%`;
}

// Set progress bar
function setProgress(e) {
  const width = this.clientWidth;
  const clickX = e.offsetX;
  const duration = audio.duration;

  audio.currentTime = (clickX / width) * duration;
}

//get duration & currentTime for Time of song
function DurTime (e) {
	const {duration,currentTime} = e.srcElement;
	var sec;
	var sec_d;

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
	currTime.innerHTML = `<h4>${min} + ':' + ${sec}</h4>`;

	// define minutes duration
	let min_d = (isNaN(duration) === true)? '0':
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
	durTime.innerHTML = `<h4>${min_d} +':'+ ${sec_d}</h4>`;
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



//Choose from playlist maf
playlistBtns[0].addEventListener('click', () => {
	loadSong(songs[0])
	playSong()});
playlistBtns[1].addEventListener('click', () => {
	loadSong(songs[1])
	playSong()});
playlistBtns[2].addEventListener('click', () => {
	loadSong(songs[2])
	playSong()});
playlistBtns[3].addEventListener('click', () => {
	loadSong(songs[3])
	playSong()});
playlistBtns[4].addEventListener('click', () => {
	loadSong(songs[4])
	playSong()});
playlistBtns[5].addEventListener('click', () => {
	loadSong(songs[5])
	playSong()});
playlistBtns[6].addEventListener('click', () => {
	loadSong(songs[6])
	playSong()});
playlistBtns[7].addEventListener('click', () => {
	loadSong(songs[7])
	playSong()});

// Change song
prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);


// Time/song update
audio.addEventListener('timeupdate', updateProgress);

// Click on progress bar
progressContainer.addEventListener('click', setProgress);

// Song ends
audio.addEventListener('ended', nextSong);

// Time of song
audio.addEventListener('timeupdate',DurTime);




