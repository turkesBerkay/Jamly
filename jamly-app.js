//---------------about-app-------------
const aboutBtn = document.getElementById("aboutBtn");
aboutBtn.addEventListener("click", () => {
    document.querySelector(".about-app").classList.toggle("active");
});

const about = document.getElementById("about");
about.addEventListener("click", () => {
    document.querySelector(".about-app-active").classList.add("active");
    document.querySelector(".about-app").classList.remove("active");

});

const aboutClose = document.getElementById("aboutClose");
aboutClose.addEventListener("click", () => {
    document.querySelector(".about-app-active").classList.remove("active");
});

//-------library to playlist -----------------

const libraryItem = document.getElementById("libraryItem");
libraryItem.addEventListener("click", () => {
    document.querySelector(".landing-page").classList.remove("active");
    document.querySelector(".playlist").classList.add("active");
});

const prevPage = document.getElementById("prevPage");
prevPage.addEventListener("click", () => {
    document.querySelector(".landing-page").classList.add("active");
    document.querySelector(".playlist").classList.remove("active");
});



//----------------mini player avtivation--------------
const getMiniPlayer = document.getElementById("getMiniPlayer");
getMiniPlayer.addEventListener("click", () => {
    document.querySelector(".music-list").classList.add("full-basis");
    document.querySelector(".music-player").style.display = "none";
    document.querySelector(".mini-player").classList.add("active");
    document.querySelector(".mini-player").classList.add("mini-player-active-animation");
    document.querySelector(".music-list").classList.add("margin");


});

const miniPlayerClose = document.getElementById("miniPlayerClose");
miniPlayerClose.addEventListener("click", () => {
    document.querySelector(".music-list").classList.remove("full-basis");
    document.querySelector(".music-player").style.display = "block";
    document.querySelector(".mini-player").classList.remove("active");
    document.querySelector(".music-player").classList.add("music-player-active-animation");
    document.querySelector(".music-list").classList.remove("margin");

});

const miniImageBtn = document.getElementById("miniImageBtn");   
miniImageBtn.addEventListener("click", () => {
    document.querySelector(".music-list").classList.remove("full-basis");
    document.querySelector(".music-player").style.display = "block";
    document.querySelector(".mini-player").classList.remove("active");
    document.querySelector(".music-player").classList.add("music-player-active-animation");
    document.querySelector(".music-list").classList.remove("margin");
});


//----------music-app------------------------
const app = document.querySelector(".app");
const image = document.querySelector(".playingImage");
const title = document.querySelector(".title");
const singer = document.querySelector(".singer");
const prev = document.querySelector(".prev");
const play = document.querySelector(".play");
const next = document.querySelector(".next");
const repeat = document.querySelector(".replay");
const duration = document.querySelector(".duration");
const progressBar = document.querySelector(".progress-bar");
const volumeBar = document.querySelector(".volume-bar");
const volume = document.querySelector(".volume");
const audio = document.querySelector("#audio");
const currentTime = document.querySelector(".current-time");
const playlistPlayBtn = document.getElementById("playlistPlayBtn");

const player = new MusicPlayer(musicList);

window.addEventListener("load", () => {
    let music = player.getMusic();
    displayMusic(music);
    displayMusicList(player.musicList);
});


function displayMusic(music) {
    title.innerText = music.title;
    singer.innerText = music.singer;
    image.src = "img/" + music.img;
    audio.src = "mp3/" + music.file;

    miniTitle.innerText = music.title;
    miniSinger.innerText = music.singer;
    miniImage.src = "img/" + music.img;
};


playlistPlayBtn.addEventListener("click", () => {
    const isMusicPlay = app.classList.contains("playing");
    isMusicPlay ? pauseMusic() : playMusic();
});


play.addEventListener("click", () => {
    const isMusicPlay = app.classList.contains("playing");
    isMusicPlay ? pauseMusic() : playMusic();
});

prev.addEventListener("click", () => {
    prevMusic();
});

next.addEventListener("click", () => {
    nextMusic();
});

repeat.addEventListener("click", () => {
    repeatMusic();
});

const prevMusic = () => {
    player.previous();
    let music = player.getMusic();
    displayMusic(music);
    playMusic();
};

const nextMusic = () => {
    player.next();
    let music = player.getMusic();
    displayMusic(music);
    playMusic();
};

const repeatMusic = () => {
    audio.load();
    let music = player.getMusic();
    displayMusic(music);
    playMusic();
}

const pauseMusic = () => {
    app.classList.remove("playing");
    document.getElementById("playPauseMp").classList = "fa-solid fa-play";
    document.getElementById("miniPlayPauseBtn").classList = "fa-solid fa-play";
    document.getElementById("playPause").classList = "fa-solid fa-play";

    audio.pause();
}
const playMusic = () => {
    app.classList.add("playing");
    document.getElementById("playPauseMp").classList = "fa-solid fa-pause";
    document.getElementById("playPause").classList = "fa-solid fa-pause";
    document.getElementById("miniPlayPauseBtn").classList = "fa-solid fa-pause";
    audio.play();
}

