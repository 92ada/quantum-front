import request from '../utils/request'

export function fetchSocialInsurances(query) {
  return request({
    url: '/api/finance/social_insurances',
    method: 'get',
    params: query
  })
}

export function fetchSocialFunds(query) {
  return request({
    url: '/api/finance/social_funds',
    method: 'get',
    params: query
  })
}

export function fetchExpenditure(query) {
  return request({
    url: '/api/finance/exps',
    method: 'get',
    params: query
  })
}
