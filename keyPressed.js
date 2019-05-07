window.addEventListener('keydown', function (event) {
  const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
  
  if(!audio) {
    return
  } else {
    audio.play();
  };

  console.log(audio);
}); 