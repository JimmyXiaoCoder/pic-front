import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../pages/HomePage.vue'
import UserLogin from '../pages/LoginPage.vue'
import UserRegister from '../pages/RegisterPage.vue'
import UserManagePage from '../pages/UserManagePage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/', 
      name: 'home',
      component: HomePage,
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/user/login',
      name: '登录',
      component: UserLogin,
    },
    {
      path: '/user/register',
      name: '用户注册',
      component: UserRegister,
    },
    {
      path: '/admin/userManage',
      name: '用户管理',
      component: UserManagePage,
    }
  ],
})

export default router
