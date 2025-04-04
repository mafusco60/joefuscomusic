// JavaScript Document

const musicContainer = document.querySelector('#music-container');
const playBtn = document.querySelector('#play');
const prevBtn = document.querySelector('#prev');
const nextBtn = document.querySelector('#next');
const audio = document.querySelector('#audio');
const progress = document.querySelector('#progress');
const progressContainer = document.querySelector('#progress-container');
const title = document.querySelector('#title');
const cover = document.querySelector('#cover');
const currTime = document.querySelector('#currTime');
const durTime = document.querySelector('#durTime');
//const playlistContainer = document.querySelectorAll('.playlist-container');

//Global colors
const normalSongTitleColor = 'aliceblue';
const activeSongTitleColor = 'red';
const lightTextColor = 'aliceblue'
const darkTextColor = 'black'
const shadowColor = 'grey'


//Class for Song Information
class Song {
	constructor (id, title, time, category){
		this.id = id;
		this.title = title;
		this.time = time;
		this.category = category;
	}	
}


//Song Class Information Array
const songlist = [
				new Song(1, 'Strings','3:24' ,'Orchestral'), 
				new Song(2, 'Get Out of My Space','3:51' ,'Orchestral'),
				new Song(3, 'Bone Dry Arizona','3:27' ,'Orchestral'), 
				new Song(4, 'AERO','3:10' ,'Orchestral'),
				new Song(5, 'Quartechno','2:57' ,'Orchestral'), 
				new Song(6, 'A Softer Machine', '3:50','Orchestral'),
				new Song(7, 'Positively Negative','1:00' ,'Orchestral'), 
				new Song(8, 'Kora', '2:50','Acoustic Album - Dream Number 7'),
				new Song(9, 'Oh, My Sweet America','4:09' ,'Acoustic Album - Dream Number 7'),	
				new Song(10, 'Dream Number 7','3:45' ,'Acoustic Album - Dream Number 7'),		
				new Song(11, 'Chasing The River','2:26' ,'Acoustic Album - Dream Number 7'),
				new Song(12, 'I Remember Jenny','3:59' ,'Acoustic Album - Dream Number 7'),	
				new Song(13, 'The Crossing','3:09' ,'Acoustic Album - Dream Number 7'),		
				new Song(14, 'For The Birds','4:14' ,'Acoustic Album - Dream Number 7'),		
				new Song(15, 'The Durango Kid', '4:00','Acoustic Album - Dream Number 7'),		
				new Song(16, 'The Sandman','3:45' ,'Acoustic Album - Dream Number 7'),	
				new Song(17, 'Angels We Have Heard On High', '3:14','Acoustic Album - Let\'s Trim The Tree'),
				new Song(18, 'Joy To The World','2:22' ,'Acoustic Album - Let\'s Trim The Tree'),	
				new Song(19, 'Oh, Come All Ye Faithful','2:17' ,'Acoustic Album - Let\'s Trim The Tree'),
				new Song(20, 'Silent Night','3:19' ,'Acoustic Album - Let\'s Trim The Tree'),	
				new Song(21, 'Good King Wenceslaus','2:44' ,'Acoustic Album - Let\'s Trim The Tree'),		
				new Song(22, 'God Rest Ye Merry Gentleman','3:19' ,'Acoustic Album - Let\'s Trim The Tree'),		
				new Song(23, 'What Child Is This?', '2:25','Acoustic Album - Let\'s Trim The Tree'),	
				new Song(24, 'Hark! The Herald Angels Sing','3:00' ,'Acoustic Album - Let\'s Trim The Tree')
	
];
//
let columnCounter =0;
// Keep track of song   
let songIndex = 0;

//enboldens playing song title
function activeSongFont(){
	const labels = document.querySelectorAll('.lbl');
	
	//return all titles to normal color
	labels.forEach(function(labels){
		labels.style.fontWeight = 'normal';
		labels.style.color = normalSongTitleColor;	});
	
	//change active title to bold and active color 
	labels[songIndex].style.fontWeight = 'bold';
	labels[songIndex].style.color = activeSongTitleColor;
}

//create an array for songs in one category  
function createSortArray (songCategory){	
	let sortArray = songlist.filter  (function(songInfo){
		return songInfo.category === songCategory
	});return sortArray}



//Global const playlist which will hold all song titles 
var playlist = new Array();
	//console.log(playlist);

//categories of songs to go into seperate columns 
//const acousticXMASArray = createSortArray ('Acoustic Album - Let\'s Trim The Tree'); 
const acousticDN7Array = createSortArray('Acoustic Album - Dream Number 7');
const orchestralArray = createSortArray('Orchestral');

//fill columns with titles .....................  
createLbls(orchestralArray);//change
createLbls(acousticDN7Array);//change
//createLbls(acousticXMASArray); change

