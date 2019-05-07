function playSound(keyPressed) {
  const audio = document.querySelector(`audio[data-key="${keyPressed.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${keyPressed.keyCode}"]`);

  if (!audio) {
    return;

  } else if (audio.loop && audio.paused){ // check if audio has loop option and is not playing to start it
    audio.play();
    key.classList.add('playing-red'); // add a red feedback for looping sounds that are playing

  } else if (audio.loop && !audio.paused){ // check if the audio is playing to pause it
    audio.pause();
    audio.currentTime = 0;
    key.classList.remove('playing-red');

  } else {
    audio.currentTime = 0; // currentTime is used in the <audio> HTML tag to reset the audio whenever key is pressed.
    audio.play();
    key.classList.add('playing');
  }
}

 function removeTransition(keyPressed){
  if (keyPressed.propertyName !== 'transform') {
    return;
  } else {
    this.classList.remove('playing');;
  }
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

window.addEventListener('keydown', playSound);