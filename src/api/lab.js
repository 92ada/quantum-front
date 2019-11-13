import request from '../utils/request'

export function fetchList(query) {
  return request({
    url: '/api/lab',
    method: 'get',
    params: query
  })
}
