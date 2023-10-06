import { createRouter, createWebHistory } from 'vue-router'
import Recent from "@/views/Recent.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {name : 'Recent',
    component: Recent,
    path:'/'}
  ]
})

export default router
