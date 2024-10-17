import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '../views/Home.vue'
import ColaboradoreView from '../views/Colraboradores-view.vue'
import RelatoresView from '../views/Relatores.vue'

const routes=[
    {
        path:'/',
        name:'Inicio',
        component:HomeView,
    },
    {
        path:'/relatores',
        name:'Relatores',
        component:RelatoresView,
    },
    {
        path:'/colaboradores',
        name:'Empresas Colaboradoras',
        component:ColaboradoreView,
    },
]

const router=createRouter({
    history:createWebHistory(),
    routes,
})

export default router
