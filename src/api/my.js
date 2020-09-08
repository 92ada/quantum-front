import request from '../utils/request'

export function getMyInfo() {
  return request({
    url: `/api/my/info`,
    method: 'get'
  })
}

export function fetchPatentList() {
  return request({
    url: '/api/my/research/patent',
    method: 'get'
  })
}

export function fetchPaperList() {
  return request({
    url: '/api/my/research/paper',
    method: 'get'
  })
}

export function fetchProjectList() {
  return request({
    url: '/api/my/research/project',
    method: 'get'
  })
}

export function fetchRewardList() {
  return request({
    url: '/api/my/research/reward',
    method: 'get'
  })
}

export function fetchPurchasings() {
  return request({
    url: '/api/my/equipment/purchasing',
    method: 'get'
  })
}

export function fetchStocks() {
  return request({
    url: '/api/my/equipment/stock',
    method: 'get'
  })
}
