import {
  PurchasingList,
  StockList
} from './random_data/equipment'
import { toObjectList } from './util'

function getListByType(equipmentType) {
  switch (equipmentType) {
    case 'purchasing': return PurchasingList
    case 'stock': return StockList
  }
}
export default [
  {
    url: /\/api\/equipment\/purchasing\/\w+/,
    type: 'get',
    response: config => {
      const id = config.url.split('/').reverse()[0]

      const filteredList = PurchasingList.filter(item => String(item.purchasing_id) === String(id))

      const result = {
        postUrl: `/api/equipment/purchasing/${id}`,
        data: [
          {
            title: {
              'index': `equipment.purchasing`
            },
            columns: toObjectList(filteredList)
          }
        ]
      }

      return {
        code: 20000,
        data: result
      }
    }
  },
  {
    url: /\/api\/equipment\/stock\/\w+/,
    type: 'get',
    response: config => {
      const id = config.url.split('/').reverse()[0]

      const filteredList = StockList.filter(item => String(item.stock_id) === String(id))
      const result = {
        postUrl: `/api/equipment/stock/${id}`,
        data: [
          {
            title: {
              'index': `equipment.stock`
            },
            columns: toObjectList(filteredList)
          }
        ]
      }

      return {
        code: 20000,
        data: result
      }
    }
  },
  {
    url: /\/api\/equipment\/\w+/,
    type: 'get',
    response: config => {
      const { type, title, page = 1, limit = 20, sort } = config.query

      const reg = /\/api\/equipment\/(\w+)/
      const equipmentType = reg.exec(config.url)[1]

      const List = getListByType(equipmentType)

      let mockList = List.filter(item => {
        if (type && item.type.toLowerCase() !== type.toLowerCase()) return false
        if (title && item.title.indexOf(title) < 0) return false
        return true
      })

      if (sort === '-id') {
        mockList = mockList.reverse()
      }

      const pageList = mockList.filter((item, index) => index < limit * page && index >= limit * (page - 1))

      return {
        code: 20000,
        data: {
          items: pageList,
          total: mockList.length
        }
      }
    }
  }
]

