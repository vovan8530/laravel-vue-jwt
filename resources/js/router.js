import {createRouter, createWebHistory} from "vue-router";


const routes = [

    {path: '/fruits', component: () => import('./components/Fruits/IndexFruitComponent.vue'), name: 'fruits.index'},
    {path: '/users/login', component: () => import('./components/User/LoginComponent.vue'), name: 'users.login'},
    {
        path: '/users/registration',
        component: () => import('./components/User/RegistrationComponent.vue'),
        name: 'users.registration'
    },
    {
        path: '/users/personal',
        component: () => import('./components/User/PersonalComponent.vue'),
        name: 'users.personal'
    },
    {
        path: '/:catchAll(.*)',
        component: () => import('./components/User/PersonalComponent.vue'),
        name: '404'
    },

]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

router.beforeEach((to, from, next) => {
    const accessToken = localStorage.getItem('access_token')

    if(!accessToken){
        if (to.name === 'users.login' || to.name === 'users.registration'){
            return  next()
        }else{
            return next({name: 'users.login'})
        }
    }

    if(to.name === 'users.login' || to.name === 'users.registration' && accessToken){
        return next({name: 'users.personal'})
    }

    next()
})

export default router