//fill playlist and create labels with song titles UNNECESSARY FILL OF PLAYLIST UNLESS IT PLAYS CATEGORY ORDER
//USE FOREACH 
function createLbls (songsArray){

	let i=0;
	while (i < songsArray.length){
		playlist.unshift (songsArray[i].title);

		playlist[i] = document.createElement('LABEL');
		
		playlist[i].classList.add('lbl');
		
		playlist[i].innerHTML = (`${songsArray[i].title} <br>${songsArray[i].time}`);
		
	const playlistContainer1 = document.querySelector('#playlist-container1');
	const playlistContainer2 = document.querySelector('#playlist-container2');
	//const playlistContainer3 = document.querySelector('#playlist-container3'); //keep this line
			
		if (columnCounter === 0){
	playlistContainer1.appendChild(playlist[i]);}
		if (columnCounter === 1){
	playlistContainer2.appendChild(playlist[i]);} 
	/*	if (columnCounter === 2){
	playlistContainer3.appendChild(playlist[i]);}  keep these two lines */
	
		i++;
		}
	columnCounter++;

	}


// Update song details
function loadSong(song) {
  title.innerText = song;
  audio.stop;
  audio.src = `/music/${song}.mp3`;
  //cover.src = `/images/Strings.jpg`;
  	//console.log(audio.src)
}

// Play song 
function playSong() {
  musicContainer.classList.add('play');
  playBtn.querySelector('i.fas').classList.remove('fa-play');
  playBtn.querySelector('i.fas').classList.add('fa-pause');
  removePlayerHeading();
  activeSongFont();
  audio.play();
  
}

// Pause song
function pauseSong() {
  musicContainer.classList.remove('play');
  playBtn.querySelector('i.fas').classList.add('fa-play');
  playBtn.querySelector('i.fas').classList.remove('fa-pause');
  audio.pause();
  restorePlayerHeading();
}
//remove "Music Player" heading
function removePlayerHeading(){
	const header = document.querySelector('.player-heading');
	header.style.color = 'transparent';
}
//replace "Music Player" heading
function restorePlayerHeading(){
	const header = document.querySelector('.player-heading');
	header.style.color = lightTextColor;
}
// Previous song
function prevSong() {
  songIndex--;
//console.log (songIndex);
  if (songIndex < 0) {
    songIndex = playlist.length - 1;
  }
//console.log (songlist[songIndex].title);

  loadSong(songlist[songIndex].title);

  playSong();
}
//Clicked Song from playlist
function chosenSong(index){
	
	songIndex = index;
	loadSong(songlist[songIndex].title);
	pauseSong();
	playSong();
	//console.log(yay!);
}

// Next song
function nextSong() {
  songIndex++;
//console.log(songIndex)
  if (songIndex > playlist.length - 1) {
    songIndex = 0;
  }

  loadSong(songlist[songIndex].title);

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
console.log(duration);
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




// Initially load song details into DOM
loadSong(songlist[songIndex].title);


// Event listeners
playBtn.addEventListener('click', () => {
  const isPlaying = musicContainer.classList.contains('play');

  if (isPlaying) {
    pauseSong();
	
  } else {
    playSong();

  }
});

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

const labels = document.querySelectorAll('.lbl');

//audio.addEventListener('timeupdate', getDuration)


//todos.forEach(function(todo){
// console.log(todo.text);
//});


labels[0].addEventListener('click', () => { chosenSong(0)});
labels[1].addEventListener('click', () => { chosenSong(1)});
labels[2].addEventListener('click', () => { chosenSong(2)});
labels[3].addEventListener('click', () => { chosenSong(3)});
labels[4].addEventListener('click', () => { chosenSong(4)});
labels[5].addEventListener('click', () => { chosenSong(5)});
labels[6].addEventListener('click', () => { chosenSong(6)});
labels[7].addEventListener('click', () => { chosenSong(7)});
labels[8].addEventListener('click', () => { chosenSong(8)});
labels[9].addEventListener('click', () => { chosenSong(9)});
labels[10].addEventListener('click', () => { chosenSong(10)});
labels[11].addEventListener('click', () => { chosenSong(11)});
labels[12].addEventListener('click', () => { chosenSong(12)});
labels[13].addEventListener('click', () => { chosenSong(13)});
labels[14].addEventListener('click', () => { chosenSong(14)});
labels[15].addEventListener('click', () => { chosenSong(15)});
/*labels[16].addEventListener('click', () => { chosenSong(16)});
labels[17].addEventListener('click', () => { chosenSong(17)});
labels[18].addEventListener('click', () => { chosenSong(18)});
labels[19].addEventListener('click', () => { chosenSong(19)});
labels[20].addEventListener('click', () => { chosenSong(20)});
labels[21].addEventListener('click', () => { chosenSong(21)});
labels[22].addEventListener('click', () => { chosenSong(22)});
labels[23].addEventListener('click', () => { chosenSong(23)});
labels[24].addEventListener('click', () => { chosenSong(24)});*/

//playlistContainer.children[0].addEventListener('click', () => { 		chosenSong(0)});
//playlistContainer[1].children.addEventListener('click', () => { chosenSong(1)});
//labels.addEventListener('click', () => { chosenSong(2)});


	