const calculateTime = (totalSecond) => {
    const minute = Math.floor(totalSecond / 60);
    const second = Math.floor(totalSecond % 60);
    const updatedSecond = second < 10 ? `0${second}`: `${second}`;
    const result = `${minute}:${updatedSecond}`;
    return result;
}

audio.addEventListener("loadedmetadata", () => {
    duration.textContent = calculateTime(audio.duration);
    progressBar.max = Math.floor(audio.duration);
});

audio.addEventListener("timeupdate", () => {
    progressBar.value = Math.floor(audio.currentTime);
    currentTime.textContent = calculateTime(progressBar.value);
});

progressBar.addEventListener("input", () => {
    currentTime.textContent = calculateTime(progressBar.value);
    audio.currentTime = progressBar.value;
});

let volumeStatue = "loud";
volume.addEventListener("click", () => {
    if (volumeStatue === "loud") {
        audio.muted = true;
        volumeStatue = "muted";
        volumeBar.value = 0;
    } else {
        audio.muted = false;
        volumeStatue = "loud";
        volumeBar.value = 100;
    }
});

volumeBar.addEventListener("input", (e) => {
    const value = e.target.value;
    audio.volume = value / 100;

    if (value == 0) {
        audio.muted = true;
        volumeStatue = "muted";
    } else {
        audio.muted = false;
        volumeStatue = "loud";
    }
});

//-------------mini player----------------

const miniImage = document.querySelector(".miniPlayingImage");
const miniTitle = document.querySelector(".mini-player-track");
const miniSinger = document.querySelector(".mini-player-singer");
const miniPrev = document.querySelector(".miniPrev");
const miniPlay = document.querySelector(".mini-player-play-pause");
const miniNext = document.querySelector(".miniNext");
const miniRepeat = document.querySelector(".mini-player-replay");
const miniDuration = document.querySelector(".mini-player-duration");
const miniProgressBar = document.querySelector(".miniProgress-bar");
const miniVolumeBar = document.querySelector(".volume-bar-mini");
const miniVolume = document.querySelector(".miniVolume");
const miniCurrentTime = document.querySelector(".mini-current-time");
const mainPlaylist = document.querySelector(".main-playlist-songs");


miniPlay.addEventListener("click", () => {
    const isMusicPlay = app.classList.contains("playing");
    isMusicPlay ? pauseMusic() : playMusic();
});

miniPrev.addEventListener("click", () => {
    prevMusic();
});

miniNext.addEventListener("click", () => {
    nextMusic();
});

miniRepeat.addEventListener("click", () => {
    repeatMusic();
});


audio.addEventListener("loadedmetadata", () => {
    miniDuration.textContent = calculateTime(audio.duration);
    miniProgressBar.max = Math.floor(audio.duration);
});

audio.addEventListener("timeupdate", () => {
    miniProgressBar.value = Math.floor(audio.currentTime);
    miniCurrentTime.textContent = calculateTime(miniProgressBar.value);
});

miniProgressBar.addEventListener("input", () => {
    miniCurrentTime.textContent = calculateTime(miniProgressBar.value);
    audio.currentTime = miniProgressBar.value;
});

miniVolume.addEventListener("click", () => {
    if (volumeStatue === "loud") {
        audio.muted = true;
        volumeStatue = "muted";
        miniVolumeBar.value = 0;
    } else {
        audio.muted = false;
        volumeStatue = "loud";
        miniVolumeBar.value = 100;
    }
});

miniVolumeBar.addEventListener("input", (e) => {
    const value = e.target.value;
    audio.volume = value / 100;

    if (value == 0) {
        audio.muted = true;
        volumeStatue = "muted";
    } else {
        audio.muted = false;
        volumeStatue = "loud";
    }
});

audio.addEventListener("ended", () => {
    nextMusic();
});



const displayMusicList = (list) => {
    for(let i=0; i< list.length; i++) {
        let liTag = `
            <div li-index='${i}' onclick="selectedMusic(this)" class="main-playlist-song">
                <div class="main-playlist-song-left">
                    <div class="main-playlist-song-number">
                        ${list[i].number}
                    </div>
                    <div class="main-playlist-song-content">
                        <div class="main-playlist-song-img">
                            <img src="img/${list[i].img}" alt="">
                        </div>

                        <div class="main-playlist-song-name">
                            <div class="main-playlist-song-artist">
                                ${list[i].singer}
                            </div>
                            <div class="main-playlist-song-title">
                                ${list[i].title}
                            </div>
                        </div>
                    </div>
                </div>
                <div class="main-playlist-song-duration">
                    ${list[i].duration}
                </div>
            </div>
        `;

        mainPlaylist.insertAdjacentHTML("beforeend", liTag);
    }
}

const selectedMusic = (list) => {
    const index = list.getAttribute("li-index");
    player.index = index; 
    displayMusic(player.getMusic());
    playMusic();
}
