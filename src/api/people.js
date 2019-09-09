import request from '../utils/request'

export function fetchList(query) {
  return request({
    url: '/people/list',
    method: 'get',
    params: query
  })
}

export function fetchPeopleInfo(id) {
  return request({
    url: '/people/detail',
    method: 'get',
    params: { id }
  })
}

export function fetchPv(pv) {
  return request({
    url: '/article/pv',
    method: 'get',
    params: { pv }
  })
}

export function createArticle(data) {
  return request({
    url: '/article/create',
    method: 'post',
    data
  })
}

export function updateArticle(data) {
  return request({
    url: '/article/update',
    method: 'post',
    data
  })
}
