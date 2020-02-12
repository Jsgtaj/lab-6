function playSound(e) {
  let audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  let key = document.querySelector(`div[data-keycode="${e.keyCode}"]`);
  key.classList.add("press");
  audio.currentTme = 0;
  audio.play();
}
const keyArr = [...document.querySelectorAll(".sound")];
keyArr.forEach(k => k.addEventListener("transitionend", () => k.classList.remove("press")));
window.addEventListener("keydown", playSound);
