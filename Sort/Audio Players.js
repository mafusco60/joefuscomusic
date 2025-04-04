// JavaScript Document
// variable to store HTML5 audio element
<script type="text/javascript">
<!--

//-->

var music = document.getElementById('audio_player');
 
function playAudio() {
  if (music.paused) {
    music.play();
    pButton.className = "";
    pButton.className = "pause";
  } else {
    music.pause();
    pButton.className = "";
    pButton.className = "play";
  }
}
</script>