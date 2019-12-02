import request from '../utils/request'

export function getFile(url, query) {
  const name = url.replace('/', '_')
  return request({
    url: '/api/excel' + url + '/' + name + '.xlsx',
    method: 'get',
    query
  })
}

export function saveFile(data, name) {
  if (!data) {
    return
  }
  const url = window.URL.createObjectURL(new Blob([data]))
  const link = document.createElement('a')
  link.style.display = 'none'
  link.href = url
  link.setAttribute('download', `${name}.xlsx`)
  document.body.appendChild(link)
  link.click()
}

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
