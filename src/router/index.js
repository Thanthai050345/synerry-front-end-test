import { createRouter, createWebHistory } from 'vue-router'
import DashboardView from '../views/DashboardView.vue'

const routes = [
  {
    path: '/',
    name: 'dashboard',
    component: DashboardView
  },
  {
    path: '/contact-person-list',
    name: 'contactPersonList',
    component: () => import('../views/ContactPersonListView.vue')
  }
  ,
  {
    path: '/report',
    name: 'report',
    component: () => import('../views/ReportView.vue')
  },
  {
    path: '/manage-layout',
    name: 'manageLayout',
    component: () => import('../views/ManageLayoutView.vue')
  },
  {
    path: '/member',
    name: 'member',
    component: () => import('../views/MemberView.vue')
  },
  {
    path: '/data-access',
    name: 'dataAccess',
    component: () => import('../views/DataAccessView.vue')
  },
  {
    path: '/system-log',
    name: 'systemLog',
    component: () => import('../views/SystemLogView.vue')
  }
  // {
  //   path: '/contact-person/:id',
  //   name: 'contactPerson',
  //   component: () => import('../views/ContactPersonView.vue')
  // },
  // {
  //   path: '/contact-person',
  //   name: 'contactPersonNew',
  //   component: () => import('../views/ContactPersonView.vue')
  // },
  // {
  //   path: '/:pathMatch(.*)*',
  //   name: 'notFound',
  //   component: () => import('../views/NotFoundView.vue')
  // },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
