import jsonp from '@/js/jsonp'
export function banner () {
  let url = 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg'
  let params = {
    platform: 'h5',
    uin: 0,
    needNewCode: 1,
    g_tk: 1928093487,
    inCharset: 'utf-8',
    outCharset: 'utf-8',
    notice: 0,
    format: 'jsonp'
  }
  return jsonp(url, params, 'jsonpCallback')
}

