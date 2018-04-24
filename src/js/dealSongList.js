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
    url: `http://dl.stream.qqmusic.qq.com/C400${item.songmid}.m4a?guid=7397647150&vkey=F0227F5404FCFE8B111F06CD3624A8FCCFFD749DAA3FA66D5ACF97E525CC18693BC679574A42EA6DEB9396662275864E64977C7FDFBA1BC4&uin=0&fromtag=38`
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