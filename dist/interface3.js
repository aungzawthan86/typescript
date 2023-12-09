"use strict";
const song1 = {
    songName: "I Remember you",
    singerName: "Skip Row",
    printSongInfo: (songName, singerName) => {
        return `SongName: ${songName}, SingerName:${singerName}`;
    },
};
console.log(`${song1.printSongInfo("I Remember you", "Skip Row")}`);
