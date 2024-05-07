import {createRouter, createWebHistory} from "vue-router";


const routes = [

    {path: '/fruits', component: () => import('./components/Fruits/IndexFruitComponent.vue'), name: 'fruits.index'},
    {path: '/users/login', component: () => import('./components/User/LoginComponent.vue'), name: 'users.login'},
    {path: '/users/registration', component: () => import('./components/User/RegistrationComponent.vue'), name: 'users.registration'},

]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
