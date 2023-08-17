import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DetailView from '../views/DetailView.vue'
import LoginView from '../views/Login.vue'
import SignupView from '../views/Signup.vue'
import MeView from '../views/Me.vue'
import ContentComponent from '../components/ContentComponent.vue'
import MenuView from '../views/MenuView.vue'
import ShotView from '../views/Shot.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView,
            children: [
                {
                    path: '/',
                    name: 'contentComponent',
                    component: ContentComponent
                },
                {
                    path: '/me',
                    name: 'me',
                    component: MeView
                },
                {
                    path: '/shot',
                    name: 'shot',
                    component: ShotView
                },
            ]
        },
        {
            path: '/menu',
            name: 'menu',
            component: MenuView
        },
        {
            path: '/login',
            name: 'login',
            component: LoginView
        },
        {
            path: '/signup',
            name: 'signup',
            component: SignupView
        },
        {
            path: '/about',
            name: 'about',
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import('../views/AboutView.vue')
        },

        {
            path: '/detailView',
            name: 'detailView',
            component: DetailView
        }
    ]
})

export default router
