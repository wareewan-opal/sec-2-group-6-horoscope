import { createRouter, createWebHistory } from 'vue-router'
import selectcard from '../views/selectcard.vue'
import Home from '../views/home.vue'
import RequestSun from '../views/requestSun.vue'
const history = createWebHistory()

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home 
    },
    {
        path: '/select-card',
        name: 'selectcard',
        component: selectcard
    },
    {
        path: '/requst-to-sun',
        name: 'RequestSun',
        component: RequestSun
    }
]
const router = createRouter({ history,routes })
export default router