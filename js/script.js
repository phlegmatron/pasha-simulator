var numberOfTracks = 6;
var isPlaying = false;

function getRandomNumber(max) {
  return Math.floor(Math.random() * (max - 1)) + 1;
}

function playAudio() {
  if (!isPlaying) {
    var trackNumber = getRandomNumber(numberOfTracks);
    var audio = new Audio(`./audio/0${trackNumber}.wav`);
    audio.play();
    isPlaying = true;
  }
  audio.onended = () => {
    isPlaying = false;
  }
}