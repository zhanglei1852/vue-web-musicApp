export default function dealSingerList (res) {
  if (res.code === 0) {
    let singerList = res.data.list
    let codeArray = []
    let hot = [{
      Findex: "hot",
      list: []
    }]
    singerList.forEach((el, index) => {
      if (index < 10) {
          let item = {}
          item.Fsinger_name = el.Fsinger_name
          item.Fsinger_mid = el.Fsinger_mid
          item.avatar = `https://y.gtimg.cn/music/photo_new/T001R300x300M000${el.Fsinger_mid}.jpg?max_age=2592000`
          hot[0].list.push(item)
      }
    })
    singerList.forEach((el, index) => {
      let item = {}
      item.Findex = el.Findex
      item.Fsinger_name = el.Fsinger_name
      item.Fsinger_mid = el.Fsinger_mid
      item.avatar = `https://y.gtimg.cn/music/photo_new/T001R300x300M000${el.Fsinger_mid}.jpg?max_age=2592000`
      codeArray.push(item)
    })
    codeArray = codeArray.sort((a, b) => {
      return a.Findex.charCodeAt() - b.Findex.charCodeAt()
    })
    let newCodeArray = []
    let item = {
      Findex: '',
      list: []
    }
    for (let i = 0; i < codeArray.length; i++) {
      if(!item.Findex || item.Findex === codeArray[i].Findex) {
        item.Findex = codeArray[i].Findex
        let obj = {}
        obj.Fsinger_name = codeArray[i].Fsinger_name
        obj.Fsinger_mid = codeArray[i].Fsinger_mid
        obj.avatar = codeArray[i].avatar
        item.list.push(obj)
      } else {
        newCodeArray.push(item)
        item = {
          Findex: '',
          list: []
        }
        let obj = {}
        obj.Fsinger_name = codeArray[i].Fsinger_name
        obj.Fsinger_mid = codeArray[i].Fsinger_mid
         obj.avatar = codeArray[i].avatar
        item.list.push(obj)
      }
      i === codeArray.length - 1 ? newCodeArray.push(item): ''
    } 
    return hot.concat(newCodeArray)
  } else {
    return []
  }
}