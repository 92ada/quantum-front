import PeopleTranslation from './zh/people'
import RouteTranslation from './zh/route'

export default {
  common: {
    update: '更新',
    edit: '编辑',
    cancel_edit: '取消编辑',
    create: '创建',
    pleaseChoose: '请选择'
  },
  // titles: {
  //   basic_info: '基本信息',
  //   emergency_contact: '紧急联系人信息'
  // },

  route: RouteTranslation,
  people: PeopleTranslation,

  navbar: {
    dashboard: '首页',
    github: '项目地址',
    logOut: '退出登录',
    profile: '个人中心',
    theme: '换肤',
    size: '布局大小'
  },
  login: {
    title: '系统登录',
    logIn: '登录',
    username: '账号',
    password: '密码',
    any: '随便填',
    thirdparty: '第三方登录',
    thirdpartyTips: '本地不能模拟，请结合自己业务进行模拟！！！'
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
