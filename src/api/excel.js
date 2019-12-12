import request from '../utils/request'

/** Old Version
 *
export function downloadByUrlAndQuery(url, query) {
  const queryStr = serialize(query)
  downloadByUrl(url + '?' + queryStr)
}

export function downloadByUrl(url) {
  const fullUrl = process.env.VUE_APP_BASE_API + url

  const link = document.createElement('a')
  link.style.display = 'none'
  link.href = fullUrl
  link.target = 'blank'
  document.body.appendChild(link)
  link.click()
}

function serialize(obj) {
  const str = Object.keys(obj).reduce(function(a, k) {
    a.push(k + '=' + encodeURIComponent(obj[k]))
    return a
  }, []).join('&')
  return str
}

 */

export function downloadByUrl(url) {
  downloadByUrlAndQuery(url)
}

export const downloadByUrlAndQuery = async(url, query) => {
  const response = await request({
    url: url,
    method: 'get',
    responseType: 'blob',
    query: query
  })
  const fileName = url.split('/').reverse()[0]
  const blob = new Blob([response])
  const href = window.URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = href
  a.download = [fileName] // 重要，后缀不能错
  a.click()
  window.URL.revokeObjectURL(href)
}
