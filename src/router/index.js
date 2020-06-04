import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '../layout'

/* Router Modules */

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar
    noCache: true                if set true, the page will no be cached(default is false)
    affix: true                  if set true, the tag will affix in the tags-view
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/people/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/redirect',
    component: Layout,
    hidden: true,
    children: [
      {
        path: '/redirect/:path*',
        component: () => import('@/views/redirect/index')
      }
    ]
  },
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },
  {
    path: '/auth-redirect',
    component: () => import('@/views/login/auth-redirect'),
    hidden: true
  },
  {
    path: '/404',
    component: () => import('@/views/error-page/404'),
    hidden: true
  },
  {
    path: '/401',
    component: () => import('@/views/error-page/401'),
    hidden: true
  },
  {
    path: '',
    component: Layout,
    redirect: 'dashboard',
    children: [
      {
        path: 'dashboard',
        component: () => import('@/views/dashboard/index'),
        name: 'Dashboard',
        meta: { title: 'dashboard', icon: 'dashboard', affix: true }
      }
    ]
  },
  {
    path: '/downloads',
    component: Layout,
    children: [
      {
        path: '',
        component: () => import('@/views/downloads/index'),
        name: 'downloads',
        meta: {
          title: 'downloads'
        },
        hidden: true
      }
    ]
  },
  {
    path: '/user-center',
    component: Layout,
    redirect: '/user-center/index',
    hidden: true,
    children: [
      {
        path: 'index.vue',
        component: () => import('@/views/user-center/index'),
        name: 'Profile',
        meta: { title: 'profile', icon: 'user' }
      }
    ]
  }
]

/**
 * asyncRoutes
 * the routes that need to be dynamically loaded based on user roles
 */
