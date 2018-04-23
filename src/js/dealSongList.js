export function dealSongList (songList) {
  let newSongList = []
  for (let i = 0; i < songList.length; i++) {
    let musicData = songList[i].musicData
    let newSong = song(musicData)
    newSongList.push(newSong)
  }
  return newSongList 
}

function song (item) {
  return {
    id: item.songid,
    mid: item.songmid,
    singer: dealSinger(item.singer),
    name: item.songname,
    album: item.albumname,
    duration: item.interval,
    image: `https://y.gtimg.cn/music/photo_new/T002R300x300M000${item.albummid}.jpg?max_age=2592000`,
    url: `http://ws.stream.qqmusic.qq.com/${item.songid}.m4a?fromtag=46`
  }
}

function dealSinger (singerList) {
  let arr = []
  if (!singerList) {
    return ''
  }
  singerList.forEach((singer) => {
    arr.push(singer.name)
  })
  return arr.join('/')
}