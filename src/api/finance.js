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

export function getSocialInsurance(id) {
  return request({
    url: `api/finance/social_insurances/${id}`,
    method: 'get'
  })
}

export function updateSocialInsurance(id, data) {
  return request({
    url: `api/finance/social_insurances/${id}`,
    method: 'put',
    data: JSON.stringify(data)
  })
}

export function createSocialInsurance(data) {
  return request({
    url: `api/finance/social_insurances`,
    method: 'post',
    data: JSON.stringify(data)
  })
}

export function deleteSocialInsurance(id) {
  return request({
    url: `api/finance/social_insurances/${id}`,
    method: 'delete'
  })
}

export function deleteFinance(financeType, financeId) {
  if (financeType === 'expenditure') {
    financeType = 'exps'
  }
  return request({
    url: `/api/finance/${financeType}/${financeId}`,
    method: 'delete'
  })
}
