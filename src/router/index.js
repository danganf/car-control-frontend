import Vue from 'vue'
import VueRouter from 'vue-router';
import routes from './routers.map';
import { cat } from 'shelljs';

Vue.use(VueRouter);

const router = new VueRouter({
    routes
});

router.beforeEach((to, from, next) => {
    //to.meta.prev_name  = from.name;
    //to.meta.prev_query = from.query;
    //console.log(to.meta, from);
    // if (to.meta.auth && !store.state.auth.authenticated) {
    //     return router.push({name: 'auth'})
    // }

    // if ( to.matched.some(record => record.meta.auth) &&  !store.state.auth.authenticated) {
    //     return router.push({name: 'auth'})
    // }
    next()
})

export default router