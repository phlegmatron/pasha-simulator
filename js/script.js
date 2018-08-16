var filesNumber = 6

var trackNumber = getRandomNumber(filesNumber);
var isPlaying = false;
audio.setAttribute('src', `./audio/0${trackNumber}.wav`);

body.appendChild(audio);

function getRandomNumber(max) {
  return Math.floor(Math.random() * (max - 1)) + 1;
}

function playAudio() {
  if (!isPlaying) {
    audio.play();
    isPlaying = true;
  }
  audio.onended = () => {
    isPlaying = false;
    trackNumber = getRandomNumber(filesNumber);
    audio.setAttribute('src', `./audio/0${trackNumber}.wav`);
    audio.load()
  }
}