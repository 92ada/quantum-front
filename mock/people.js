import LabList from './const_data/options/lab.js'

import { BasicInfoList, EmergencyContactList, OtherInfoList } from './random_data/people'
import { toObjectList } from './util'
import constBasicInfo from './const_data/people/basic_info/1'

export default [
  {
    url: /\/api\/people\/\d+/,
    type: 'get',
    response: config => {
      const id = config.url.split('/').reverse()[0]
      const filteredBasicInfoList = []
      const filteredEmergencyContactList = []
      const filteredOtherInfoList = []
      for (let i = 0; i < BasicInfoList.length; i++) {
        if (String(BasicInfoList[i].uid) === String(id)) {
          filteredBasicInfoList.push(BasicInfoList[i])
          filteredEmergencyContactList.push(EmergencyContactList[i])
          filteredOtherInfoList.push(OtherInfoList[i])
        }
      }
      const result = {
        postUrl: `/api/people/${id}`,
        data: [
          constBasicInfo,
          // {
          //   title: {
          //     'index': 'people.basic_info'
          //   },
          //   columns: toObjectList(filteredBasicInfoList)
          // },
          {
            title: {
              'index': 'people.emergency_contact'
            },
            columns: toObjectList(filteredEmergencyContactList)
          },
          {
            title: {
              'index': 'people.other_info'
            },
            columns: toObjectList(filteredOtherInfoList)
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
    url: '/api/people',
    type: 'get',
    response: config => {
      const { type, title, page = 1, limit = 20, sort } = config.query

      let mockList = BasicInfoList.filter(item => {
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
    url: '/api/labs',
    type: 'get',
    response: config => {
      return {
        code: 20000,
        data: LabList
      }
    }
  }

]

