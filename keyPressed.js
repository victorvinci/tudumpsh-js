window.addEventListener('keydown', function (event) {
  const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
  console.log(audio);
}); 