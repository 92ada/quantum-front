import request from '../utils/request'

export function fetchList(query) {
  return request({
    url: '/api/research/list',
    method: 'get',
    params: query
  })
}
