import {
  SocialInsuranceList,
  SocialFundsList,
  ExpenditureList
} from './random_data/finance'
import { toObjectList } from './util'

function getListByType(financeType) {
  switch (financeType) {
    case 'social_insurance': return SocialInsuranceList
    case 'social_funds': return SocialFundsList
    case 'expenditure': return ExpenditureList
  }
}

export default [
  {
    url: /\/api\/finance\/social_insurance\/\w+/,
    type: 'get',
    response: config => {
      const id = config.url.split('/').reverse()[0]

      const filteredList = SocialInsuranceList.filter(item => String(item.uid) === String(id))

      const result = {
        postUrl: `/api/finance/social_insurance/${id}`,
        data: [
          {
            title: {
              'index': `finance.social_insurance`
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
    url: /\/api\/finance\/social_funds\/\w+/,
    type: 'get',
    response: config => {
      const id = config.url.split('/').reverse()[0]

      const filteredList = SocialFundsList.filter(item => String(item.uid) === String(id))
      const result = {
        postUrl: `/api/finance/social_funds/${id}`,
        data: [
          {
            title: {
              'index': `finance.social_funds`
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
    url: /\/api\/finance\/expenditure\/\w+/,
    type: 'get',
    response: config => {
      const id = config.url.split('/').reverse()[0]

      const filteredList = ExpenditureList.filter(item => String(item.expenditure_id) === String(id))
      const result = {
        postUrl: `/api/finance/expenditure/${id}`,
        data: [
          {
            title: {
              'index': `finance.expenditure`
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
    url: /\/api\/finance\/\w+/,
    type: 'get',
    response: config => {
      const { type, title, page = 1, limit = 20, sort } = config.query

      const reg = /\/api\/finance\/(\w+)/
      const financeType = reg.exec(config.url)[1]

      const List = getListByType(financeType)

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

