import Mock from 'mockjs'
import { BasicInfoList } from './people'

const SocialInsuranceList = []
const SocialFundsList = []
const ExpenditureList = []
const count = 100

for (let i = 0; i < count; i++) {
  ExpenditureList.push(Mock.mock({
    expenditure_id: '@increment',
    'lab': '@word',
    'type|1': ['Equipment', 'Material', 'Processing', 'Travel', 'Conference', 'International', 'Publication', 'Labor', 'Consultation', 'Other', 'Indirective'],
    'date': '@date',
    'reservation_no': '@guid',
    'amount|1000-100000': 1,
    'document_month|1-12': 1,
    'document_no': '@guid'
  }))
}

for (let i = 0; i < count; i++) {
  let OtherInfo = {}
  switch (ExpenditureList[i].type) {
    case 'Equipment':
      OtherInfo = Mock.mock({
        'title': '@title',
        'purchase_type': '@word',
        'payment_status': '@word',
        'inbound_no': '@guid',
        'warranty_amount|1000-100000': 1,
        'warranty_date': '@date'
      })
      break
    case 'Material':
      OtherInfo = (Mock.mock({
        'title': '@title'
      }))
      break
    case 'Processing':
      OtherInfo = (Mock.mock({
        'subject': '@word',
        'content': '@sentence'
      }))
      break
    case 'Travel':
      OtherInfo = (Mock.mock({
        'travel_people': '@first @last',
        'start_date': '@date',
        'end_date': '@date',
        'matter': '@sentence',
        'location': '@city',
        'number_of_people|1-20': 1
      }))
      break
    case 'Conference':
      OtherInfo = (Mock.mock({
        'start_date': '@date',
        'end_date': '@date',
        'place_of_participation': '@city @word',
        'planned_attendance|1-20': 1,
        'actual_attendance|1-20': 1,
        'budget|1000-100000': 1,
        'actual_total_cost|1000-100000': 1,
        'meeting_expenses|1000-100000': 1,
        'transportation_expenses|1000-100000': 1,
        'labor_expenses|1000-100000': 1,
        'officers': '@first @last'
      }))
      break
    case 'International':
      OtherInfo = (Mock.mock({
        'start_date': '@date',
        'end_date': '@date',
        'people': '@first @last',
        'matter': '@sentence',
        'location': '@city',
        'number_of_people|1-20': 1
      }))
      break
    case 'Publication':
    case 'Consultation':
      OtherInfo = (Mock.mock({
        'subject': '@word',
        'matter': '@sentence',
        'department': '@sentence',
        'handler': '@first @last',
        'payee': '@first @last'
      }))
      break
    case 'Labor':
      OtherInfo = (Mock.mock({
        'category': '@word',
        'matter': '@sentence',
        'standard': '@word',
        'days|1-180': 1,
        'handler': '@first @last'
      }))
      break
    case 'Other':
    case 'Indirective':
      OtherInfo = (Mock.mock({
        'subject': '@word',
        'matter': '@title',
        'handler': '@first @last'
      }))
      break
  }
  ExpenditureList[i] = {
    ...ExpenditureList[i],
    ...OtherInfo,
    ...(Mock.mock({ 'remark': '@sentence' }))
  }
}

export {
  SocialInsuranceList,
  SocialFundsList,
  ExpenditureList
}
