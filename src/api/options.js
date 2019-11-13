import request from '../utils/request'

export function searchOptionsByWord(option_url, word) {
  return request({
    url: option_url,
    method: 'get',
    params: { word: word }
  })
}
