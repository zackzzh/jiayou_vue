export default {
  path: '/mobile/home',
  redirect: "/mobile/home",
  component: () => import('@/pages/mobile/home/index'),
  children: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/pages/mobile/home/home'),

    },
    //服务开发
    {
      path: 'appDevelop1',
      name: 'appDevelop1',
      component: () => import('@/pages/mobile/home/service/appDevelop'),
    },
  ]
}
