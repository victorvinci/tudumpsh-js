window.addEventListener('keydown', function(event) {
  const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);

  if (!audio) {
    return;
  } else {
    audio.currentTime = 0; // currentTime is used in the <audio> HTML tag to reset the audio whenever key is pressed.
    audio.play();
  }

  console.log(audio);
});
