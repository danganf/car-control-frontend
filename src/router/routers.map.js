import Home from "@pages/Home"
import Fuel from "@pages/Fuel"
import TypeVehicle from "@pages/Type.Vehicle"
import Page404 from "@pages/error/Page404"

export default [

    {
        path: '/',
        component: Home,
        name: 'home',
    },

    {
        path: '/fuels',
        component: Fuel,
        name: 'fuels',
    },

    {
        path: '/type-vehicles',
        component: TypeVehicle,
        name: 'type-vehicles',
    },

    // Rota 404
    {
        path: '*',
        name: '404',
        component: Page404
    },

]
