import originJsonp from 'jsonp'
/*
  params type object
  name jsonpcallback name
*/
export default function jsonp (url,params, name) {
  url = url + '?'
  for (let key in params) {
    url += `${key}=${window.encodeURIComponent(params[key])}&` 
  }
  url = url.slice(0, url.length-1)
  return new Promise((resolve, reject) => {
    originJsonp(url, { param: name }, (err, data) => {
      if (!err) {
        resolve(data)
      } else {
        reject(err)
      }
    })
  })
}