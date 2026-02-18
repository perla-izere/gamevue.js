import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
//REQUIRED FUNCTION
import {createRouter, createWebHistory} from "vue-router" 
import Home from './pages/Home.vue'
import info from './pages/info.vue'
import PageNotFound from './pages/PageNotFound.vue'
const routes = [
    {
        path:"/Home", component:Home
    },{
        path:"/info",component:info
    },{
    path:'/:pathMatch(.*)*', name: 'PageNotFound',component: PageNotFound
  }
]
const app = createApp(App)
app.use(createRouter({ 
    routes,
    history:createWebHistory()
}
))
app.mount('#app')

