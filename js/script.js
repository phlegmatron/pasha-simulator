var numberOfTracks = 11;
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
    if (trackNumber < 10) trackNumber = '0' + trackNumber
    var audio = new Audio(`./audio/${trackNumber}.mp3`);
    audio.play();
    isPlaying = true;
  }
  audio.onended = () => {
    togglePlaybackAnimation();
    isPlaying = false;
  }
}