window.addEventListener('keydown', function(event) {
  const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${event.keyCode}"]`);

  if (!audio) {
    return;
  } else {
    audio.currentTime = 0; // currentTime is used in the <audio> HTML tag to reset the audio whenever key is pressed.
    audio.play();
    key.classList.add('playing');
  }

  const keys = document.querySelectorAll('.key');
  keys.forEach(key => key.addEventListener('transitionend', removeTransition));

  function removeTransition(keyPressed){
    if (keyPressed.propertyName !== 'transform') {
      return;
    } else {
      this.classList.remove('playing');
    }
  }
});
