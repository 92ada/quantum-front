import request from '../utils/request'

export function fetchList(query) {
  return request({
    url: '/api/people',
    method: 'get',
    params: query
  })
}

export function apiDelete(id) {
  return request({
    url: `/api/people/${id}`,
    method: 'DELETE'
  })
}

/**
 * Student Achievements
 */

export function fetchStudentAchievementsByPeople(peopleId) {
  return request({
    url: `/api/people/${peopleId}/achievement`,
    method: 'get'
  })
}

export function createStudentAchievement(peopleId, data) {
  return request({
    url: `/api/people/${peopleId}/achievement`,
    method: 'post',
    data
  })
}

export function updateStudentAchievement(peopleId, recordId, data) {
  return request({
    url: `/api/people/${peopleId}/achievement/${recordId}`,
    method: 'put',
    data
  })
}

export function deleteStudentAchievement(peopleId, recordId) {
  return request({
    url: `/api/people/${peopleId}/achievement/${recordId}`,
    method: 'delete'
  })
}
