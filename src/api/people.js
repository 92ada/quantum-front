import request from '../utils/request'

export function fetchList(query) {
  return request({
    url: '/api/people',
    method: 'get',
    params: query
  })
}
