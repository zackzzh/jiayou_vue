// 方便加权限是重置路由
// 过滤路由用
// meta.requiresAuth
// this route requires auth, check if logged in
// if not, redirect to login page.
import session from '../config/session'

const INACCESSIBLE_LOGIN_ROUTES = ['/login', '/login-mobile']

export const routerInterceptor = (router) => {
    // console.log("router",router);
    router.beforeEach((to, from, next) => {
        if (to.matched.some(record => record.meta.requiresAuth)) {
            // 如果没登陆，则跳转至登陆页面
            if (!session.isLogin()) {
                next({
                    path: '/login',
                    query: { redirect: to.fullPath } //把要跳转的地址作为参数传到下一步
                })
            } else {
                next()
            }
        } else {
            if (session.isLogin() && INACCESSIBLE_LOGIN_ROUTES.includes(to.path)) {
                next('/home')
            }
            next() // 确保一定要调用 next()
        }
    })
}
