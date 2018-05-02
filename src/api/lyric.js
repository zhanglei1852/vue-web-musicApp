import axios from 'axios'

const commonParams = {
  g_tk: 1928093487,
  inCharset: 'utf-8',
  outCharset: 'utf-8',
  notice: 0,
  format: 'jsonp',
}

export function getLyric (songid) {
	const url = '/api/getLyric'
	console.log(songid)
	const data = Object.assign({}, commonParams, {
		songmid: songid,
	    platform: 'yqq',
	    hostUin: 0,
	    needNewCode: 0,
	    categoryId: 10000000,
	    pcachetime: +new Date(),
	    format: 'json'
	})

	return axios.get(url, {
		params: data
	}).then((res) => {
		return Promise.resolve(res.data)
	})
}