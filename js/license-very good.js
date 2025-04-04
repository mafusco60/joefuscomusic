// JavaScript Document

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
//const playlistContainer = document.querySelector('.playlist-container');

class Song {
	constructor (id, title, duration, category, album){
		this.id = id;
		this.title = title;
		this.duration = duration;
		this.category = category;
		this.album = album;
	}
	newSong (){
		push(this.title)
	}
	/*getDuration(){
		console.log('GOT THERE')
		audio.src = `/music/${title}.mp3`;
		console.log(audio.src);
		const duration =  Math.floor(audio.duration);
		console.log(duration);
		return duration;
	}*/	
}

const songlist = [
				new Song(1, 'Strings','3:24' ,'Orchestral'), 
				new Song(2, 'Get Out of My Space','3:51' ,'Orchestral'),
				new Song(3, 'Bone Dry Arizona','3:27' ,'Orchestral'), 
				new Song(4, 'AERO','3:10' ,'Orchestral'),
				new Song(5, 'Quartechno','2:57' ,'Orchestral'), 
				new Song(6, 'A Softer Machine', '3:50','Orchestral'),
				new Song(7, 'Positively Negative','1:00' ,'Orchestral'), 
				new Song(8, 'Kora', '2:50','Acoustic', 'DN7'),
				new Song(9, 'Oh, My Sweet America','4:09' ,'Acoustic', 'DN7'),				
				new Song(10, 'Dream Number 7','3:45' ,'Acoustic', 'DN7'),				
				new Song(11, 'Chasing the River','2:26' ,'Acoustic', 'DN7'),				 
				new Song(12, 'I Remember Jenny','3:59' ,'Acoustic', 'DN7'),				
				new Song(13, 'The Crossing','3:09' ,'Acoustic', 'DN7'),				
				new Song(14, 'For the Birds','4:14' ,'Acoustic', 'DN7'),				
				new Song(15, 'The Durango Kid', '4:00','Acoustic', 'DN7'),				
				new Song(16, 'The Sandman','3:45' ,'Acoustic', 'DN7')	];

console.log(songlist[1])
console.log (songlist[0],songlist[1],songlist[2],songlist[3]);
console.log(songlist);


// Song titles 
const songs = ['Strings', 'Get Out of My Space', 'Bone Dry Arizona' ,'AERO' ,  'Quartechno',  'A Softer Machine',  'Positively Negative'];



function checkSong(){
	console.log (songIndex);
	const labels = document.querySelectorAll('.lbl');
	let i = 0;
	while (i < songs.length){
	labels[i+1].style.fontWeight = 'normal';
	labels[i+1].style.color = 'darkblue';	
		i++;
	}
	labels[songIndex+1].style.fontWeight = 'bold';
	labels[songIndex+1].style.color = 'black';
	
	
	console.log (labels[songIndex+1]);
	//playlist[songIndex].color = 'red'; 
}

// Keep track of song
let songIndex = 0;

// Song durations - use later
//const songDurations = ['3:24', '3:51', '3:27', '3:10', '2:57', '3:50', '1:00', '9:07' ];	

//Create labels, Name playlist
const playlist = new Array(songs.length-1);
function createLbls (){
	//playlistContainer.innerHTML = (`<h4>more to come...</h4>`);
	let i=0;
	while (i < songs.length){
	
	playlist[i] = document.createElement('LABEL');
	//playlist[i].type =('button');
	playlist[i].classList.add('lbl');
	playlist[i].id = (i);
	playlist[i].for = (`${songs[i]}`);
	playlist[i].textContent = (`${songs[i]}`);

	//const body = document.querySelector('.body');
	const playlistContainer = document.querySelector('.playlist-container');
	playlistContainer.appendChild(playlist[i]);
	
		
		i++;
		if (i === songs.length){
			playlist[i] = document.createElement('LABEL');
			playlist[i].textContent = (`much more to come ...`);
			playlistContainer.appendChild(playlist[i]);
		}
	}

	}
createLbls();


// Update song details
function loadSong(song) {
  title.innerText = song;
  audio.src = `/music/${song}.mp3`;
  cover.src = `/images/Strings.jpg`;
  //checkSong();
}

// Play song
function playSong() {
  musicContainer.classList.add('play');
  playBtn.querySelector('i.fas').classList.remove('fa-play');
  playBtn.querySelector('i.fas').classList.add('fa-pause');
  removeHeading();
  checkSong();
  audio.play();
  
}

// Pause song
function pauseSong() {
  musicContainer.classList.remove('play');
  playBtn.querySelector('i.fas').classList.add('fa-play');
  playBtn.querySelector('i.fas').classList.remove('fa-pause');
  audio.pause();
  restoreHeading();
}
function removeHeading(){
	const header = document.querySelector('header2');
	header.style.color = 'transparent';
}
function restoreHeading(){
	const header = document.querySelector('header2');
	header.style.color = 'aliceblue';
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
//Clicked Song from playlist
function chosenSong(index){
	songIndex = index;
	loadSong(songs[songIndex]);
	playSong();
	//console.log(songs[songIndex]);
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

// Initially load song details into DOM
loadSong(songs[songIndex]);

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
//audio.addEventListener('timeupdate', getDuration)

playlist[0].addEventListener('click', () => {
	chosenSong(0)});
playlist[1].addEventListener('click', () => {
	chosenSong(1)});
playlist[2].addEventListener('click', () => {
	chosenSong(2)});
playlist[3].addEventListener('click', () => {
	chosenSong(3)});
playlist[4].addEventListener('click', () => {
	chosenSong(4)});
playlist[5].addEventListener('click', () => {
	chosenSong(5)});
playlist[6].addEventListener('click', () => {
	chosenSong(6)});






	
