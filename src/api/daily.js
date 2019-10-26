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
    url: '/api/daily/hosting',
    method: 'get',
    params: query
  })
}

export function fetchFlightInfoByTypeAndId(dailyType, dailyId) {
  return request({
    url: `/api/daily/${dailyType}/${dailyId}/flights`,
    method: 'get'
  })
}
