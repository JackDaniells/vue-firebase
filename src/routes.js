import Vue from 'vue'
import VueRouter from 'vue-router'


import firebase from 'firebase'

Vue.use(VueRouter);

import home from './pages/home/home.vue'
import login from './pages/login/login.vue'

var router = new VueRouter({
    // mode: 'history',
    // base: '/',
    routes: [
        {
            path: '*',
            redirect: '/login'
        },
        {
            path: '/',
            redirect: '/login'
        },
        {
            path: '/login',
            name: 'login',
            component: login
        },
        {
            path: '/home',
            name: 'home',
            component: home,
            meta: {
                requiresAuth: true
            }
        },
    ]
});

router.beforeEach((to, from, next) => {
    var currentUser = firebase.auth().currentUser;
    var requiresAuth = to.matched.some(record => record.meta.requiresAuth);

    if (requiresAuth && !currentUser) {
        console.log('login')
        next({name:'login'})
    }
    else {
        next()
    } 
})

export default router