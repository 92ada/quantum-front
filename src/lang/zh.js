import PeopleTranslation from './zh/people'
import LabTranslation from './zh/lab'
import RouteTranslation from './zh/route'
import ResearchTranslation from './zh/research'
import DailyTranslation from './zh/daily'
import EquipmentTranslation from './zh/equipment'
import FinanceTranslation from './zh/finance'

export default {
  common: {
    update: '更新',
    edit: '编辑',
    cancel_edit: '取消编辑',
    create: '创建',
    pleaseChoose: '请选择',
    pleaseSearch: '请搜索',
    delete: '删除',
    keyword: '关键词',
    operation: '操作',
    manageRole: '编辑权限'
  },

  route: RouteTranslation,
  people: PeopleTranslation,
  lab: LabTranslation,
  research: ResearchTranslation,
  daily: DailyTranslation,
  equipment: EquipmentTranslation,
  finance: FinanceTranslation,

  navbar: {
    dashboard: '首页',
    github: '项目地址',
    logOut: '退出登录',
    profile: '个人中心',
    theme: '换肤',
    size: '布局大小'
  },
  login: {
    title: '量子研究院数据管理系统',
    logIn: '登录',
    username: '账号',
    password: '密码',
    tips: '请使用CAS账号密码进行登录'
  },
  tagsView: {
    refresh: '刷新',
    close: '关闭',
    closeOthers: '关闭其它',
    closeAll: '关闭所有'
  },
  settings: {
    title: '系统布局配置',
    theme: '主题色',
    tagsView: '开启 Tags-View',
    fixedHeader: '固定 Header',
    sidebarLogo: '侧边栏 Logo'
  }
}
