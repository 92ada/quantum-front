import request from '../utils/request'

export function fetchList(query) {
  return request({
    url: '/api/labs',
    method: 'get',
    params: query
  })
}

export function deleteLab(labId) {
  return request({
    url: `/api/labs/${labId}`,
    method: 'delete'
  })
}
