import request from '../utils/request'

export function fetchPatentList(query) {
  return request({
    url: '/api/research/patent',
    method: 'get',
    params: query
  })
}

export function fetchPaperList(query) {
  return request({
    url: '/api/research/paper',
    method: 'get',
    params: query
  })
}

export function fetchProjectList(query) {
  return request({
    url: '/api/research/project',
    method: 'get',
    params: query
  })
}

export function fetchRewardList(query) {
  return request({
    url: '/api/research/reward',
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

export function fetchProjectMemberByProject(projectId) {
  return request({
    url: `/api/research/project/${projectId}/members`,
    method: 'get'
  })
}