export const asyncRoutes = [
  {
    path: '/role',
    component: Layout,
    meta: {
      roles: ['root'],
      icon: 'password',
      title: 'role'
    },
    children: [
      {
        path: ':id(\\d+)',
        component: () => import('@/views/role/manage'),
        name: 'roleManage',
        meta: { title: 'roleManage', activeMenu: '/role' },
        hidden: true
      },
      {
        path: '',
        name: 'roleIndex',
        component: () => import('@/views/role/index'),
        hidden: true
      }
    ]
  },
  {
    path: '/lab',
    component: Layout,
    meta: {
      icon: 'tree',
      title: 'lab'
    },
    children: [
      {
        path: ':id(\\d+)',
        component: () => import('@/views/lab/detail'),
        name: 'labInfo',
        meta: { title: 'detail', activeMenu: '/lab' },
        hidden: true
      },
      {
        path: ':id(\\d+)/:action_type(edit)',
        component: () => import('@/views/lab/detail'),
        name: 'labEdit',
        meta: { title: 'edit', activeMenu: '/lab' },
        hidden: true
      },
      {
        path: ':action_type(create)',
        component: () => import('@/views/lab/detail'),
        name: 'labCreate',
        meta: { title: 'create', activeMenu: '/lab' },
        hidden: true
      },
      {
        path: '',
        name: 'lab',
        component: () => import('@/views/lab/index'),
        meta: { },
        hidden: true
      }
    ]
  },
  {
    path: '/people',
    component: Layout,
    meta: {
      icon: 'peoples',
      title: 'people',
      roles: ['people', 'people_inlab']
    },
    children: [
      {
        path: ':id(\\d+)',
        component: () => import('@/views/people/detail'),
        name: 'peopleInfo',
        meta: { title: 'detail', activeMenu: '/people' },
        hidden: true
      },
      {
        path: ':id(\\d+)/:action_type(edit)',
        component: () => import('@/views/people/detail'),
        name: 'peopleEdit',
        meta: { title: 'edit', activeMenu: '/people' },
        hidden: true
      },
      {
        path: ':type(\\w+)/:action_type(create)',
        component: () => import('@/views/people/detail'),
        name: 'peopleCreate',
        meta: { title: 'create', activeMenu: '/people' },
        hidden: true
      },
      {
        path: 'researcher',
        component: () => import('@/views/people/list'),
        name: 'researcher',
        meta: { title: 'researcher', icon: 'list', roles: ['people_inlab', 'people'] }
      },
      {
        path: 'administration',
        component: () => import('@/views/people/list'),
        name: 'administration',
        meta: { title: 'administration', icon: 'list', roles: ['people_inlab', 'people'] }
      },
      {
        path: 'visitor',
        component: () => import('@/views/people/list'),
        name: 'visitor',
        meta: { title: 'visitor', icon: 'list', roles: ['people_inlab', 'people'] }
      },
      {
        path: 'postdoctoral',
        component: () => import('@/views/people/list'),
        name: 'postdoctoral',
        meta: { title: 'postdoctoral', icon: 'list', roles: ['people_inlab', 'people'] }
      },
      {
        path: 'student',
        component: () => import('@/views/people/list'),
        name: 'student',
        meta: { title: 'student', icon: 'list', roles: ['people_inlab', 'people'] }
      },
      {
        path: '',
        name: 'people',
        component: () => import('@/views/people/list'),
        hidden: true
      }
    ]
  },
  // {
  //   path: '/finance',
  //   component: Layout,
  //   meta: {
  //     title: 'finance',
  //     icon: 'money',
  //     roles: ['finance', 'finance_expenditure', 'finance_social_funds', 'finance_social_insurance']
  //   },
  //   children: [
  //     {
  //       path: 'expenditure/create_index',
  //       component: () => import('@/views/finance/expCreateIndex'),
  //       name: 'expCreateIndex',
  //       meta: { title: 'create', activeMenu: '/finance' },
  //       hidden: true
  //     },
  //     {
  //       path: ':type(expenditure)/:exp_type(\\w+)/:action_type(create)',
  //       component: () => import('@/views/finance/detail'),
  //       name: 'expCreate',
  //       meta: { title: 'create', activeMenu: '/finance' },
  //       hidden: true
  //     },
  //     {
  //       path: ':type(social_insurance)/:id(\\d+)/:action_type(edit)',
  //       component: () => import('@/views/finance/insuranceDetail'),
  //       name: 'insuranceEdit',
  //       meta: { title: 'edit', activeMenu: '/finance' },
  //       hidden: true
  //     },
  //     {
  //       path: ':type(social_insurance)/:action_type(create)',
  //       component: () => import('@/views/finance/insuranceDetail'),
  //       name: 'insuranceCreate',
  //       meta: { title: 'create', activeMenu: '/finance' },
  //       hidden: true
  //     },
  //     {
  //       path: ':type(social_insurance)/:id(\\d+)',
  //       component: () => import('@/views/finance/insuranceDetail'),
  //       name: 'insuranceInfo',
  //       meta: { title: 'detail', activeMenu: '/finance' },
  //       hidden: true
  //     },
  //     {
  //       path: ':type(\\w+)/:id(\\d+)/:action_type(edit)',
  //       component: () => import('@/views/finance/detail'),
  //       name: 'financeEdit',
  //       meta: { title: 'edit', activeMenu: '/finance' },
  //       hidden: true
  //     },
  //     {
  //       path: ':type(\\w+)/:action_type(create)',
  //       component: () => import('@/views/finance/detail'),
  //       name: 'financeCreate',
  //       meta: { title: 'create', activeMenu: '/finance' },
  //       hidden: true
  //     },
  //     {
  //       path: ':type(\\w+)/:id(\\d+)',
  //       component: () => import('@/views/finance/detail'),
  //       name: 'financeInfo',
  //       meta: { title: 'detail', activeMenu: '/finance' },
  //       hidden: true
  //     },
  //     {
  //       path: 'social_insurance',
  //       component: () => import('@/views/finance/list/social_insurance'),
  //       name: 'insuranceList',
  //       meta: { title: 'social_insurance', icon: 'chart', roles: ['finance_social_insurance', 'finance'] }
  //     },
  //     {
  //       path: 'social_funds',
  //       component: () => import('@/views/finance/list/social_funds'),
  //       name: 'fundsList',
  //       meta: { title: 'social_funds', icon: 'chart', roles: ['finance_social_funds', 'finance'] }
  //     },
  //     {
  //       path: 'expenditure',
  //       component: () => import('@/views/finance/list/expenditure'),
  //       name: 'expList',
  //       meta: { title: 'expenditure', icon: 'chart', roles: ['finance_expenditure', 'finance'] }
  //     },
  //     {
  //       path: '',
  //       component: () => import('@/views/finance/index'),
  //       name: 'finance',
  //       hidden: true
  //     }
  //   ]
  // },
  {
    path: '/research',
    component: Layout,
    meta: {
      title: 'research',
      icon: 'example',
      roles: ['research', 'research_patent', 'research_paper', 'research_project', 'research_reward']
    },
    children: [
      {
        path: ':type(\\w+)/:id(\\d+)',
        component: () => import('@/views/research/detail'),
        name: 'researchInfo',
        meta: { title: 'detail', activeMenu: '/research' },
        hidden: true
      },
      {
        path: ':type(\\w+)/:id(\\d+)/:action_type(edit)',
        component: () => import('@/views/research/detail'),
        name: 'researchEdit',
        meta: { title: 'edit', activeMenu: '/research' },
        hidden: true
      },
      {
        path: ':type(\\w+)/:action_type(create)',
        component: () => import('@/views/research/detail'),
        name: 'researchCreate',
        meta: { title: 'create', activeMenu: '/research' },
        hidden: true
      },
      {
        path: 'patent',
        component: () => import('@/views/research/list/patent'),
        name: 'patent',
        meta: { title: 'patent', icon: 'component', roles: ['research_patent', 'research'] }
      },
      {
        path: 'paper',
        component: () => import('@/views/research/list/paper'),
        name: 'paper',
        meta: { title: 'paper', icon: 'component', roles: ['research_paper', 'research'] }
      },
      {
        path: 'project',
        component: () => import('@/views/research/list/project'),
        name: 'project',
        meta: { title: 'project', icon: 'component', roles: ['research_project', 'research'] }
      },
      {
        path: 'reward',
        component: () => import('@/views/research/list/reward'),
        name: 'reward',
        meta: { title: 'reward', icon: 'component', roles: ['research_reward', 'research'] }
      },
      {
        path: '',
        name: 'research',
        component: () => import('@/views/research/index'),
        hidden: true
      }
    ]
  },
  {
    path: '/daily',
    component: Layout,
    meta: {
      title: 'daily',
      icon: 'documentation'
    },
    children: [
      {
        path: ':type(\\w+)/:id(\\d+)',
        component: () => import('@/views/daily/detail'),
        name: 'dailyInfo',
        meta: { title: 'detail', activeMenu: '/daily' },
        hidden: true
      },
      {
        path: ':type(\\w+)/:id(\\d+)/:action_type(edit)',
        component: () => import('@/views/daily/detail'),
        name: 'dailyEdit',
        meta: { title: 'edit', activeMenu: '/daily' },
        hidden: true
      },
      {
        path: ':type(\\w+)/:action_type(create)',
        component: () => import('@/views/daily/detail'),
        name: 'dailyCreate',
        meta: { title: 'create', activeMenu: '/daily' },
        hidden: true
      },
      {
        path: 'travel',
        component: () => import('@/views/daily/list/travel'),
        name: 'travel',
        meta: { title: 'travel', icon: 'guide' }
      },
      {
        path: 'visit',
        component: () => import('@/views/daily/list/visit'),
        name: 'visit',
        meta: { title: 'visit', icon: 'guide' }
      },
      {
        path: 'report',
        component: () => import('@/views/daily/list/report'),
        name: 'report',
        meta: { title: 'report', icon: 'guide' }
      },
      {
        path: 'hosting',
        component: () => import('@/views/daily/list/hosting'),
        name: 'hosting',
        meta: { title: 'hosting', icon: 'guide' }
      },
      {
        path: '',
        component: () => import('@/views/daily/index'),
        name: 'daily',
        hidden: true
      }
    ]
  },
  {
    path: '/equipment',
    component: Layout,
    meta: {
      title: 'equipment',
      icon: 'lock',
      roles: ['equipment', 'equipment_purchasing', 'equipment_stock']
    },
    children: [
      {
        path: ':type(\\w+)/:id(\\d+)',
        component: () => import('@/views/equipment/detail'),
        name: 'equipmentInfo',
        meta: { title: 'detail', activeMenu: '/equipment' },
        hidden: true
      },
      {
        path: ':type(\\w+)/:id(\\d+)/:action_type(edit)',
        component: () => import('@/views/equipment/detail'),
        name: 'equipmentEdit',
        meta: { title: 'edit', activeMenu: '/equipment' },
        hidden: true
      },
      {
        path: ':type(\\w+)/:action_type(create)',
        component: () => import('@/views/equipment/detail'),
        name: 'equipmentCreate',
        meta: { title: 'create', activeMenu: '/equipment' },
        hidden: true
      },
      {
        path: 'purchasing',
        component: () => import('@/views/equipment/list/purchasing'),
        name: 'purchasing',
        meta: { title: 'purchasing', icon: 'table', roles: ['equipment_purchasing', 'equipment'] }
      },
      {
        path: 'stock',
        component: () => import('@/views/equipment/list/stock'),
        name: 'stock',
        meta: { title: 'stock', icon: 'table', roles: ['equipment_stock', 'equipment'] }
      },
      {
        path: '',
        name: 'equipment',
        component: () => import('@/views/equipment/index'),
        hidden: true
      }
    ]
  },
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
