export function dealSongList (songList) {
  let newSongList = []
  for (let i = 0; i < songList.length; i++) {
    let musicData = songList[i].musicData  ||  songList[i].data || songList[i]
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
    url: `http://dl.stream.qqmusic.qq.com/C400${item.songmid}.m4a?guid=7397647150&vkey=CCD5C5479B11AB8E0F8CE59ED8AD69C81D878E910BBB8C1652548BFF7223A566FB366D987D0DD7FFAB0CCD004950C7A9ECD791B0FD1C4E8A&uin=0&fromtag=38`
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