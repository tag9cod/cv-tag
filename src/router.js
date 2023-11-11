import { createRouter, createWebHistory } from 'vue-router';
import Home from './components/MainBar.vue';
import About from './components/pages/AboutMe.vue';
import sertif from './components/pages/CourseMe.vue';
import kerja from './components/pages/WorkExp.vue';

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home,
    },
    {
        path: '/aboutme',
        name: 'aboutme',
        component: About,
    },
    {
        path: '/certified',
        name: 'certified',
        component: sertif,
    },
    {
        path: '/work',
        name: 'work',
        component: kerja,
    }
]


const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;