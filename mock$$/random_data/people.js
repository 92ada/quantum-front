import Mock from 'mockjs'

const BasicInfoList = []
const EmergencyContactList = []
const OtherInfoList = []
const count = 100

/**
* BasicInfo
* */
for (let i = 0; i < count; i++) {
  BasicInfoList.push(Mock.mock({
    name: '@first @last',
    'photo': '@image(100)',
    'uid|30001111-30009999': 1,
    'type|1': ['Researcher', 'Teacher', 'Administration', 'Visitor', 'Postdoctoral', 'Student'],
    'status|1': ['Normal', 'On vacation', 'Dismissed', 'Abnormal'],
    'identity_type|1': ['ID Card', 'Passport'],
    'identity_no|100000000-999999999': 1,
    'birth_date': '@date',
    'mobile_phone|15602900000-18909909999': 1,
    'office_phone|5200279-9999999': 1,
    'office_address': '@word @word',
    email: '@email()',
    'political_status|1': ['群众', '党员', '团员'],
    'position_title|1': '@word',
    'research_direction': '@title',
    'highest_education': '@word',
    'graduation_date': '@date',
    'degree': '@word',
    'granting_institution': '@word @word',
    'granting_date': '@date',
    'work_experience': '@sentence',
    'education_experience': '@sentence',
  }))
}

/**
 * EmergencyContact
 * */
for (let i = 0; i < count; i++) {
  EmergencyContactList.push(Mock.mock({
    emergency_contact_name: '@first @last',
    'emergency_contact_phone|15602900000-18909909999': 1,
    'emergency_contact_relationship|1': ['父母', '子女', '配偶']
  }))
}

/**
 * DetailInfo, depending on people type
 */
for (let i = 0; i < count; i++) {
  const type = BasicInfoList[i].type
  switch (type) {
    case 'Researcher':
    case 'Teacher':
      OtherInfoList.push(Mock.mock({
        'job': '@word',
        'social_job': '@title',
        'achievements': '@sentence',
        'is_phd_mentor|1-2': true,
        'is_master_mentor|1-2': true,
        'is_union_member|1-2': true,
        'office_card_no|100000000-999999999': 1,
        'salary_card_no|100000000-999999999': 1,
        'bank': '@title ',
        'contract_no|100000000-999999999': 1,
        'entry_date': '@date',
        'contract_start_date': '@date',
        'contract_end_date': '@date',
        'annual_salary|100000-999999.2': 1,
        'monthly_salary|100000-999999.2': 1,
        'housing_subsidy|100000-999999.2': 1
      }))
      break
    case 'Administration':
      OtherInfoList.push(Mock.mock({
        'is_union_member|1-2': true,
        'salary_card_no|100000000-999999999': 1,
        'bank': '@title',
        'contract_no|100000000-999999999': 1,
        'entry_date': '@date',
        'contract_start_date': '@date',
        'contract_end_date': '@date',
        'annual_salary|100000-999999.2': 1,
        'monthly_salary|100000-999999.2': 1,
        'housing_subsidy|100000-999999.2': 1
      }))
      break
    case 'Visitor':
      OtherInfoList.push(Mock.mock({
        'salary_card_no|100000000-999999999': 1,
        'bank': '@title',
        'entry_date': '@date',
        'salary|100000-999999.2': 1,
        'citizenship|1': ['China, Mainland', 'China, HK', 'Japan', 'USA', 'UK'],
        'institution': '@title',
        'original_institution': '@title',
        'remark': '@title'
      }))
      break
    case 'Postdoctoral':
    case 'Student':
      OtherInfoList.push(Mock.mock({
        'entry_date': '@date',
        'edu_system': '4',
        'category': '@word',
        'advisor': '@first @last',
        'vice_advisor': '@first @last',
        'midterm_assessment_status|1': ['Pass', 'Fail', 'Pending'],
        'opening_assessment_status|1': ['Pass', 'Fail', 'Pending']
      }))
      break
  }
}

export {
  BasicInfoList,
  EmergencyContactList,
  OtherInfoList
}
