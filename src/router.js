import { createRouter, createWebHashHistory } from "vue-router";
import TheDashboard from './components/TheDashboard.vue'
import TheSocial from './components/TheSocial.vue'
import TheMessages from './components/TheMessages.vue'




export default createRouter({
    history: createWebHashHistory(),
    routes: [
        {path: '/subscribe', component: TheDashboard, alias: '/'},
        {path: '/social', component: TheSocial},
        {path: '/messages', component: TheMessages}
    ]
})