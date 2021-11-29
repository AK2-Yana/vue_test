import Vue from 'vue'
import Router from 'vue-router'

import HelloChild from './components/HelloChild'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'HelloChild',
            component: HelloChild
        }
    ]
})