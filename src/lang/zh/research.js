export default {
  id: '序号',
  status: '状态',
  title: '标题',
  applicant: '申请人',
  research_type: '类型',

  patent_info: {
    TITLE: '专利信息',
    id: '序号',
    applicant: '申请人',
    title: '专利名称',
    type: '专利类型',
    status: '专利状态',
    apply_date: '申请日期',
    approve_date: '授权日期',
    application_no: '申请号',
    patent_no: '专利号',
    apply_no: '申请号',
    is_pct: '是否PCT',
    inventor_rank: '发明人排序'
  },

  paper_info: {
    TITLE: '论文信息',
    title: '论文名称',
    id: '序号',
    journal_conference_title: '期刊/会议名称',
    publication_date: '出版日期',
    volume_no: '卷号',
    document_no: '期号或文献号',
    is_under_sustech: '是否以南科大为第一作者单位或通信作者单位（量子研究院or物理系）',
    sustech_institution_rank: '南科大单位排序',
    author: '南科大作者',
    author_rank: '作者排序',
    is_international: '是否国际合作论文',
    is_nature_index: '是否自然指数期刊',
    is_conference_paper: '是否会议论文',
    journal_acceptance_type: '期刊收录类别',
    jcr_partition: 'JCR分区',
    impact_factor: '影响因子',
    article_thanks: '文章致谢'
  },

  project_info: {
    TITLE: '项目信息',
    expenditureNo: '经费号',
    authed: '可查看经费的人员列表',
    id: '序号',
    title: '项目名称',
    type: '项目类型',
    category: '项目类别',
    leader: '项目负责人',
    start_date: '起始日期',
    end_date: '终止日期',
    way_of_taking: '承担方式',
    approved_funds: '获批经费（万元）',
    member: '项目成员'
  },

  project_admin_info: {
    TITLE: '',
    sid: 'SID',
    name: '姓名',
    person: '人员'
  },

  project_member_info: {
    TITLE: '',
    sid: 'SID',
    name: '姓名',
    phone: '联系电话',
    email: '邮箱',
    person: '人员',
    institution: '工作单位',
    position_title: '职位',
    degree: '学位',
    research_direction: '研究领域'
  },

  project_funds_info: {
    TITLE: '',
    id: '序号',
    arrival_date: '到账日期',
    amount: '金额（万元）',
    remark: '备注'
  },

  reward_info: {
    TITLE: '获奖信息',
    id: '序号',
    rewarded: '获奖人',
    title: '奖励名称',
    issue_institution: '发证单位',
    level: '获奖级别',
    date: '获奖日期',
    grade: '获奖等级',
    rank: '获奖人排名',
    remark: '备注'
  }
}
