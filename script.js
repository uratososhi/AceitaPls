const audio = document.getElementById("Background-music");
const muteButton = document.getElementById("muteButton");
const yesButton = document.getElementById("yesButton");
const noButton = document.getElementById("noButton");

audio.play();
muteButton.addEventListener("click", () => {
  if (audio.muted) {
    audio.muted = false;
    muteButton.src = "speaker-on.png";
  } else {
    audio.muted = true;
    muteButton.src = "speaker-off.png";
  }
});

yesButton.addEventListener("click", () => {
  window.location.href = "yesPage.html";
});

noButton.addEventListener("click", () => {
  window.location.href = "noPage.html";
});
