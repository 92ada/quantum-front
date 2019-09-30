import Mock from 'mockjs'

const PatentList = []
const PaperList = []
const ProjectList = []
const ProjectFundsList = []
const RewardList = []
const count = 100

/**
 * Patent
 * */
for (let i = 0; i < count; i++) {
  PatentList.push(Mock.mock({
    'id': '@increment',
    'applicant': '@first @last',
    'title': '@title',
    'type|1': ['发明', '实用新型', '外观设计'],
    'status|1': ['申请', '授权'],
    'apply_date': '@date',
    'approve_date': '@date',
    'patent_no': '@guid',
    'is_pct|1': true,
    'inventor_rank|1-4': 1
  }))
}

/**
 * Paper
 * */
for (let i = 0; i < count; i++) {
  PaperList.push(Mock.mock({
    'id': '@increment',
    'title': '@title',
    'author': '@first @last',
    'journal_conference_title': '@title',
    'publication_date': '@date',
    'volume_no|0-100': 1,
    'document_no': '@guid',
    'is_international|1': true,
    'is_nature_index|1': true,
    'is_conference_paper|1': true,
    'journal_acceptacce_type|1': ['SCI', 'EI', 'ISTP', 'MEDLINE', '核心期刊', '会议论文', '其他'],
    'author_rank|1-4': 1,
    'jcr_partition|1-4': 1,
    'impact_factor|5-10.2': 1,
    'sustech_institution_rank|1-3': 1,
    'is_under_sustech|1': true,
    'article_thanks': '@paragraph'
  }))
}

/**
 * Project
 * */
for (let i = 0; i < count; i++) {
  ProjectList.push(Mock.mock({
    'id': '@increment',
    'leader': '@first @last',
    'title': '@title',
    'category|1': ['国家级', '省部级', '地市级', '其他'],
    'type': '@word',
    'start_date': '@date',
    'end_date': '@date',
    'way_of_taking|1': ['牵头', '合作'],
    'approved_funds|10-200.2': 1,
    'member|1-3': '@first @last '
  }))
}

for (let i = 0; i < 3; i++) {
  ProjectFundsList.push(Mock.mock({
    'id': '@increment',
    'arrival_date': '@date',
    'amount|10-100.2': 1,
    'remark': '@sentence'
  }))
}

/**
 * Reward
 * */
for (let i = 0; i < count; i++) {
  RewardList.push(Mock.mock({
    'id': '@increment',
    'title': '@title',
    'rewarded': '@first @last',
    'level|1': ['国家级', '省部级', '地市级', '其他'],
    'issue_institution': '@title',
    'date': '@date',
    'grade|1': ['特等奖', '一等奖', '二等奖'],
    'remark': '@sentence'
  }))
}

export {
  PatentList,
  PaperList,
  ProjectList,
  RewardList,
  ProjectFundsList
}
