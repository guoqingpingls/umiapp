export default [
  {
    path: '/user',
    component: '../layouts/UserLayout',
    routes: [{ path: '/user', component: './Welcome' }],
  },
  {
    path: '/',
    component: '../layouts/BasicLayout',
    routes: [
      { path: '/', redirect: '/welcome' },
      // dashboard
      {
        path: '/welcome',
        name: 'welcome',
        icon: 'smile',
        component: './Welcome',
      },
      {
        path: '/product',
        name: 'product',
        icon: 'smile',
        routes: [
          {
            path: '/product/entry',
            name: 'entry',
            component: '../pages/product/entry'
          },
          {
            path: '/product/inquiry',
            name: 'inquiry',
            component: '../pages/product/inquiry'
          }
        ]
      },
      {
        path: '/list',
        name: 'list',
        icon: 'smile',
        routes: [
          {
            path: '/list/order',
            name: 'order',
            component: '../pages/list/order'
          },
          {
            path: '/list/policy',
            name: 'policy',
            component: '../pages/list/policy'
          }
        ]
      }
      // {
      //   path: 'https://github.com/umijs/umi-blocks/tree/master/ant-design-pro',
      //   name: 'more-blocks',
      //   icon: 'block',
      // },
    ],
  }
]