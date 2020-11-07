import Home from "@pages/Home"
import Page404 from "@pages/error/Page404"

export default [

    {
        path: '/',
        component: Home,
        name: 'home',
    },

    // Rota 404
    {
        path: '*',
        name: '404',
        component: Page404
    },

]
