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

class Song {
	constructor (id, title, duration, category){
		this.id = id;
		this.title = title;
		this.duration = duration;
		this.category = category;
	}
	newSong (){
		this.push(this)
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
//Song class songlist info array
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



//enboldens playing song title
function activeSongBold(){
	//console.log (songIndex);
	const labels = document.querySelectorAll('.lbl');
	let i = 0;
	while (i < playlist.length){
	labels[i].style.fontWeight = 'normal';
	labels[i].style.color = 'darkblue';	
		i++;
	}
	labels[songIndex].style.fontWeight = 'bold';
	labels[songIndex].style.color = 'black';	
}

// Keep track of song
let songIndex = 0;
const categoryArray = new Array();

//create an array for a category of songs and categories
function createSortArray (category){
	const sortArray = new Array ();
	let i = 0;
	while ( i < songlist.length){
		if (songlist[i].category === category){
			//console.log(songlist[i]);
	
			sortArray.push(songlist[i]);
			//console.log(sortArray);
		}   
		i++}
	categoryArray.push(category);
//console.log(`length cat array = ${c} `);
//console.log(`cat array: ${categoryArray[i-1]}`);
	return(sortArray);
}
//Display clickable categories to show menu card of song titles 
function createCategoryBtns(){
		
		const container = document.querySelector('.container');
		container.innerHTML = (`<span class='category-btn'></span>`);

	let i = 0;
	while ( i < categoryArray.length){

		const categoryBtn = document.querySelector('.category-btn');
		categoryBtn[i] = document.createElement('button');
		categoryBtn[i].classList.add('category-btn');		
		categoryBtn[i].innerHTML = (`<h5>${categoryArray[i]}</h5>`);
		categoryBtn.appendChild(categoryBtn[i]);
		i++;
	}
}


//categories of songs to go into seperate menu cards
const XMAS = createSortArray ('Acoustic Album - Let\'s Trim The Tree'); 
const DN7 = createSortArray('Acoustic Album - Dream Number 7'); 
const Orch = createSortArray('Orchestral');
console.log();

createCategoryBtns();		
//console.log(categoryArray);				
		



	//console.log(playlist);

//fill columns with titles
//createLbls(orchestralArray);
//createLbls(acousticDN7Array);
//createLbls(acousticXMASArray); keep this line

//fill playlist and create labels with song titles
function createLbls (songsByCategoryArray){
	const categoryBtn = document.querySelectorAll('.category-btn');
		categoryBtn.innerHTML = (`<div class='lbl'></div>`);
	
	const playlist = new Array();
 	console.log('create labels function');
	let i=0;
	console.log(songsByCategoryArray);
	console.log(songsByCategoryArray.length);
	while (i < songsByCategoryArray.length){
		playlist.unshift (songsByCategoryArray[i].title);
		
		console.log(songsByCategoryArray[i]);

		playlist[i] = document.createElement('label');
		
		playlist[i].classList.add('lbl');
	
		//var label = document.querySelectorAll('.lbl');
		playlist[i].innerHTML = (`${songsByCategoryArray[i].title} <br>${songsByCategoryArray[i].duration}`);
		const playlistContainer = document.querySelector('.playlist-container')
		console.log(categoryBtn);
		console.log(`playlist[i] = ${playlist[i]}`);
		categoryBtn[1].appendChild(playlist[i]);

		
	//const playlistContainer1 = document.querySelector('#playlist-container1');
	//const playlistContainer2 = document.querySelector('#playlist-container2');
	//const playlistContainer3 = document.querySelector('#playlist-container3');	
		i++;
		}

	}


// Update song details
function loadSong(song) {
  title.innerText = song;
  audio.stop;
  audio.src = `/music/${song}.mp3`;
  cover.src = `/images/Strings.jpg`;
  //console.log(audio.src)
}

// Play song 
function playSong() {
  musicContainer.classList.add('play');
  playBtn.querySelector('i.fas').classList.remove('fa-play');
  playBtn.querySelector('i.fas').classList.add('fa-pause');
  removeHeading();
  activeSongBold();
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
//remove "Music Player" heading
function removeHeading(){
	const header = document.querySelector('header2');
	header.style.color = 'transparent';
}
//replace "Music Player" heading
function restoreHeading(){
	const header = document.querySelector('header2');
	header.style.color = 'aliceblue';
}
// Previous song
function prevSong() {
  songIndex--;
//console.log (songIndex);
  if (songIndex < 0) {
    songIndex = playlist.length - 1;
  }

  loadSong(songlist[songIndex].title);

  playSong();
}
//Clicked Song from playlist
function chosenSong(index){
	
	songIndex = index;
	console.log (songIndex);
	loadSong(songlist[songIndex].title);
	pauseSong();
	playSong();
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

// Expose menu cards
	
const categoryBtns = document.querySelectorAll('.category-btn');
//categoryBtns[0] is span container for new buttons
console.log(categoryBtns);
categoryBtns[1].addEventListener('click', () => { createLbls(XMAS) });
categoryBtns[2].addEventListener('click', () => { createLbls(DN7) });
categoryBtns[3].addEventListener('click', () => { createLbls(Orch) });

	
//const labels = document.querySelectorAll('.lbl');

/*
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
labels[16].addEventListener('click', () => { chosenSong(16)});
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
