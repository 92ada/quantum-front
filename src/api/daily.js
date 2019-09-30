import request from '../utils/request'

export function fetchTravels(query) {
  return request({
    url: '/api/daily/travel',
    method: 'get',
    params: query
  })
}

export function fetchVisits(query) {
  return request({
    url: '/api/daily/visit',
    method: 'get',
    params: query
  })
}

export function fetchReports(query) {
  return request({
    url: '/api/daily/report',
    method: 'get',
    params: query
  })
}

export function fetchHostings(query) {
  return request({
    url: '/api/daily/reward',
    method: 'get',
    params: query
  })
}

export function fetchAllResearchList(query) {
  return request({
    url: '/api/research',
    method: 'get',
    params: query
  })
}

export function fetchProjectFundsByProject(projectId) {
  return request({
    url: `/api/research/project/${projectId}/funds`,
    method: 'get'
  })
}

