export default [

    { path: '/', component: () => import(/* webpackChunkName: "group-home" */ '@pages/Home'), name: 'home' },

    {
        path: '/fuel',
        component: { template: `<router-view></router-view>` },
        children: [
            { path: "", name: "fuels", component: () => import(/* webpackChunkName: "group-fuel" */ '@pages/fuel/Index') },
            { path: "new", name: "fuel-new", component: () => import(/* webpackChunkName: "group-fuel" */ '@pages/fuel/CreateUpdate') },
        ]
    },

    {
        path: '/type-vehicle',
        component: { template: `<router-view></router-view>` },
        children: [
            { path: "", name: "type-vehicles", component: () => import(/* webpackChunkName: "group-type-vehicle" */ '@pages/type-vehicle/Index') },
            { path: "new", name: "type-vehicles-new", component: () => import(/* webpackChunkName: "group-type-vehicle" */ '@pages/type-vehicle/CreateUpdate') },
        ]
    },

    // Rota 404
    {
        path: '*',
        name: '404',
        component: () => import(/* webpackChunkName: "group-error" */ '@pages/error/Page404')
    },

]
