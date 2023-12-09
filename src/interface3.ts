interface Song {
  songName: string;
  singerName: string;
  printSongInfo(songName: string, singerName: string): string;
}
const song1: Song = {
  songName: "I Remember you",
  singerName: "Skip Row",
  printSongInfo: (songName, singerName) => {
    return `SongName: ${songName}, SingerName:${singerName}`;
  },
};

console.log(`${song1.printSongInfo("I Remember you", "Skip Row")}`);
