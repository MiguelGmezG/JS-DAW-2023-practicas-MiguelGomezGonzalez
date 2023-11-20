var audio = document.getElementById("myAudio");
var selectCanciones = document.getElementById("canciones");
var playPauseBtn = document.getElementById("reproducirPausarBtn");
var retrocederBtn = document.getElementById("retrocederBtn");
var avanzarBtn = document.getElementById("avanzarBtn");
var progressBar = document.getElementById("progressBar");

function reproducirPausar() {
  if (audio.paused) {
    audio.play();
    playPauseBtn.className = "fas fa-pause playing";
  } else {
    audio.pause();
    playPauseBtn.className = "fas fa-play";
  }
}

function retroceder() {
  audio.currentTime -= 5;
}

function avanzar() {
  audio.currentTime += 5;
}

function actualizarBarraProgreso() {
  var progreso = (audio.currentTime / audio.duration) * 100;
  progressBar.value = progreso;
}

function actualizarTiempoDeAudio() {
  var nuevoTiempo = (progressBar.value * audio.duration) / 100;
  audio.currentTime = nuevoTiempo;
}

selectCanciones.addEventListener("change", function () {
  audio.src = selectCanciones.value;
  audio.play();
});

playPauseBtn.addEventListener("click", reproducirPausar);
retrocederBtn.addEventListener("click", retroceder);
avanzarBtn.addEventListener("click", avanzar);

progressBar.addEventListener("input", actualizarTiempoDeAudio);
audio.addEventListener("timeupdate", actualizarBarraProgreso);
