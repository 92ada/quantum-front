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
    'end_date': '@date',
    'identity_type|1': ['ID Card', 'Passport'],
    'identity_no|1000000-9999999': 1
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
    'phone_no|15602900000-18909909999': 1,
    'email': '@email',
    'accommodation': '@word',
    'needs_pick_up|1': true,
    'expenditure|1000-100000': 1,
    'budget|1000-100000': 1,
    'has_report|1': true,
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
    'invitee_name': '@first @last',
    'people_count|10-100': 1,
    'location': '@word'
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
    'site': '@word @word',
    'is_reimbursement|1': true
  }))
}

/**
 * Flight Info
 * */
for (let i = 0; i < 3; i++) {
  FlightList.push(Mock.mock({
    'id': i + 1,
    'departure_time': '@datetime',
    'arrival_time': '@datetime',
    'departure_site': '@word',
    'arrival_site': '@word',
    'flight_no': '@string("upper", 5)',
    'price|1000-15000.1': 1,
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
