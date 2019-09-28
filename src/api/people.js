import request from '../utils/request'

export function fetchList(query) {
  return request({
    url: '/api/people/list',
    method: 'get',
    params: query
  })
}

export function fetchPeopleInfo(id) {
  return request({
    url: '/api/people/detail',
    method: 'get',
    params: { id }
  })
}
