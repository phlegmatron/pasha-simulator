var numberOfTracks = 6;
var isPlaying = false;
var playButton = document.querySelector('.play');
var playing = document.querySelectorAll('.playing')

function getRandomNumber(max) {
  return Math.floor(Math.random() * (max - 1)) + 1;
}

function togglePlaybackAnimation() {
  playButton.classList.toggle('display-none')
  playing.forEach(element => {
    console.log('foreaching')
    element.classList.toggle('display-none')
  })
}

function playAudio() {
  if (!isPlaying) {
    togglePlaybackAnimation()
    var trackNumber = getRandomNumber(numberOfTracks);
    var audio = new Audio(`./audio/0${trackNumber}.wav`);
    audio.play();
    isPlaying = true;
  }
  audio.onended = () => {
    togglePlaybackAnimation();
    isPlaying = false;
  }
}