function Sound(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.play = function() {
        this.sound.play();
    }
    this.stop = function(){
        this.sound.pause();
    }
}

myMusic = new Sound("music.mp3");
let playPromise = myMusic.play();
if (playPromise !== undefined) {
    playPromise.then(_ => {
        // Automatic playback started!
        // Show playing UI.
    })
        .catch(error => {
            // Auto-play was prevented
            // Show paused UI.
        });
}

