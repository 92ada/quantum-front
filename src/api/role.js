import request from '@/utils/request'

export function getRoutes() {
  return request({
    url: '/api/routes',
    method: 'get'
  })
}

export function getRoles(id) {
  return request({
    url: `/api/auths/people/${id}`,
    method: 'get'
  })
}

export function addRole(data) {
  return request({
    url: '/api/auths/people',
    method: 'post',
    data
  })
}

export function updateRole(id, data) {
  return request({
    url: `/api/auths/people/${id}`,
    method: 'put',
    data
  })
}

export function deleteRole(id) {
  return request({
    url: `/api/auths/people/${id}`,
    method: 'delete'
  })
}
