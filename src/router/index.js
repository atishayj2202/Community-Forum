import { createRouter, createWebHistory } from 'vue-router'
import Recent from '@/views/Recent.vue'
import SinglePost from '@/views/SinglePost.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { name: 'Recent', component: Recent, path: '/' },
    {
      path: '/post/:id',
      name: 'single-post',
      component: SinglePost
    }
  ]
})

export default router
