import request from '../utils/request'

export function fetchPurchasings(query) {
  return request({
    url: '/api/equipment/purchasing',
    method: 'get',
    params: query
  })
}

export function fetchStocks(query) {
  return request({
    url: '/api/equipment/stock',
    method: 'get',
    params: query
  })
}

export function deleteEquipment(equipmentType, equipmentId) {
  return request({
    url: `/api/equipment/${equipmentType}/${equipmentId}`,
    method: 'delete'
  })
}
