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
    url: `http://dl.stream.qqmusic.qq.com/C400${item.songmid}.m4a?guid=7397647150&vkey=F554FB87AF71F73D95EBEF9ADA2CEB9569777318B860C975AD8AA2BFF2942C0321D5108586DE6624643E6656EC63FE24F22EAAC70CA45F03&uin=0&fromtag=38`
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