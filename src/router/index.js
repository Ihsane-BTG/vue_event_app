import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import About from '@/views/About.vue'
import Agenda from '@/views/Agenda.vue'
import Speakers from '@/views/Speakers.vue'

const routes = [
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta: {
        title: 'Future Forward Summit - Home'
      }
    },
    {
      path: '/about',
      name: 'About',
      component: About,
      meta: {
        title: 'About Our Event'
      }
    },
    {
      path: '/agenda',
      name: 'Agenda',
      component: Agenda,
      meta: {
        title: 'Event Agenda'
      }
    },
    {
      path: '/speakers',
      name: 'Speakers',
      component: Speakers,
      meta: {
        title: 'Our Speakers'
      }
    }
]
  
const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
    scrollBehavior(to, from, savedPosition) {
      if (savedPosition) {
        return savedPosition
      } else {
        return { top: 0, behavior: 'smooth' }
      }
    }
})

router.beforeEach((to, from, next) => {
    document.title = to.meta.title || 'Eventify - Digital Conference'
    next()
})
  
export default router