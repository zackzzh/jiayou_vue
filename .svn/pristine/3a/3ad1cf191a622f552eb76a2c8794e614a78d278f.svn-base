// 产品服务

export default {
    path: '/product',
    name: 'product',
    component: () => import('@/pages/product/product'),
    children: [
        {
            // 网站建设
            path: 'webDesign',
            component: () => import('@/pages/product/web-design/index'),
            children: [
                {
                    path: '/',
                    name: 'webDesign',
                    component: () => import('@/pages/product/web-design/web-design'),
                }, {
                    path: 'subpage',
                    name: 'webSubpage',
                    component: () => import('@/pages/product/web-design/web-design-item/index'),
                }]
        },
        {
            // app开发
            path: 'appDevelop',
            component: () => import('@/pages/product/app-develop/index'),
            children: [
                {
                    path: '/',
                    name: 'appDevelop',
                    component: () => import('@/pages/product/app-develop/app-develop'),
                },
                {
                    path: 'subpage',
                    name: 'appSubpage',
                    component: () => import('@/pages/product/app-develop/app-item'),
                }
            ]
        },
        {
            // 运营推广
            path: 'deals',
            name: 'deals',
            component: () => import('@/pages/product/deals/index')
        },
        {
            // 移动开发
            path: 'mobileDevelop',
            component: () => import('@/pages/product/mobile-develop/index'),
            children: [
                {
                    path: '/',
                    name: 'mobileDevelop',
                    component: () => import('@/pages/product/mobile-develop/mobile-develop'),
                }, {
                    path: 'applet',
                    name: 'applet',
                    component: () => import('@/pages/product/mobile-develop/applet'),
                }
            ]
        },
        {
            // 配套服务
            path: 'supportService',
            name: 'supportService',
            component: () => import('@/pages/product/support-service/index')
        }
    ]
}