import {
  TravelList,
  VisitList,
  ReportList,
  HostingList,
  FlightList
} from './random_data/daily'
import { toObjectList } from './util'

function getListByType(dailyType) {
  switch (dailyType) {
    case 'travel': return TravelList
    case 'visit': return VisitList
    case 'report': return ReportList
    case 'hosting': return HostingList
  }
}

export default [
  {
    url: /\/api\/daily\/travel\/\w+\/flights/,
    type: 'get',
    response: config => {
      return {
        code: 20000,
        data: {
          items: FlightList,
          total: FlightList.length
        }
      }
    }
  },
  {
    url: /\/api\/daily\/visit\/\w+\/flights/,
    type: 'get',
    response: config => {
      return {
        code: 20000,
        data: {
          items: FlightList,
          total: FlightList.length
        }
      }
    }
  },
  {
    url: /\/api\/daily\/travel\/\w+/,
    type: 'get',
    response: config => {
      const id = config.url.split('/').reverse()[0]

      const filteredList = TravelList.filter(item => String(item.id) === String(id))

      const result = {
        postUrl: `/api/daily/travel/${id}`,
        data: [
          {
            title: {
              'index': `daily.travel`
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
    url: /\/api\/daily\/visit\/\w+/,
    type: 'get',
    response: config => {
      const id = config.url.split('/').reverse()[0]

      const filteredList = VisitList.filter(item => String(item.id) === String(id))
      const result = {
        postUrl: `/api/daily/visit/${id}`,
        data: [
          {
            title: {
              'index': `daily.visit`
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
    url: /\/api\/daily\/report\/\w+/,
    type: 'get',
    response: config => {
      const id = config.url.split('/').reverse()[0]

      const filteredList = ReportList.filter(item => String(item.id) === String(id))
      const result = {
        postUrl: `/api/daily/report/${id}`,
        data: [
          {
            title: {
              'index': `daily.report`
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
    url: /\/api\/daily\/hosting\/\w+/,
    type: 'get',
    response: config => {
      const id = config.url.split('/').reverse()[0]

      const filteredList = HostingList.filter(item => String(item.id) === String(id))
      const result = {
        postUrl: `/api/daily/hosting/${id}`,
        data: [
          {
            title: {
              'index': `daily.hosting`
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
    url: /\/api\/daily\/\w+/,
    type: 'get',
    response: config => {
      const { type, title, page = 1, limit = 20, sort } = config.query

      const reg = /\/api\/daily\/(\w+)/
      const dailyType = reg.exec(config.url)[1]

      const List = getListByType(dailyType)

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

