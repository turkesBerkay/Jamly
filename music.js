class Music {
    constructor(title, singer, img, file, number, duration) {
        this.title = title;
        this.singer = singer;
        this.img = img;
        this.file = file;
        this.number = number;
        this.duration = duration;
    }
}


const musicList = [
    new Music("Leave Me", "Zubi", "leave-me.jpg", "leave-me.mp3", "1", "3:16"),
    new Music("Invicible", "Pop Smoke", "pop-smoke-in.jpg", "pop-smoke-in.mp3", "2", "2:07"),
    new Music("Bloody Samaritan", "Ayra Star ft. Ms. Kelly", "samaritan.jpg", "samaritan.mp3", "3", "3:09"),
    new Music("Hanging", "Ane Brun", "hanging.jpg", "Hanging.mp3", "4", "5:36"),
    new Music("Rush", "Ayra Starr", "rush.jpg", "Rush.mp3", "5", "3.05"),
    new Music("After The Great Storm", "Ane Brun", "after-the-great-storm.jpg", "After-The-Great-Storm.mp3", "6", "5.12")
]