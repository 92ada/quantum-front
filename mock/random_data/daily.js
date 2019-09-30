import Mock from 'mockjs'

const TravelList = []
const VisitList = []
const ReportList = []
const HostingList = []
const FlightList = []
const count = 100

/**
 * Travel
 * */
for (let i = 0; i < count; i++) {
  TravelList.push(Mock.mock({
    'id': '@increment',
    'people': '@first @last',
    'budget|1000-100000': 1,
    'type|1': ['会议', '合作'],
    'start_date': '@date',
    'end_date': '@date'
  }))
}

/**
 * Visit
 * */
for (let i = 0; i < count; i++) {
  VisitList.push(Mock.mock({
    'id': '@increment',
    'name': '@first @last',
    'visitor_institution': '@title',
    'approval_status|1': ['未提交', '审批中', '已批准'],
    'job_title': '@title',
    'receptionist': '@first @last',
    'identity_type|1': ['ID Card', 'Passport'],
    'identity_no|1000000-9999999': 1,
    'phone_no': '@phone',
    'email': '@email',
    'accommodation': true,
    'needs_pick_up|1': true,
    'expenditure|1000-100000': 1,
    'budget|1000-100000': 1,
    'remark': '@sentence'
  }))
}

/**
 * Report
 * */
for (let i = 0; i < count; i++) {
  ReportList.push(Mock.mock({
    'id': '@increment',
    'inviter': '@first @last',
    'title': '@title',
    'time': '@datetime',
    'invitee': '@first @last',
    'people_count|10-100': 1
  }))
}

/**
 * Hosting
 * */
for (let i = 0; i < count; i++) {
  HostingList.push(Mock.mock({
    'id': '@increment',
    'title': '@title',
    'time': '@datetime',
    'site': '@sentence'
  }))
}

/**
 * Flight
 * */
for (let i = 0; i < 3; i++) {
  FlightList.push(Mock.mock({
    'id': '@increment',
    'departure_time': '@datetime',
    'arrival_time': '@datetime',
    'departure_site': '@word',
    'arrival_site': '@word',
    'name': '@first @last',
    'flight_no': '@string("upper", 5)',
    'price|1000-15000.1': 1,
    'identity_type|1': ['ID Card', 'Passport'],
    'identity_no|1000000-9999999': 1,
    'remark': '@sentence'
  }))
}

export {
  TravelList,
  VisitList,
  ReportList,
  HostingList,
  FlightList
}
