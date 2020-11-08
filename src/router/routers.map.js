import Home from "@pages/Home"
import Fuel from "@pages/Fuel"
import Page404 from "@pages/error/Page404"

export default [

    {
        path: '/',
        component: Home,
        name: 'home',
    },

    {
        path: '/fuel',
        component: Fuel,
        name: 'fuel',
    },

    // Rota 404
    {
        path: '*',
        name: '404',
        component: Page404
    },

]
