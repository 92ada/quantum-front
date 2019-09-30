import { PatentList, PaperList, ProjectList, RewardList, ProjectFundsList } from './random_data/research'
import { toObjectList } from './util'

function getListByType(researchType) {
  switch (researchType) {
    case 'patent': return PatentList
    case 'paper': return PaperList
    case 'project': return ProjectList
    case 'reward': return RewardList
  }
}

export default [
  {
    url: /\/api\/research\/project\/\w+\/funds/,
    type: 'get',
    response: config => {
      return {
        code: 20000,
        data: {
          items: ProjectFundsList,
          total: ProjectFundsList.length
        }
      }
    }
  },
  {
    url: /\/api\/research\/\w+\/\w+/,
    type: 'get',
    response: config => {
      const id = config.url.split('/').reverse()[0]
      const researchType = config.url.split('/').reverse()[1]
      const List = getListByType(researchType)

      const filteredList = List.filter(item => String(item.id) === String(id))
      const result = {
        postUrl: `/api/research/${researchType}/${id}`,
        data: [
          {
            title: {
              'index': `research.${researchType}_info`
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
    url: /\/api\/research\/\w+/,
    type: 'get',
    response: config => {
      const { type, title, page = 1, limit = 20, sort } = config.query

      const reg = /\/api\/research\/(\w+)/
      const researchType = reg.exec(config.url)[1]

      const List = getListByType(researchType)

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
  },
  {
    url: '/api/research',
    type: 'get',
    response: config => {
      const { type, title, page = 1, limit = 20, sort } = config.query

      const List = []
      for (const item of PatentList) {
        List.push({ research_type: 'patent', ...item })
      }
      for (const item of PaperList) {
        List.push({ research_type: 'paper', ...item })
      }
      for (const item of ProjectList) {
        List.push({ research_type: 'project', ...item })
      }
      for (const item of RewardList) {
        List.push({ research_type: 'reward', ...item })
      }

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

