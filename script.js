let song = document.getElementById("song");
let crtl = document.getElementById("ctrl");
let progress_bar = document.getElementById("progress");


song.onloadedmetadata = function () {
    progress_bar.max = song.duration;
    progress_bar.value = song.currentTime;
}
setInterval(() => {
    progress_bar.value = song.currentTime;
}, 1000);

function playPause() {
    if (ctrl.classList.contains("fa-pause")) {
        song.pause();
        ctrl.classList.remove("fa-pause");
        ctrl.classList.add("fa-play");
    }
    else {
        song.play();
        ctrl.classList.add("fa-pause");
        ctrl.classList.remove("fa-play");
    }

}

progress_bar.onchange = function () {
    song.play();
    ctrl.classList.add("fa-pause");
    ctrl.classList.remove("fa-play");

    song.currentTime = progress_bar.value;

}


