import { createRouter, createWebHistory } from 'vue-router'
import Recent from '@/views/Recent.vue'
import SinglePost from '@/views/SinglePost.vue'
import CreatePost from '@/views/CreatePost.vue'
import Profile from '@/views/Profile.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { name: 'Recent', component: Recent, path: '/' },
    { name: 'CreatePost', component: CreatePost, path: '/new' },
    { name: 'Profile', component: Profile, path: '/profile' },
    {
      path: '/post/:id',
      name: 'single-post',
      component: SinglePost
    },

    {
      path: '/:catchAll(.*)',
      name: 'Error',
      component: Error
    }
  ]
})

export default router
