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

export function deleteResearch(researchType, researchId) {
  return request({
    url: `/api/research/${researchType}/${researchId}`,
    method: 'delete'
  })
}

/**
 * Project Funds
 */

export function fetchProjectFundsByProject(projectId) {
  return request({
    url: `/api/research/project/${projectId}/fund`,
    method: 'get'
  })
}

export function createProjectFund(projectId, data) {
  return request({
    url: `/api/research/project/${projectId}/fund`,
    method: 'post',
    data
  })
}

export function updateProjectFund(projectId, fundId, data) {
  return request({
    url: `/api/research/project/${projectId}/fund/${fundId}`,
    method: 'put',
    data
  })
}

export function deleteProjectFund(projectId, fundId) {
  return request({
    url: `/api/research/project/${projectId}/fund/${fundId}`,
    method: 'delete'
  })
}

/**
 * Project Members
 */

export function fetchProjectMemberByProject(projectId) {
  return request({
    url: `/api/research/project/${projectId}/member`,
    method: 'get'
  })
}

export function createProjectMember(projectId, data) {
  return request({
    url: `/api/research/project/${projectId}/member`,
    method: 'post',
    data
  })
}

export function updateProjectMember(projectId, memberId, data) {
  return request({
    url: `/api/research/project/${projectId}/member/${memberId}`,
    method: 'put',
    data
  })
}

export function deleteProjectMember(projectId, memberId) {
  return request({
    url: `/api/research/project/${projectId}/member/${memberId}`,
    method: 'delete'
  })
}

/**
 * Project Admins
 */

export function fetchProjectAdminByProject(projectId) {
  return request({
    url: `/api/research/project/${projectId}/admin`,
    method: 'get'
  })
}

export function createProjectAdmin(projectId, peopleId) {
  return request({
    url: `/api/research/project/${projectId}/admin/${peopleId}`,
    method: 'post'
  })
}

export function deleteProjectAdmin(projectId, peopleId) {
  return request({
    url: `/api/research/project/${projectId}/admin/${peopleId}`,
    method: 'delete'
  })
}
